import i18Obj from "./translate.js";

function chooseLang() {
  let headerLink = document.querySelector(".header-link");
  if (headerLink.textContent == "Skills") {
    return "en";
  }
  if (headerLink.textContent == "Навыки") {
    return "ru";
  }
}

function currentTheme() {
  const headerContainer = document.querySelector(".header-container");
  if (headerContainer.classList.contains("header-container-light")) {
    return "light";
  } else {
    return "dark";
  }
}

function chooseTheme(arg) {
  if (arg == "light") {
    const changeTheme = document.querySelector(".header-theme");
    const headerContainer = document.querySelector(".header-container");
    const contactsContainer = document.querySelector(".contacts-container");
    const heroContainer = document.querySelector(".hero-container");
    const btnHero = document.querySelector(".btn-hero");
    const btnPortfolio = document.querySelectorAll(".btn-portfolio");
    const btnPrice = document.querySelectorAll(".btn-price");
    const btnMessage = document.querySelector(".btn-message");
    const headerLogo = document.querySelector(".header-logo");
    const links = document.querySelectorAll("a");
    const langs = document.querySelectorAll(".header-languages_link");
    const languagesLine = document.querySelector(".header-languages-line");
    const headerTheme = document.querySelector(".header-theme");
    const h1text = document.querySelector("h1");
    const paragraphs = document.querySelectorAll("p");
    const sectionTitle = document.querySelectorAll(".section-title");
    const sectionLines = document.querySelectorAll(".section-title_lines");
    const h3text = document.querySelectorAll("h3");
    const h2text = document.querySelectorAll("h2");
    const spanText = document.querySelectorAll("span");
    const btsContact = document.querySelectorAll(".bts-contact");
    const btsTextarea = document.querySelector(".bts-textarea");
    const socialsIcon = document.querySelectorAll(".socials-icon");
    const burgerLine = document.querySelectorAll(".burger_line");
    const headerBurger = document.querySelector(".header_burger");
    const headerNav = document.querySelector(".header-nav");
    const headerList = document.querySelector(".header-list");
    const headerItem = document.querySelectorAll(".header-item");
    const headerLink = document.querySelectorAll(".header-link");

    document.body.classList.toggle("body-light");
    headerContainer.classList.toggle("header-container-light");
    contactsContainer.classList.toggle("contacts-container-light");
    heroContainer.classList.toggle("hero-container-light");
    btnHero.classList.toggle("btn-hero-light");

    btnPortfolio.forEach((item) => {
      item.classList.toggle("btn-portfolio-light");
      if (item.classList.contains("btn-active")) {
        item.classList.toggle("btn-active-light");
      }
    });

    btnPrice.forEach((item) => {
      item.classList.toggle("btn-portfolio-light");
    });

    btnMessage.classList.toggle("btn-hero-light");
    headerLogo.classList.toggle("header-logo-light");

    links.forEach((item) => {
      if (item.classList.contains("header-link")) {
        item.classList.toggle("header-link-light");
      } else {
        item.classList.toggle("link-light");
      }
    });

    languagesLine.classList.toggle("header-languages-line-light");

    headerTheme.classList.toggle("header-theme-light");
    h1text.classList.toggle("text-light");

    paragraphs.forEach((item) => {
      item.classList.toggle("text-light");
    });

    h2text.forEach((item) => {
      item.classList.toggle("text-light");
    });

    h3text.forEach((item) => {
      item.classList.toggle("text-light");
    });

    spanText.forEach((item) => {
      if (item.classList.contains("header-languages_link")) {
      } else {
        item.classList.toggle("text-light");
      }
    });

    btsContact.forEach((item) => {
      item.classList.toggle("bts-contact-light");
    });

    btsTextarea.classList.toggle("bts-textarea-send-light");

    sectionTitle.forEach((item) => {
      item.classList.toggle("section-title-light");
    });

    sectionLines.forEach((item) => {
      item.classList.toggle("section-title_lines-light");
    });

    socialsIcon.forEach((item) => {
      item.classList.toggle("socials-icon-light");
    });

    burgerLine.forEach((item) => {
      item.classList.toggle("burger_line-light");
    });

    headerBurger.classList.toggle("header_burger-light");

    headerNav.classList.toggle("header-nav-light");

    headerList.classList.toggle("header-list-light");

    headerItem.forEach((item) => {
      item.classList.toggle("header-item-light");
    });

    langs.forEach((item) => {
      item.classList.toggle("header-languages_link-light");
    });
    if (headerLink[0].textContent == "Skills") {
      langs[0].classList.toggle("header-languages_link-active-light");
    }
    if (headerLink[0].textContent == "Навыки") {
      langs[1].classList.toggle("header-languages_link-active-light");
    }
  }
  if (arg == "dark") {
    const headerLink = document.querySelectorAll(".header-link");
    const langs = document.querySelectorAll(".header-languages_link");

    if (headerLink[0].textContent == "Skills") {
      langs[0].classList.add("header-languages_link-active");
    }
    if (headerLink[0].textContent == "Навыки") {
      langs[0].classList.remove("header-languages_link-active");
      langs[1].classList.add("header-languages_link-active");
    }
  }
}

