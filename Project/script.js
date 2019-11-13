  var nav_item = document.querySelector(".Home-Decor");
  var decor_item = document.querySelector(".Home-Decor-item");

  nav_item.addEventListener("click", function (evt) {
    evt.preventDefault();    
    decor_item.classList.add("modal-show");
    nav_item.classList.add("navigation-item-colored");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (decor_item.classList.contains("modal-show")) {
        decor_item.classList.remove("modal-show");
      }
      if (nav_item.classList.contains("navigation-item-colored")) {
        nav_item.classList.remove("navigation-item-colored");
      }
    }
  });

//Карточки товаров

var productCard_1 = {
  productName: "Белые кроссовки",
  supplierName: "Магазин кросовок",
  productPrice: "99,35$",
  productSrc: "img/home-slide-1@3x.jpg"
}

var productCard_2 = {
  productName: "Стульчики для совушек",
  supplierName: "Магазин совушек",
  productPrice: "219,85$",
  productSrc: "img/home-slide-2@3x.jpg"
}

var productCard_3 = {
  productName: "Очки для котиков",
  supplierName: "Магазин котиков",
  productPrice: "19,99$",
  productSrc: "img/home-slide-3@3x.jpg"
}

var productCard_4 = {
  productName: "Очки виртуальной реальности",
  supplierName: "Магазин котиков",
  productPrice: "319,99$",
  productSrc: "img/home-slide-4@3x.jpg"
}

var productCard_5 = {
  productName: "Столик для котиков",
  supplierName: "Магазин котиков",
  productPrice: "122,69$",
  productSrc: "img/home-slide-5@3x.jpg"
}

var productCard_6 = {
  productName: "Сумка с совёнком",
  supplierName: "Магазин совушек",
  productPrice: "35,69$",
  productSrc: "img/home-slide-6@3x.jpg"
}

var productList = [productCard_1, productCard_2, productCard_3, 
                   productCard_4, productCard_5, productCard_6]

var randomArray = [];
var randomArray_2 = [];
var randomArrayMaxLimit = productList.length;
var randomNumber;
var lk = 0;

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

while (randomArray.length < randomArrayMaxLimit) {
  let randomNumber = getRandomNumber(0, randomArrayMaxLimit);
  if (randomArray.indexOf(randomNumber) == -1) {
    randomArray.push(randomNumber)
  }
}

while (randomArray_2.length < randomArrayMaxLimit) {
  randomArray_2[lk] = productList[randomArray[lk]];
  lk++;
}

function makeNewProduct(massivName) {
  let i = 0;
  let length = massivName.length;
  
  var productTemplate = document.querySelector('#product-1-template').content;
  var list = document.querySelector('.product__list');
  var newProductTemplate = productTemplate.querySelector('.product__list-item');
  
  for (; i<length; i++) {
    let newProduct = newProductTemplate.cloneNode(true);
    let lowProductLink = newProduct.querySelector('.sup-link');
    let lowProductSupPrice = newProduct.querySelector('.sup-price');
    let lowProductImg = newProduct.querySelector('.product-1-template__img');
    let lowProductSupName = newProduct.querySelector('.sup-name');
    
    lowProductLink.textContent = massivName[i].supplierName;
    lowProductSupName.textContent = massivName[i].productName;
    lowProductSupPrice.textContent = massivName[i].productPrice;
    lowProductImg.src= massivName[i].productSrc;
  
    list.appendChild(newProduct);
  }
}

makeNewProduct(randomArray_2)