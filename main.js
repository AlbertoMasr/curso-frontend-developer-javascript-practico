const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const menuHamIcon = document.querySelector(".menu")
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart")
const mobileMenu = document.querySelector(".mobile-menu")
const shoppingCartContainer = document.querySelector("#shoppingCartContainer")
const productDetailContainer = document.querySelector("#productDetail")
const productDetailCloseIcon = document.querySelector(".product-detail-close")
const cardsContainer = document.querySelector(".cards-container")

menuEmail.addEventListener("click", toggleDesktopMenu)
menuHamIcon.addEventListener("click", toggleMobileMenu)
menuCarritoIcon.addEventListener("click", toggleCarritoShoppingCartContainer)
productDetailCloseIcon.addEventListener("click", closeProductDetailAside)

function toggleDesktopMenu() {

  desktopMenu.classList.toggle("inactive")

}

function toggleMobileMenu() {

  const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains("inactive")

  if(!isShoppingCartContainerClosed) {
    shoppingCartContainer.classList.add("inactive")
  }

  closeProductDetailAside()

  mobileMenu.classList.toggle("inactive")

}

function toggleCarritoShoppingCartContainer() {

  const isMobileMenuClosed = mobileMenu.classList.contains("inactive")

  if(!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive")
  }

  const isProductDetailClosed = productDetailContainer.classList.contains("inactive")

  if(!isProductDetailClosed) {
    productDetailContainer.classList.add("inactive")
  }

  shoppingCartContainer.classList.toggle("inactive")

}

function openProductDetailAside() {
  shoppingCartContainer.classList.add("inactive")

  productDetailContainer.classList.remove("inactive")
}

function closeProductDetailAside() {
  productDetailContainer.classList.add("inactive")
}

const productList = []
productList.push({
  name: "Bike",
  price: 100,
  img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productList.push({
  name: "Screen",
  price: 200,
  img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productList.push({
  name: "Computer",
  price: 150,
  img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productList.push({
  name: "Smartphone",
  price: 120,
  img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

function renderProducts(arr) {
  for(product of arr) {
    const productCard = document.createElement("div")
    productCard.classList.add("product-card")
  
    const productImg = document.createElement("img")
    productImg.src = product.img
    productImg.addEventListener("click", openProductDetailAside)
  
    const productInfo = document.createElement("div")
    productInfo.classList.add("product-info")
  
    const div = document.createElement("div")
  
    const price = document.createElement("p")
    price.textContent = product.price
  
    const name = document.createElement("p")
    name.textContent = product.name
  
    div.append(name, price)
  
    const figure = document.createElement("figure")
    
    const imgAddToCart = document.createElement("img")
    imgAddToCart.src = "/icons/bt_add_to_cart.svg"
  
    figure.appendChild(imgAddToCart)
  
    productInfo.appendChild(div)
    productInfo.appendChild(figure)
  
    productCard.appendChild(productImg)
    productCard.appendChild(productInfo)
  
    cardsContainer.appendChild(productCard)
  }
}

renderProducts(productList)