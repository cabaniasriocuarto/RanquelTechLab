$(document).ready(function () {
  // Слайдер
  $(".owl-carousel").owlCarousel({
    items: 1,
  });

  // Рейтинг звездочек
  const ratingItemsList = document.querySelectorAll(".rating__item");
  const ratingItemsArray = Array.from(ratingItemsList);
  ratingItemsArray.forEach((item) => {
    item.addEventListener("click", () => {
      const { ItemValue } = item.dataset;
      item.parentNode.dataset.totalValue = item.dataset.itemValue;
    });
  });

  // Опеделяем переменные
  var navToggleButton = $("#navigation__button");
  var navBlock = $(".navigation__list");
  var navBlockOpen = "navigation__list--open";
  var navLink = $(".navigation__list a");

  // События по клику на иконку
  navToggleButton.on("click", function (e) {
    e.preventDefault();
    navBlock.toggleClass(navBlockOpen);
    navButtonToggle();
  });

  // События по клику на ссылки
  navLink.on("click", function () {
    if (navBlock.hasClass(navBlockOpen)) {
      navButtonToggle();
    }
    navBlock.removeClass(navBlockOpen);
  });

  // Функция для анимации иконки
  function navButtonToggle() {
    if (navToggleButton.hasClass("active")) {
      navToggleButton.removeClass("active");
    } else {
      navToggleButton.addClass("active");
    }
  }

  //slide2id - плавная прокрутка по ссылкам внутри страницы
  $(
    "nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id"
  ).mPageScroll2id({
    highlightSelector: "nav a",
  });

  // Инициализация библиотеки с анимацией AOS
  AOS.init();
});
