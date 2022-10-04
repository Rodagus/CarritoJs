//desktop menu and navbar
const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

menuEmail.addEventListener('click', toggleDesktopMenu)

function toggleDesktopMenu () {
  

  // if (desktopMenu.classList.contains('inactive')){
  //   desktopMenu.classList.remove('inactive')
  // }else{
  //   desktopMenu.classList.add('inactive')
  // }

  //THERE IS "classList.toggle('')" wich toggle the class on every click
  //SO
  asideCart.classList.add('inactive')
  productDetailContainer.classList.add('inactive')
  desktopMenu.classList.toggle('inactive')
}

//mobile menu 
const burguerMenuIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

mobileMenu.classList.remove('active')
burguerMenuIcon.addEventListener ('click', toggleMobileMenu)

function toggleMobileMenu() {
  asideCart.classList.add('inactive')
  mobileMenu.classList.toggle('active')
  productDetailContainer.classList.add('inactive')

  //prevent scroll when mobile menu is opened
  const body = document.getElementById('boody')

  if (mobileMenu.classList.contains('active')){
    body.style.cssText = 'overflow-y: hidden'
  }else{
    body.style.cssText = 'overflow-y: auto'
  }
}

// shopping cart
const cartMenuIcon = document.querySelector('.navbar-shopping-cart')
const asideCart = document.querySelector('.product-detail')
const imgArrow= document.querySelector('.close-order')

cartMenuIcon.addEventListener ('click', toggleCartMenu)
imgArrow.addEventListener ('click', BtnCloseOrder)

function toggleCartMenu() {
  mobileMenu.classList.remove('active')
  asideCart.classList.toggle('inactive')
  productDetailContainer.classList.add('inactive')
  desktopMenu.classList.add('inactive')

  //prevent scroll when aside cart open
  const body = document.getElementById('boody')

  if (asideCart.classList.contains('inactive')){
    body.style.cssText = 'overflow-y: auto'
  }else{
    body.style.cssText = 'overflow-y: hidden'
  }
}
function BtnCloseOrder (){
  asideCart.classList.toggle('inactive')
}

//fusion Product list
const productList = []
const cardsContainer = document.querySelector('.cards-container')

function pushProductsList(productList) {
  productList.push ({
      name:'Bike',
      price: 120,
      image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  })
  productList.push ({
      name: 'Monitor',
      price: 550,
      image: 'https://www.lg.com/mx/images/monitores/MD06155039/gallery/D-03.jpg'
  })
  productList.push ({
      name: 'Notebook',
      price: 650,
      image: 'https://www.muycomputer.com/wp-content/uploads/2021/01/Samsung_Notebook_Plus2_portada.jpg'
  })
}
pushProductsList(productList)

/*
  <div class="product-card">

    <img
      src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="">
    <div class="product-info">
      <div>
        <p>$120,00</p>
        <p>Bike</p>
      </div>
      <figure>
        <img src="./icons/bt_add_to_cart.svg" alt="">
      </figure>
    </div>

  </div> 
*/

function renderProducts (productList) {
  for (product of productList){
    const productCart = document.createElement('div')
    productCart.classList.add('product-card')

    const productImg = document.createElement('img')
    productImg.setAttribute('draggable', false)
    productImg.setAttribute('src', product.image)
    productImg.addEventListener('click', openProductDetail)

    const productInfo = document.createElement('div')
    productInfo.classList.add('product-info')

    const productInfoDiv = document.createElement('div')
    
    const productPrice = document.createElement('p')
    productPrice.innerText = `$${product.price}`
    const productName = document.createElement('p')
    productName.innerText = `${product.name}`

    const productInfoFigure = document.createElement('figure')
    const productImgCart = document.createElement('img')
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')

    productInfoFigure.appendChild(productImgCart)

    productInfoDiv.append(productPrice,productName)
    productInfo.append(productInfoDiv,productInfoFigure)
    productCart.append(productImg,productInfo)
    cardsContainer.appendChild(productCart)
    
  }
}
renderProducts(productList)

//fusion product detail
const productDetailContainer = document.querySelector('.product-detail-secondary')
const productDetailCloseIcon = document.querySelector('.product-detail-secondary-close')

productDetailCloseIcon.addEventListener('click', closeButton)

function openProductDetail (event) {

  desktopMenu.classList.add ("inactive")
  asideCart.classList.add ("inactive")
  mobileMenu.classList.remove ("active")
  productDetailContainer.classList.remove ("inactive")

  displayInfoInProductDetail(event);
  
  //prevent scroll when product detail is open
  const body = document.getElementById('boody')

  if (productDetailContainer.classList.contains('inactive')){
  body.style.cssText = 'overflow-y: auto'
  }else{
  body.style.cssText = 'overflow-y: hidden'
  }
}
function closeButton () {
  const body = document.getElementById('boody')
  productDetailContainer.classList.add('inactive')
  body.style.cssText = 'overflow-y:auto'
}

// Display product info
function displayInfoInProductDetail (event) {

  const new_img_product_detail = event.composedPath().at(0).src
  const product_info = event.composedPath().at(1).childNodes[1]

  const price = product_info.querySelector('div p:first-child').textContent;
  const name = product_info.querySelector('div p:nth-child(2)').textContent;

  const product_detail_img = productDetailContainer.querySelector('img:nth-child(2)');
  product_detail_img.setAttribute('src', new_img_product_detail);
  product_detail_img.setAttribute('alt', name);


  const newPrice = document.querySelector('.product-info-secondary p:nth-child(1)')
  const newName = document.querySelector('.product-info-secondary p:nth-child(2)')

  const product_detail_price = newPrice
  product_detail_price.innerText = price;

  const product_detail_name = newName
  product_detail_name.innerText = name;
}