(function () {
  // Бургер меню

  const burgerItem = document.querySelector(".burger");
  const menu = document.querySelector(".header-nav");
  const burgerLine = document.querySelectorAll(".burger_line");
  const headerNav = document.querySelector(".header-nav");
  const darkBlock = document.querySelector(".dark-block");
  burgerItem.addEventListener("click", () => {
    if (document.body.clientWidth < 769) {
      darkBlock.classList.toggle("dark");
      document.body.classList.toggle("stop-scrolling");
      menu.classList.toggle("header_nav_active");
      burgerLine.forEach((item) => {
        item.classList.toggle("header_nav-close-line");
      });
    }
  });

  headerNav.addEventListener("click", (event) => {
    if (document.body.clientWidth < 769) {
      if (event.target.className === "header-link") {
        document.body.classList.toggle("stop-scrolling");
        darkBlock.classList.toggle("dark");
        menu.classList.toggle("header_nav_active");
        burgerLine.forEach((item) => {
          item.classList.toggle("header_nav-close-line");
        });
      }
    }
  });
})();

(function () {
  // Смена изображений в сезонах
  const seasons = ["winter", "spring", "summer", "autumn"];
  const btnPortfolio = document.querySelector(".portfolio_buttons");
  const btnCard = document.querySelectorAll(".portfolio_card");
  const btnSeason = document.querySelectorAll(".btn-portfolio");

  function preloadImages(folders) {
    folders.forEach((item) => {
      for (let i = 1; i <= 6; i++) {
        const img = new Image();
        img.src = `./assets/img/${item}/${i}.jpg`;
      }
    });
  }
  preloadImages(seasons);

  const changeClassActive = (btnCurrent) => {
    if (btnCurrent.classList.contains("btn-portfolio-light")) {
      btnCurrent.classList.add("btn-active-light");
    }
    btnCurrent.classList.add("btn-active");
  };

  btnPortfolio.addEventListener("click", (event) => {
    btnSeason.forEach((item) => {
      item.classList.remove("btn-active");
      item.classList.remove("btn-active-light");
    });

    if (event.target.classList.contains("btn-portfolio")) {
      let btnCurrent = event.target;
      if (btnCurrent.dataset.season == "winter") {
        changeClassActive(btnCurrent);
        let season = btnCurrent.dataset.season;
        btnCard.forEach((item, index) => {
          item.style.backgroundImage = `url('./assets/img/${season}/${
            index + 1
          }.jpg')`;
        });
      }
      if (btnCurrent.dataset.season == "spring") {
        changeClassActive(btnCurrent);
        let season = btnCurrent.dataset.season;
        btnCard.forEach((item, index) => {
          item.style.backgroundImage = `url('./assets/img/${season}/${
            index + 1
          }.jpg')`;
        });
      }
      if (btnCurrent.dataset.season == "summer") {
        changeClassActive(btnCurrent);
        let season = btnCurrent.dataset.season;
        btnCard.forEach((item, index) => {
          item.style.backgroundImage = `url('./assets/img/${season}/${
            index + 1
          }.jpg')`;
        });
      }
      if (btnCurrent.dataset.season == "autumn") {
        changeClassActive(btnCurrent);
        let season = btnCurrent.dataset.season;
        btnCard.forEach((item, index) => {
          item.style.backgroundImage = `url('./assets/img/${season}/${
            index + 1
          }.jpg')`;
        });
      }
    }
  });
})();

// смена языка
const languages = document.querySelector(".header-languages");
const languagesLink = document.querySelectorAll(".header-languages_link");

const changeClassActiveEng = (enCurrent) => {
  if (enCurrent.classList.contains("header-languages_link-light")) {
    enCurrent.classList.add("header-languages_link-active-light");
  } else {
    enCurrent.classList.add("header-languages_link-active");
  }
};

const getTranslate = (lang) => {
  const attr = document.querySelectorAll("[data-i18]");
  const langRu = Object.entries(i18Obj.ru);
  const langEn = Object.entries(i18Obj.en);
  if (lang == "ru") {
    attr.forEach((item) => {
      langRu.forEach((elem) => {
        if (elem[0] == item.dataset.i18) {
          item.textContent = elem[1];
        }
      });
    });
  }
  if (lang == "en") {
    attr.forEach((item) => {
      langEn.forEach((elem) => {
        if (elem[0] == item.dataset.i18) {
          item.textContent = elem[1];
        }
      });
    });
  }
};

