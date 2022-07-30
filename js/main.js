let num = document.getElementById("contity");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let productImg = document.getElementById("product-img");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let menu = document.querySelector(".menu");
let black = document.querySelector(".black");
let drop = document.querySelector(".drop");
let submit = document.getElementById("submit");
let cartVar = document.querySelector(".vari");
let cartCon = document.querySelector(".cart-con");
let dropCart = document.querySelector(".drop-cart");
let cartEmpty = document.querySelector(".empty");
let quant = document.getElementById("quant");
let item = document.querySelector(".item");
let checkout = document.getElementById("checkout");
let del = document.querySelector(".delete");
let thumbmail1 = document.querySelector(".thumbmail1");
let thumbmail2 = document.querySelector(".thumbmail2");
let thumbmail3 = document.querySelector(".thumbmail3");
let thumbmail4 = document.querySelector(".thumbmail4");
let float = document.querySelector(".float");
let nex = document.querySelector(".nex");
let pre = document.querySelector(".pre");
let popupImg = document.querySelector(".popup-img");
let th1 = document.querySelector(".th1");
let th2 = document.querySelector(".th2");
let th3 = document.querySelector(".th3");
let th4 = document.querySelector(".th4");
let popup = document.querySelector(".popup");
let cl = document.querySelector(".cl");

console.log(num.value);
//plus
plus.addEventListener('click', () => {
    num.value = Number(num.value) + 1;
});
//mius
minus.addEventListener('click', () => {
    if (num.value > 0) {
        num.value = Number(num.value) - 1;
    }

});

//next
next.addEventListener('click', () => {
    const cssObj = window.getComputedStyle(productImg, null);
    let bg = cssObj.getPropertyValue("background-image");
    if (bg == 'url("https://ecommerce-product-page-git-main-tebbiabdelhakim.vercel.app/images/image-product-1.jpg")') {
        productImg.style.backgroundImage = 'url("https://ecommerce-product-page-git-main-tebbiabdelhakim.vercel.app/images/image-product-2.jpg")';
    } else if (bg == 'url("https://ecommerce-product-page-git-main-tebbiabdelhakim.vercel.app/images/image-product-2.jpg")') {
        productImg.style.backgroundImage = 'url("http://127.0.0.1:5500/images/image-product-3.jpg")';
    } else if (bg == 'url("https://ecommerce-product-page-git-main-tebbiabdelhakim.vercel.app/images/image-product-3.jpg")') {
        productImg.style.backgroundImage = 'url("https://ecommerce-product-page-git-main-tebbiabdelhakim.vercel.app/images/image-product-4.jpg")';
    }
    console.log(bg);
});

//prev
prev.addEventListener('click', () => {
    const cssObj = window.getComputedStyle(productImg, null);
    let bg = cssObj.getPropertyValue("background-image");
    if (bg == 'url("http://127.0.0.1:5500/images/image-product-4.jpg")') {
        productImg.style.backgroundImage = 'url("http://127.0.0.1:5500/images/image-product-3.jpg")';
    } else if (bg == 'url("http://127.0.0.1:5500/images/image-product-3.jpg")') {
        productImg.style.backgroundImage = 'url("http://127.0.0.1:5500/images/image-product-2.jpg")';
    } else if (bg == 'url("http://127.0.0.1:5500/images/image-product-2.jpg")') {
        console.log("hohoh");
        productImg.style.backgroundImage = 'url("http://127.0.0.1:5500/images/image-product-1.jpg")';
    }
});

//menu 
menu.addEventListener('click', () => {
    menu.classList.toggle("menuClicked");
    black.classList.toggle("black2");
    drop.classList.toggle("drop2");
});

//submit
submit.addEventListener('click', () => {
    if (Number(num.value) > 0) {
        cartVar.classList.add("vari2");
        cartVar.classList.add("vari4");
        cartEmpty.classList.add("empty1");
        cartVar.innerHTML = `${Number(num.value)+Number(cartVar.innerHTML)}`;
    }
})

//cart
cartCon.addEventListener('click', () => {
    if (Number(cartVar.innerHTML) > 0) {
        dropCart.classList.toggle("sh-card");
        cartEmpty.classList.add("empty1");
        quant.innerHTML = `<p id="quant">$125 x ${cartVar.innerHTML} <span id="total">$${125 * Number(cartVar.innerHTML)}</span></p>`;

    }
    if (cartVar.innerHTML == "") {
        dropCart.classList.toggle("sh-card");
        item.classList.toggle("item-hidden");
        cartEmpty.classList.toggle("empty2")
        checkout.classList.toggle("checkout-hidden");
    }
});

del.addEventListener('click', () => {
    item.classList.toggle("item-hidden");
    checkout.classList.toggle("checkout-hidden");
    cartVar.innerHTML = "";
    cartVar.classList.toggle("vari3");
    cartEmpty.classList.toggle("empty2");
});

