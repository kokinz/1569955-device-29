const contactsButton = document.querySelector(".contacts-button");
const contactsPopup = document.querySelector(".modal-write-us");
const contactsClose = contactsPopup.querySelector(".modal-close");
const contactsForm = document.querySelector(".write-us-form");
const contactsName = contactsPopup.querySelector("input[name=full-name]");
const contactsEmail = contactsPopup.querySelector("input[name=email]");
const contactsText = contactsPopup.querySelector("textarea[name=text]");

const mapButton = document.querySelector(".contacts-map");
const mapPopup = document.querySelector(".modal-map");
const mapClose = mapPopup.querySelector(".modal-close");

const promoControl1 = document.querySelector(".promo-control-slide-1");
const promoControl2 = document.querySelector(".promo-control-slide-2");
const promoControl3 = document.querySelector(".promo-control-slide-3");

const promoSlide1 = document.querySelector(".promo-slider-item-1");
const promoSlide2 = document.querySelector(".promo-slider-item-2");
const promoSlide3 = document.querySelector(".promo-slider-item-3");

const servicesControl1 = document.querySelector(".button-delivery");
const servicesControl2 = document.querySelector(".button-warranty");
const servicesControl3 = document.querySelector(".button-credit");

const servicesSlide1 = document.querySelector(".services-slider-item-delivery");
const servicesSlide2 = document.querySelector(".services-slider-item-warranty");
const servicesSlide3 = document.querySelector(".services-slider-item-credit");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

servicesControl1.addEventListener("click", function (evt) {
    evt.preventDefault();
    servicesControl1.classList.add("button-active");
    servicesControl2.classList.remove("button-active");
    servicesControl3.classList.remove("button-active");

    servicesSlide1.classList.add("services-slider-item-active");
    servicesSlide2.classList.remove("services-slider-item-active");
    servicesSlide3.classList.remove("services-slider-item-active");
});

servicesControl2.addEventListener("click", function (evt) {
    evt.preventDefault();
    servicesControl2.classList.add("button-active");
    servicesControl1.classList.remove("button-active");
    servicesControl3.classList.remove("button-active");

    servicesSlide2.classList.add("services-slider-item-active");
    servicesSlide1.classList.remove("services-slider-item-active");
    servicesSlide3.classList.remove("services-slider-item-active");
});

servicesControl3.addEventListener("click", function (evt) {
    evt.preventDefault();
    servicesControl3.classList.add("button-active");
    servicesControl2.classList.remove("button-active");
    servicesControl1.classList.remove("button-active");

    servicesSlide3.classList.add("services-slider-item-active");
    servicesSlide2.classList.remove("services-slider-item-active");
    servicesSlide1.classList.remove("services-slider-item-active");
});

promoControl1.addEventListener("click", function (evt) {
    evt.preventDefault();
    promoControl1.classList.add("promo-slider-control-button-active");
    promoControl2.classList.remove("promo-slider-control-button-active");
    promoControl3.classList.remove("promo-slider-control-button-active");

    promoSlide1.classList.add("promo-slider-item-active");
    promoSlide2.classList.remove("promo-slider-item-active");
    promoSlide3.classList.remove("promo-slider-item-active");
});

promoControl2.addEventListener("click", function (evt) {
    evt.preventDefault();
    promoControl2.classList.add("promo-slider-control-button-active");
    promoControl1.classList.remove("promo-slider-control-button-active");
    promoControl3.classList.remove("promo-slider-control-button-active");

    promoSlide2.classList.add("promo-slider-item-active");
    promoSlide1.classList.remove("promo-slider-item-active");
    promoSlide3.classList.remove("promo-slider-item-active");
});

promoControl3.addEventListener("click", function (evt) {
    evt.preventDefault();
    promoControl3.classList.add("promo-slider-control-button-active");
    promoControl2.classList.remove("promo-slider-control-button-active");
    promoControl1.classList.remove("promo-slider-control-button-active");

    promoSlide3.classList.add("promo-slider-item-active");
    promoSlide2.classList.remove("promo-slider-item-active");
    promoSlide1.classList.remove("promo-slider-item-active");
});

contactsButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    contactsPopup.classList.add("modal-show");

    if (storage) {
        contactsName.value = storage;
        contactsEmail.focus();
    } else {
        contactsName.focus();
    }
});

contactsClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    contactsPopup.classList.remove("modal-show");
    contactsPopup.classList.remove("modal-error");
});

contactsForm.addEventListener("submit", function (evt) {
    if (!contactsName.value || !contactsEmail.value || !contactsText.value) {
        evt.preventDefault();
        contactsPopup.classList.remove("modal-error");
        contactsPopup.offsetWidth = contactsPopup.offsetWidth;
        contactsPopup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("full-name", contactsName.value);
        }
    }
});

mapButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
});
  
mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (contactsPopup.classList.contains("modal-show")) {
            evt.preventDefault();
            contactsPopup.classList.remove("modal-show");
            contactsPopup.classList.remove("modal-error");
        }
        if (mapPopup.classList.contains("modal-show")) {
            evt.preventDefault();
            mapPopup.classList.remove("modal-show");
        }
    }
});
