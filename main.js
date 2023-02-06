(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{x:()=>L});var t={baseUrl:"https://nomoreparties.co/v1/plus-cohort-19",headers:{authorization:"c8a34be0-7fd7-4dd8-9a54-37c62149ea62","content-type":"application/json"}};function n(e){if(e.ok)return e.json();console.log(e.status)}var r=document.querySelector("#profile-popup"),o=document.querySelector(".profile__edit-button"),c=document.querySelector("#cards-popup"),a=document.querySelector(".profile__add-button"),i=document.querySelector("#image-popup"),u=i.querySelector(".popup__image"),l=i.querySelector(".popup__caption"),s=document.querySelector(".profile__avatar"),d=document.querySelector("#avatar-popup"),f=document.querySelector("#avatar-image");function m(e){e.classList.add("popup_opened"),document.addEventListener("keydown",v)}function p(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",v)}function v(e){"Escape"===e.key&&p(document.querySelector(".popup_opened"))}var h=document.querySelector("#profile-form"),y=document.querySelector("#name"),b=document.querySelector("#hobby"),_=document.querySelector(".profile__name"),S=document.querySelector(".profile__author-hobby");function g(e,t){e.submitter.textContent=t?"Сохранение...":"Сохранить"}function q(e,t){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?t.removeAttribute("disabled"):t.setAttribute("disabled",!0)}var E,L,k=document.querySelector(".elements-grid"),A=document.querySelector("#element-template").content,C=document.querySelector("#place-name"),x=document.querySelector("#place-image"),O=document.querySelector("#card-form");function U(e){var r=A.querySelector(".element").cloneNode(!0),o=r.querySelector(".element__image"),c=r.querySelector(".element__like"),a=r.querySelector(".element__like-count");a.textContent=e.likes.length,o.setAttribute("src",e.link),o.setAttribute("alt","Изображение "+e.name),r.querySelector(".element__name").textContent=e.name,e.owner._id===L&&(r.querySelector(".element__delete").classList.add("element__delete_visible"),r.querySelector(".element__delete").addEventListener("click",(function(){(function(e){return fetch("".concat(t.baseUrl,"/cards/").concat(e._id),{method:"DELETE",headers:t.headers,body:JSON.stringify({link:e.link,name:e.name})}).catch((function(e){return console.log(e)}))})(e).then((function(){r.remove()})).catch((function(e){return console.log(e)}))})));var s=e.likes.find((function(e){return e._id===L}));return s&&c.classList.add("element__like_active"),c.addEventListener("click",(function(){var r;s?function(e){return fetch("".concat(t.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:t.headers}).then((function(e){return n(e)}))}(e._id).then((function(e){a.textContent=e.likes.length})).then((function(){s=!1,c.classList.remove("element__like_active")})).catch((function(e){return console.log(e)})):(r=e._id,fetch("".concat(t.baseUrl,"/cards/likes/").concat(r),{method:"PUT",headers:t.headers}).then((function(e){return n(e)}))).then((function(e){a.textContent=e.likes.length})).then((function(){s=!0,c.classList.add("element__like_active")})).catch((function(e){return console.log(e)}))})),o.addEventListener("click",(function(){var t,n;t=e.link,n=e.name,u.setAttribute("src",t),u.setAttribute("alt","Изображение "+n),l.textContent=n,m(i)})),r}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}o.addEventListener("click",(function(){m(r),y.value=_.textContent,b.value=S.textContent})),a.addEventListener("click",(function(){return m(c)})),document.querySelector(".profile__avatar-button").addEventListener("click",(function(){return m(d)})),document.querySelectorAll(".popup").forEach((function(e){e.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&p(e),t.target.classList.contains("popup__close-button")&&p(e)}))})),h.addEventListener("submit",(function(e){!function(e){var o,c;e.preventDefault(),g(e,!0),(o=y.value,c=b.value,fetch("".concat(t.baseUrl,"/users/me"),{method:"PATCH",headers:t.headers,body:JSON.stringify({name:o,about:c})}).then((function(e){return n(e)})).catch((function(e){return console.log(e)}))).then((function(e){_.textContent=e.name,S.textContent=e.about})).then((function(){p(r)})).catch((function(e){return console.log(e)})).finally((function(){return g(e,!1)}))}(e)})),O.addEventListener("submit",(function(e){var r,o;e.preventDefault(),g(e,!0),(r=x.value,o=C.value,fetch("".concat(t.baseUrl,"/cards"),{method:"POST",headers:t.headers,body:JSON.stringify({link:r,name:o})}).then((function(e){return n(e)}))).then((function(e){k.prepend(U(e))})).then((function(){p(c)})).finally((function(){return g(e,!1)}))})),document.querySelector("#avatar-form").addEventListener("submit",(function(e){var r;e.preventDefault(),g(e,!0),(r=f,fetch("".concat(t.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:t.headers,body:JSON.stringify({avatar:r.value})}).then((function(e){return n(e)})).catch((function(e){return console.log(e)}))).then((function(e){s.src=e.avatar})).then((function(){p(d)})).catch((function(e){return console.log(e)})).finally((function(){return g(e,!1)}))})),E={invalidInput:"form__input_invalid",visibleError:"form__error_visible",input:"form__input",button:"form__button",form:"form"},Array.from(document.querySelectorAll(".".concat(E.form))).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(".".concat(t.input))),r=e.querySelector(".".concat(t.button));q(n,r),n.forEach((function(e){e.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.error):t.setCustomValidity(""),t.validity.valid?function(e,t,n){var r=t.nextElementSibling;t.classList.remove(n.invalidInput),r.classList.remove(n.visibleError),r.textContent=""}(0,t,n):function(e,t,n,r){var o=t.nextElementSibling;t.classList.add(r.invalidInput),o.textContent=n,o.classList.add(r.visibleError)}(0,t,t.validationMessage,n)}(0,e,t),q(n,r)}))}))}(e,E)})),Promise.all([fetch("".concat(t.baseUrl,"/cards"),{headers:t.headers}).then((function(e){return n(e)})),fetch("".concat(t.baseUrl,"/users/me"),{headers:t.headers}).then((function(e){return n(e)}))]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,i=[],u=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=c.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?j(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],c=r[1];L=c._id,_.textContent=c.name,S.textContent=c.about,s.src=c.avatar,o.forEach((function(e){var t=U(e);k.prepend(t)}))}))})();