languages.addEventListener("click", (event) => {
  languagesLink.forEach((item) => {
    item.classList.remove("header-languages_link-active");
    item.classList.remove("header-languages_link-active-light");
  });
  if (event.target.classList.contains("header-languages_link")) {
    let enCurrent = event.target;
    changeClassActiveEng(enCurrent);
    getTranslate(enCurrent.dataset.lang);
  }
});

function theme() {
  // светлая тема
  const changeTheme = document.querySelector(".header-theme");
  const headerContainer = document.querySelector(".header-container");
  const contactsContainer = document.querySelector(".contacts-container");
  const heroContainer = document.querySelector(".hero-container");
  const btnHero = document.querySelector(".btn-hero");
  const btnPortfolio = document.querySelectorAll(".btn-portfolio");
  const btnPrice = document.querySelectorAll(".btn-price");
  const btnMessage = document.querySelector(".btn-message");
  const headerLogo = document.querySelector(".header-logo");
  const links = document.querySelectorAll("a");
  const langs = document.querySelectorAll(".header-languages_link");
  const languagesLine = document.querySelector(".header-languages-line");
  const headerTheme = document.querySelector(".header-theme");
  const h1text = document.querySelector("h1");
  const paragraphs = document.querySelectorAll("p");
  const sectionTitle = document.querySelectorAll(".section-title");
  const sectionLines = document.querySelectorAll(".section-title_lines");
  const h3text = document.querySelectorAll("h3");
  const h2text = document.querySelectorAll("h2");
  const spanText = document.querySelectorAll("span");
  const btsContact = document.querySelectorAll(".bts-contact");
  const btsTextarea = document.querySelector(".bts-textarea");
  const socialsIcon = document.querySelectorAll(".socials-icon");
  const burgerLine = document.querySelectorAll(".burger_line");
  const headerBurger = document.querySelector(".header_burger");
  const headerNav = document.querySelector(".header-nav");
  const headerList = document.querySelector(".header-list");
  const headerItem = document.querySelectorAll(".header-item");

  changeTheme.addEventListener("click", (event) => {
    document.body.classList.toggle("body-light");
    headerContainer.classList.toggle("header-container-light");
    contactsContainer.classList.toggle("contacts-container-light");
    heroContainer.classList.toggle("hero-container-light");
    btnHero.classList.toggle("btn-hero-light");

    btnPortfolio.forEach((item) => {
      item.classList.toggle("btn-portfolio-light");
      if (item.classList.contains("btn-active")) {
        item.classList.toggle("btn-active-light");
      }
    });

    btnPrice.forEach((item) => {
      item.classList.toggle("btn-portfolio-light");
    });

    btnMessage.classList.toggle("btn-hero-light");
    headerLogo.classList.toggle("header-logo-light");

    links.forEach((item) => {
      if (item.classList.contains("header-link")) {
        item.classList.toggle("header-link-light");
      } else {
        item.classList.toggle("link-light");
      }
    });

    languagesLine.classList.toggle("header-languages-line-light");

    langs.forEach((item) => {
      item.classList.toggle("header-languages_link-light");
      if (item.classList.contains("header-languages_link-active")) {
        item.classList.toggle("header-languages_link-active");
        item.classList.toggle("header-languages_link-active-light");
      } else if (
        item.classList.contains("header-languages_link-active-light")
      ) {
        item.classList.toggle("header-languages_link-active-light");
        item.classList.toggle("header-languages_link-active");
      }
    });

    headerTheme.classList.toggle("header-theme-light");
    h1text.classList.toggle("text-light");

    paragraphs.forEach((item) => {
      item.classList.toggle("text-light");
    });

    h2text.forEach((item) => {
      item.classList.toggle("text-light");
    });

    h3text.forEach((item) => {
      item.classList.toggle("text-light");
    });
    spanText.forEach((item) => {
      if (item.classList.contains("header-languages_link")) {
      } else {
        item.classList.toggle("text-light");
      }
    });

    btsContact.forEach((item) => {
      item.classList.toggle("bts-contact-light");
    });

    btsTextarea.classList.toggle("bts-textarea-send-light");

    sectionTitle.forEach((item) => {
      item.classList.toggle("section-title-light");
    });

    sectionLines.forEach((item) => {
      item.classList.toggle("section-title_lines-light");
    });

    socialsIcon.forEach((item) => {
      item.classList.toggle("socials-icon-light");
    });

    burgerLine.forEach((item) => {
      item.classList.toggle("burger_line-light");
    });

    headerBurger.classList.toggle("header_burger-light");

    headerNav.classList.toggle("header-nav-light");

    headerList.classList.toggle("header-list-light");

    headerItem.forEach((item) => {
      item.classList.toggle("header-item-light");
    });
  });
}
theme();

