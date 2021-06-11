'use strict';

// 1) По нажатию на кнопку изменить текст самой кнопки (см. innerText).

const btn = document.getElementById('btn1');
btn.onclick = changeText;

function changeText(e) {
  btn.innerText = 'Thank you for clicking!';
}

// 2) Отобразить картинку. Сделать так, что бы при появлении страницы отображалсь одна картинка, а при наведении мышью на неё отображалась другая.

const imgSrc1 = ["https://images.unsplash.com/photo-1552728089-57bdde30beb3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmlyZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"];
const imgSrc2 = ["https://images.unsplash.com/photo-1452570053594-1b985d6ea890?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmlyZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"];
const img = document.createElement('img');
const body = document.getElementsByTagName('body');
body[0].append(img);
const showGreenParrot = e => {
  img.setAttribute('src', imgSrc1);
  img.setAttribute('alt', 'green parrot');
}
showGreenParrot();
img.onmouseleave = showGreenParrot;
img.onmouseover = e => {
  img.setAttribute('src', imgSrc2);
  img.setAttribute('alt', 'multicolour parrot');
}

// 3) Сгенерировать заданную структуру:
// <h1>Header1</h1>
// <article>
// <h2>Header2</h2>
// <div><img src="" alt=""></div>
// <p>It is paragraph</p>
// </article>
// (привязать <div id="root"></div>)

const h1 = document.createElement('h1');
body[0].append(h1);
h1.innerText = 'Header1';
const article = document.createElement('article');
body[0].append(article);
const h2 = document.createElement('h2');
h2.innerText = 'Header2';
article.append(h2);
const div = document.createElement('div');
div.setAttribute('id', 'root');
article.append(div);
const picture = document.createElement('img');
div.append(picture);
picture.setAttribute('src', 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2VyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60');
picture.setAttribute('alt', 'orange flowers');
const p = document.createElement('p');
p.innerText = 'It is a paragraph';
body[0].append(p);



// Advanced:
// Доделать анимацию появления следующего кадра в слайдере.
// Пример анимации на сайте внизу:
// https://pixelbuddha.net/livepreview/activebox/</article>