let packge=[
    {id:0,title:"Semester 3",price:15000,source:"imgs/product2/BOX.jpg",description:"packges/semester3"},
    {id:1,title:"Semester 4",price:7000 ,source:"imgs/product2/33.png",description:"packges/semester4"},
    {id:2,title:"Semester 5",price:10000,source:"imgs/product2/BOX.jpg" ,description:"packges/semester5"},
    
]

let sectionPackege=document.getElementById('packge');

function card(i){
    return(
        `
        
        <div class="bg-light card text-dark card-product search-card mx-auto my-5" style="border:solid 2px #17a2b8; display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); grid-gap: 20px; max-height: 390px;">
            <div class="card-img bg-light" onclick="showDetailes(${i})" style=" overflow: hidden;border-radius:30px">
                <img src=${packge[i].source} alt=""  style=" overflow: hidden;object-fit: cover;">
            </div>
            <div class="card-body bg-light" onclick="showDetailes(${i})" style="display: flex; flex-direction: column; justify-content: space-between;"> 
                <div class="card-title search-title">${packge[i].title}</div>
                <div class="card-text">${packge[i].price} $</div>
            </div>
            <div class="container">
                <div class="btn btn-outline-info w-100 mx-auto mb-2" style="border-radius:10px;" onclick="addToCart(${i})">
                    Add To Cart <i class="fa-solid fa-cart-plus"></i>
                </div>
            </div>
        </div>
        `);
}

document.addEventListener("DOMContentLoaded", function() {
    let sectionPackege=document.getElementById('packge');
    if (sectionPackege) {
        for (let i = 0; i < packge.length; i++) {
            sectionPackege.innerHTML += card(i); // إضافة كل منتج 
        }
    }

    get_cart_number()
});

function showDetailes(id){
    id+=3
    // window.location.href=`${packge[id].description}`;
    window.location.href=`packges/semester${id}.html`;    
}



function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(packge[productId]);
    localStorage.setItem('cart', JSON.stringify(cart));
    let count = JSON.parse( localStorage.getItem('cart') )
    get_cart_number();
}

function get_cart_number(){
    if(localStorage.getItem('cart')){
        let count = JSON.parse( localStorage.getItem('cart') )
        document.getElementById('cartCounter').innerHTML=`<i class="fa-solid fa-cart-plus h5 p-2  bg-success" style="border-radius:20px"> ${count.length} `;
      }
}