function setLocalStorage() {
  localStorage.setItem("lang", chooseLang());
  localStorage.setItem("theme", currentTheme());
}
window.addEventListener("beforeunload", setLocalStorage);
function getLocalStorage() {
  if (localStorage.getItem("lang")) {
    const langMain = localStorage.getItem("lang");
    getTranslate(langMain);
  }
  if (localStorage.getItem("theme")) {
    const themeMain = localStorage.getItem("theme");

    chooseTheme(themeMain);
  }
}
window.addEventListener("load", getLocalStorage);

(function () {
  const videoPoster = document.querySelector(".video-poster");
  const playerVideo = document.querySelector(".player-video");
  const playerPlay = document.querySelector(".player-play");
  const videoPlayerBtn = document.querySelector(".video-player_button");
  const playerProgress = document.querySelector(".player-progress");
  const playerVolumeMute = document.querySelector(".player-volume-mute");
  const playerProgressTime = document.querySelector(".player-progress-time");
  const playerVolume = document.querySelector(".player-volume");
  const playerFullscreen = document.querySelector(".player-fullscreen");
  let playerPlayVal = false;

  function updateProgress() {
    // update прогресс
    let newValue = playerProgress.value;
    newValue = Math.trunc(
      (100 * playerVideo.currentTime) / playerVideo.duration
    );
    playerProgress.style.background = `linear-gradient(to right, goldenrod 0%, goldenrod ${newValue}%, #333333 ${newValue}%, #333333 100%)`;
    playerProgress.value = newValue;
  }

  setInterval(updateProgress, 700);

  playerProgress.addEventListener("input", function () {
    // менять прогресс
    const value = this.value;
    playerVideo.currentTime = (value * playerVideo.duration) / 100;
    this.style.background = `linear-gradient(to right, goldenrod 0%, goldenrod ${value}%, #333333 ${value}%, #333333 100%)`;
  });

  playerVideo.ontimeupdate = function () {
    updateTime();
  }; // обновлять прогресс в процентах

  function updateTime() {
    // функция обнловления
    playerProgressTime.textContent =
      Math.trunc((playerVideo.currentTime * 100) / playerVideo.duration) + "%";
  }

  playerVolume.addEventListener("input", function () {
    if (playerVolumeMute.classList.contains("player-volume-mute-active")) {
      playerVolumeMute.classList.remove("player-volume-mute-active");
    }
    const value = this.value;
    playerVideo.volume = value / 100;
    this.style.background = `linear-gradient(to right, goldenrod 0%, goldenrod ${value}%, #333333 ${value}%, #333333 100%)`;
    if(playerVideo.volume == 0) {
      playerVolumeMute.classList.add("player-volume-mute-active");
    }
  });

  playerVolumeMute.addEventListener("click", () => {
    // убирать звук
    playerVolumeMute.classList.toggle("player-volume-mute-active");
    if (playerVideo.volume != 0) {
      playerVideo.volume = 0;
    } else {
      playerVideo.volume = playerVolume.value / 100;
    }
  });

  playerFullscreen.addEventListener("click", goFullScreen); // клик по фулскрин

  function goFullScreen() {
    if (playerVideo.webkitSupportsFullscreen)
      playerVideo.webkitEnterFullScreen();
  }

  playerPlay.addEventListener("click", () => {
    // нажатие на кнопку
    if (playerPlayVal == false) {
      playerPlayVal = true;
      playerVideo.play();
      videoPlayerBtn.hidden = true;
      playerPlay.classList.toggle("player-play-start");
    } else if (playerPlayVal == true) {
      playerPlayVal = false;
      playerVideo.pause();
      videoPlayerBtn.hidden = false;
      playerPlay.classList.toggle("player-play-start");
    }
  });

  playerVideo.addEventListener("click", () => {
    // нажатие на изображение
    if (playerPlayVal == false) {
      videoPoster.style.opacity = "0";
      playerPlayVal = true;
      videoPlayerBtn.hidden = true;
      playerVideo.play();
      setTimeout(function () {
        videoPoster.hidden = true;
      }, 600);
      playerPlay.classList.toggle("player-play-start");
    } else if (playerPlayVal == true) {
      playerPlayVal = false;
      playerVideo.pause();
      videoPlayerBtn.hidden = false;
      playerPlay.classList.toggle("player-play-start");
    }
  });

  videoPlayerBtn.addEventListener("click", () => {
    // нажатие по большую кнопку
    videoPoster.style.opacity = "0";
    playerPlayVal = true;
    videoPlayerBtn.hidden = true;
    playerVideo.play();
    setTimeout(function () {
      videoPoster.hidden = true;
    }, 600);
    playerPlay.classList.toggle("player-play-start");
  });
})();
