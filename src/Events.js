/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    let btn = document.createElement('button');
    btn.textContent = 'Удали меня';
    btn.addEventListener('click', () => {
        document.body.removeChild(btn);
    });
    document.body.appendChild(btn);
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    let newUl = document.createElement('ul');
    let newLi;
    for (let i = 0; i < arr.length; i++) {
        newLi = document.createElement('li');
        newLi.textContent = arr[i];
        newUl.appendChild(newLi);
    }

    newUl.addEventListener('mouseover', () => {
        let temp = event.target;
        temp.setAttribute('title', temp.textContent);
    });
    document.body.appendChild(newUl);
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    let link = document.createElement('a');
    link.setAttribute('href', 'https://tensor.ru/');
    link.textContent = 'tensor';
    link.addEventListener(
        'click',
        () => {
            event.preventDefault();
            event.target.textContent =
                event.target.textContent +
                ' ' +
                event.target.getAttribute('href');
        },
        { once: true },
    );
    document.body.appendChild(link);
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    let ul = document.createElement('ul');
    let li;
    li = document.createElement('li');
    li.textContent = 'Пункт';
    let btn = document.createElement('button');
    btn.textContent = 'Добавить пункт';
    ul.appendChild(li);
    ul.addEventListener('click', () => {
        event.target.textContent = event.target.textContent + '!';
    });
    btn.addEventListener('click', () => {
        let targetUl = document.body.querySelector('ul');
        li = document.createElement('li');
        li.textContent = 'Пункт';
        targetUl.appendChild(li);
    });
    document.body.appendChild(ul);
    document.body.appendChild(btn);
}