//thumbmail
thumbmail1.addEventListener('click', () => {
    productImg.style.backgroundImage = 'url("http://127.0.0.1:5500/images/image-product-1.jpg")';
    thumbmail1.classList.add("thumb1Clicked");
    thumbmail2.classList.remove("thumb2Clicked");
    thumbmail3.classList.remove("thumb3Clicked");
    thumbmail4.classList.remove("thumb4Clicked");
});
thumbmail2.addEventListener('click', () => {
    productImg.style.backgroundImage = 'url("http://127.0.0.1:5500/images/image-product-2.jpg")';
    thumbmail2.classList.add("thumb2Clicked");
    thumbmail1.classList.remove("thumb1Clicked");
    thumbmail3.classList.remove("thumb3Clicked");
    thumbmail4.classList.remove("thumb4Clicked");
});
thumbmail3.addEventListener('click', () => {
    productImg.style.backgroundImage = 'url("http://127.0.0.1:5500/images/image-product-3.jpg")';
    thumbmail3.classList.add("thumb3Clicked");
    thumbmail2.classList.remove("thumb2Clicked");
    thumbmail1.classList.remove("thumb1Clicked");
    thumbmail4.classList.remove("thumb4Clicked");
});
thumbmail4.addEventListener('click', () => {
    productImg.style.backgroundImage = 'url("http://127.0.0.1:5500/images/image-product-4.jpg")';
    thumbmail4.classList.add("thumb4Clicked");
    thumbmail2.classList.remove("thumb2Clicked");
    thumbmail3.classList.remove("thumb3Clicked");
    thumbmail1.classList.remove("thumb1Clicked");
});

productImg.addEventListener('click', () => {
    black.classList.add("black3");
    popup.classList.add("popup-show");
});


//nex
nex.addEventListener('click', () => {
    const cssObj = window.getComputedStyle(popupImg, null);
    let bg = cssObj.getPropertyValue("background-image");
    if (bg == 'url("http://127.0.0.1:5500/images/image-product-1.jpg")') {
        popupImg.style.backgroundImage = 'url("http://127.0.0.1:5500/images/image-product-2.jpg")';
    } else if (bg == 'url("http://127.0.0.1:5500/images/image-product-2.jpg")') {
        popupImg.style.backgroundImage = 'url("http://127.0.0.1:5500/images/image-product-3.jpg")';
    } else if (bg == 'url("http://127.0.0.1:5500/images/image-product-3.jpg")') {
        popupImg.style.backgroundImage = 'url("http://127.0.0.1:5500/images/image-product-4.jpg")';
    }
    console.log(bg);
});

pre.addEventListener('click', () => {
    const cssObj = window.getComputedStyle(popupImg, null);
    let bg = cssObj.getPropertyValue("background-image");
    if (bg == 'url("http://127.0.0.1:5500/images/image-product-4.jpg")') {
        popupImg.style.backgroundImage = 'url("http://127.0.0.1:5500/images/image-product-3.jpg")';
    } else if (bg == 'url("http://127.0.0.1:5500/images/image-product-3.jpg")') {
        popupImg.style.backgroundImage = 'url("http://127.0.0.1:5500/images/image-product-2.jpg")';
    } else if (bg == 'url("http://127.0.0.1:5500/images/image-product-2.jpg")') {
        console.log("hohoh");
        popupImg.style.backgroundImage = 'url("http://127.0.0.1:5500/images/image-product-1.jpg")';
    }
});

th1.addEventListener('click', () => {

    popupImg.style.backgroundImage = 'url("http://127.0.0.1:5500/images/image-product-1.jpg")';
    th1.classList.add("th1Clicked");
    th2.classList.remove("th2Clicked");
    th3.classList.remove("th3Clicked");
    th4.classList.remove("th4Clicked");
});
th2.addEventListener('click', () => {

    popupImg.style.backgroundImage = 'url("http://127.0.0.1:5500/images/image-product-2.jpg")';
    th2.classList.add("th2Clicked");
    th1.classList.remove("th1Clicked");
    th3.classList.remove("th3Clicked");
    th4.classList.remove("th4Clicked");
});
th3.addEventListener('click', () => {

    popupImg.style.backgroundImage = 'url("http://127.0.0.1:5500/images/image-product-3.jpg")';
    th3.classList.add("th3Clicked");
    th2.classList.remove("th2Clicked");
    th1.classList.remove("th1Clicked");
    th4.classList.remove("th4Clicked");
});
th4.addEventListener('click', () => {

    popupImg.style.backgroundImage = 'url("http://127.0.0.1:5500/images/image-product-4.jpg")';
    th4.classList.add("th4Clicked");
    th2.classList.remove("th2Clicked");
    th3.classList.remove("th3Clicked");
    th1.classList.remove("th1Clicked");
});

cl.addEventListener('click', () => {
    black.classList.remove("black3");
    popup.classList.remove("popup-show");
})