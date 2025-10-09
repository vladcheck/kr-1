document.body.innerHTML =
  ` <header><h1>Мой сайт</h1>
    <nav class="nav" id="menu">
        <ul class="nav__list">
            <li class="nav__item"><a href="../index.html">Главная</a></li>
            <li class="nav__item"><a href="./news.html">Новости</a></li>
            <li class="nav__item"><a href="./practices.html">Практики</a></li>
            <li class="nav__item"><a href="./goods.html">Товары</a></li>
            <li class="nav__item"><a href="./contacts.html">Контакты</a></li>
        </ul>
    </nav>
    </header>` + document.body.innerHTML;

const body = document.querySelector("body");

const darkModeBtn = document.createElement("button");
darkModeBtn.id = "button__dark-mode";

darkModeBtn.addEventListener("click", () => {
  darkModeBtn.classList.toggle("active");
  body.classList.toggle("dark");
});
body.appendChild(darkModeBtn);
