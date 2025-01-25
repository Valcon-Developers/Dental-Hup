
let products=[
    {id:0,title:"Partial Stock Trays",price:250,source:"imgs/products/300.PNG",description:"Partial Stock Trays (Aluminum trays sizes 1,2,3"},
    {id:1,title:"Alginate (with measures)",price:340,source:"https://www.durodent.com.au/image/cache/catalog/images-products/impression/Zhermack_Orthoprint_C302145-800x800.jpg",description:""},
    {id:2,title:"Alginate Spatula",price:700,source:"https://tse3.mm.bing.net/th?id=OIP.qbcq9a639xIgq1jFMq0YkgHaHa&pid=Api&P=0&h=220",description:""},
    {id:3,title:"Scissors",price:110,source:"https://www.faithfulltools.com/images/xxlarge/FAISCSS7.jpg",description:""},
    {id:4,title:"Green stick compound",price:999,source:'https://tse3.mm.bing.net/th?id=OIP.Jb6A10Hk_wdAgWr87eXunAHaC8&pid=Api&P=0&h=220',description:""},
    {id:5,title:"Dental stone ",price:250,source:"https://tse3.mm.bing.net/th?id=OIP.OUpiv2iwm67KlESPEgaU1QHaHa&pid=Api&P=0&h=220",description:"Dental stone type III or IV"},
    {id:6,title:"Disinfection Spray",price:340,source:"https://tse4.mm.bing.net/th?id=OIP.D_6qnDxsu6UlkML0MqTIRAHaHa&pid=Api&P=0&h=220",description:""},
    {id:7,title:"Sectional Tray ",price:700,source:"https://henryschein.com.au/images/ProductImages/AO-2801-L4S.jpg",description:"Sectional Trays (both metal and plastic)"},
    {id:8,title:"Full-arch tray",price:110,source:"https://tse1.mm.bing.net/th?id=OIP.0LavsCFGY_AXrc1aUXrVJgHaHa&pid=Api&P=0&h=220",description:"Full-arch trays (both metal and plastic)"},
    {id:9,title:"Gutta Perch",price:999,source:'https://tse4.mm.bing.net/th?id=OIP.LP92dHnlmb_kzUuyi1cslwHaE5&pid=Api&P=0&h=220',description:""},
    {id:10,title:"Sealers",price:250,source:"imgs/products/310.jpg",description:""},
    {id:11,title:"Putty zeta plus",price:340,source:"imgs/products/311.jpg",description:""},
    {id:12,title:"charm temprycrown",price:700,source:"imgs/products/312.jpg",description:""},


    {id:13,title:"Mask",price:110,source:"imgs/product1/img1.jpg",description:""},
    {id:14,title:"Napkin",price:999,source:'imgs/product1/img2.jpg',description:""},
    {id:15,title:"Wax knife",price:250,source:"imgs/product1/img3.jpg",description:""},
    {id:16,title:"Wax Carver",price:340,source:"imgs/product1/img4.jpg",description:""},
    {id:17,title:"Wax",price:700,source:"imgs/product1/img5.jpg",description:""},
    {id:18,title:"Gloves",price:110,source:"imgs/product1/img6.jpg",description:""},

    {id:20,title:"Micromotor",price:999,source:'imgs/product2/1.png',description:""},
    {id:21,title:"High & low speed contra",price:999,source:'imgs/product2/2.jpg',description:""},
    {id:22,title:"Articulator",price:999,source:'imgs/product2/3.png',description:""},
    {id:23,title:"Magnet cast ",price:999,source:'imgs/product2/4.png',description:"Magnet cast + Acrylic anterior and posterior teeth"},
    {id:24,title:"Burs",price:999,source:'imgs/product2/5.png',description:"Burs: Round bur, Fissure bur, Inverted cone bur with (3 different sizes 0.8, 1, 2), 330 bur, 245 bur."},
    {id:25,title:"Low diamond stones",price:250,source:'imgs/product2/6.png',description:" (  tapered with round end size 1,2 & Tapered with flat end size 1,2 &  Fine tapered stone. (Short shank and long shank) &  Finishing stones"},
    {id:26,title:"Acrostone",price:340,source:'imgs/product2/7.png',description:""},
    {id:27,title:"Putty index",price:700,source:'imgs/product2/8.png',description:""},
    {id:28,title:"Acrylic teeth size 16",price:110,source:"imgs/product2/9.png",description:"Acrylic resin teeth size 16 (Anterior and posterior)"},
    {id:29,title:"Mirrors",price:999,source:'imgs/product2/10.png',description:""},
    {id:30,title:"Probes",price:250,source:'imgs/product2/11.png',description:""},
    {id:31,title:"Tweezers",price:340,source:'imgs/product2/12.png',description:""},
    {id:32,title:"Periodontal probes",price:700,source:'imgs/product2/13.png',description:""},
    {id:33,title:"Torch",price:110,source:"imgs/product2/14.png",description:""},
    {id:34,title:"Acrylic bur",price:999,source:'imgs/product2/15.png',description:""},
    {id:35,title:"Pink wax (cavex)",price:250,source:'imgs/product2/18.png',description:""},
    {id:36,title:"Glass slabs x2",price:340,source:'imgs/product2/19.png',description:""},
    {id:37,title:"Plaster",price:700,source:'imgs/product2/20.png',description:""},
    {id:38,title:"Surgical handle",price:110,source:"imgs/product2/21.png",description:""},
    {id:39,title:"Surgical blade size 15",price:999,source:'imgs/product2/22.png',description:""},
    {id:40,title:"Plasticine clay",price:250,source:'imgs/product2/23.png',description:""},
    {id:41,title:"Mixing spatula",price:340,source:'imgs/product2/24.png',description:""},
    {id:42,title:"Separating medium",price:700,source:'imgs/product2/25.png',description:""},
    {id:43,title:"Rubber bands ",price:110,source:"imgs/product2/26.png",description:""},
    {id:44,title:"edentulous stone casts",price:999,source:'imgs/product2/27.png',description:"upper and lower edentulous stone casts"},
    {id:45,title:"Glass cup",price:250,source:'imgs/product2/28.png',description:""},
    {id:46,title:"Sanding paper",price:340,source:'imgs/product2/29.png',description:""},
    {id:47,title:"Rubber bow x2",price:700,source:'imgs/product2/30.png',description:""},
    {id:48,title:" Napkins and napkin clips",price:110,source:"imgs/product2/31.png",description:""},
    {id:49,title:"Dental film barrier",price:999,source:'imgs/product2/32.png',description:""},
    {id:50,title:"Toolbox",price:250,source:'imgs/product2/33.png',description:""},
    {id:51,title:"Spackling knife",price:340,source:'imgs/product2/34.png',description:""},



    {id:52,title:"Light curing unit",price:250,source:'imgs/product3/35.png',description:""},
    {id:53,title:"Nano / Nano Hybrid Composite",price:340,source:'imgs/product3/36.png',description:""},
    {id:54,title:"Composite applicator",price:250,source:'imgs/product3/37.png',description:""},
    {id:55,title:"Amalgam Capsules",price:250,source:'imgs/product3/38.png',description:""},
    {id:56,title:"Amalgam Condenser",price:250,source:'imgs/product3/39.png',description:"Amalgam Condenser (1 Small Condenser 1 Large Condenser)"},
    {id:57,title:"1 kit of assorted",price:250,source:'imgs/product3/40.png',description:"1 kit of assorted shapes/sizes"},
    {id:58,title:"Finishing and Polishing Discs",price:250,source:'imgs/product3/41.png',description:""},
    {id:59,title:"Polishing Brushes and prophylaxis polishing paste",price:250,source:'imgs/product3/42.png',description:""},
    {id:60,title:"Amalgam Morter and Pestle",price:250,source:'imgs/product3/43.png',description:""},
    {id:61,title:"Amalgam Carrier",price:250,source:'imgs/product3/44.png',description:""},
    {id:62,title:"Anatomical Burnisher",price:250,source:'imgs/product3/45.png',description:""},
    {id:63,title:"Amalgam Hollenback Carver",price:250,source:'imgs/product3/46.png',description:""},
    {id:64,title:"Ball Burnisher",price:250,source:'imgs/product3/47.png',description:""},
    {id:65,title:"Tofflemire Matrix Holder",price:250,source:'imgs/product3/49.png',description:""},
    {id:66,title:"Wooden Wedges",price:250,source:'imgs/product3/51.png',description:""},
    {id:67,title:"Flowable Composite",price:250,source:'imgs/product3/52.png',description:""},
    {id:68,title:"Universal Adhesive",price:250,source:'imgs/product3/53.png',description:""},
    {id:69,title:"Micro-Brushes for Adhesive",price:250,source:'imgs/product3/54.png',description:""},
    {id:70,title:"Sectional Matrix System",price:250,source:'imgs/product3/55.png',description:"Sectional Matrix System (Ring and Bands)"},
    {id:71,title:"Celluloid Strips & Finishing strips",price:250,source:'imgs/product3/56.png',description:""},
    {id:72,title:"Teflon Tape",price:250,source:'imgs/product3/57.png',description:""},
    {id:73,title:"Dental Floss",price:250,source:'imgs/product3/58.png',description:""},
    {id:73,title:"Tofflemire Matrix Bands",price:250,source:'imgs/product3/50.png',description:""},

]

let sectionProducts=document.getElementById('products');


function card(i){
    return(
        `
        
        <div class="card  text-dark card-product search-card mt-1" style="border:solid 2px #17a2b8; display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); grid-gap: 10px; max-height: 390px;">
            <div class="card-img img-fluid" onclick="showDetailes(${i})" style="height: 200px; overflow:hidden;">
                <img src=${products[i].source} alt=""  style=" ">
            </div>
            <div class="card-body" onclick="showDetailes(${i})" style="display: flex; flex-direction: column; justify-content: space-between;margin-top:-40px">
                <div class="card-title search-title">${products[i].title}</div>
                <div class="card-text">${products[i].price} $</div>
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
    let sectionProducts = document.getElementById('products');
    if (sectionProducts) {
        for (let i = 0; i < products.length; i++) {
            sectionProducts.innerHTML += card(i); // إضافة كل منتج
        }
    }
});



function showDetailes(id){
    window.location.href=`detailes.html?id=${id}`;    
}

document.addEventListener("DOMContentLoaded", function() {
    let queryParams = new URLSearchParams(window.location.search);
    let productId = queryParams.get('id');
    get_cart_number();
    if (productId !== null) {
        productId = parseInt(productId);
        let product = products[productId];

        if (product) {
            let Detalies = document.getElementById('Detailes');
            Detalies.innerHTML = `
                <div class="container w-100">
                    <div class="box d-flex flex-wrap">
                        <div class=" col-lg-6 img pt-5 pd-0 mb-0"><img src="${product.source}" alt="" style="width: 300px;"></div>
                        <div class="col-lg-6 detailes mb-5 pt-5 w-100">
                            <h2 class="title">${product.title}</h2> <hr>
                            <h4 class="description">${product.description}</h4><hr class="text-danger">
                            <div class="price badge badge-success mb-3"><h1>${product.price}$</h1></div> <hr>
                            <div class="btn btn-info d-block" onclick="addToCart(${productId})">Add To Cart</div>
                        </div>
                    </div>
                </div>
            `;
        }
    }
});


///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////




function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(products[productId]);
    localStorage.setItem('cart', JSON.stringify(cart));
    let count = JSON.parse( localStorage.getItem('cart') )
    get_cart_number();
}





function cartProduct(cartProducts,id){
    return`
      <div class="box d-flex  w-100 pt-5 pb-3 text-dark" style="border-bottom:2px black solid ;">
                    <img src="${cartProducts[id].source}" width="100px" alt="" class="" style="border-radius: 20px;">
                    <div class="boxBody pl-5 col-7">
                        <h4 class="title">${cartProducts[id].title}</h4>
                        <div class="color">color :black</div>
                        <div class="size">size : large</div>
                        <div class="price"> price : ${cartProducts[id].price}</div>
                    </div>
                    <div class="btn btn-outline-danger mt-5"  style="height: 40px;"   onclick= "removecart(${id})" >Remove</div>
            
                </div>
                `
}



function showcart(){
    let cartcontent=document.getElementById('cartcontent');
    let cartProducts = JSON.parse(localStorage.getItem('cart'));
   if(cartProducts){
    for(let i=0;i<cartProducts.length;i++){
           cartcontent.innerHTML+=cartProduct(cartProducts,i);
           
    }
}


}


function removecart(id){
let cartProducts = JSON.parse(localStorage.getItem('cart'));

cartProducts.splice(id,1)
localStorage.setItem('cart',JSON.stringify(cartProducts))
let cartcontent=document.getElementById('cartcontent');
cartcontent.innerHTML="";
 showcart();
 getTotal();
 get_Products_input_names();
 get_cart_number();

}

function getTotal(){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];   
    let result=0;
    for(let i=0; i<cart.length;i++){
          result +=cart[i].price
    }
    let total = document.getElementById('total');
    total.innerHTML=`Total : ${result} $`;
}




function get_cart_number(){
    if(localStorage.getItem('cart')){
        let count = JSON.parse( localStorage.getItem('cart') )
        document.getElementById('cartCounter').innerHTML=`<i class="fa-solid fa-cart-plus h5 p-2  bg-success" style="border-radius:20px"> ${count.length} `;
      }
}

function get_Products_input_names(){
    let cart = JSON.parse(localStorage.getItem('cart')) || []; 
    let result="";
    for(let i=0; i<cart.length;i++){
          result +=cart[i].title+"\n \n  ,\n \n  ";
    }
    let input = document.getElementById('Products_input_names');
    input.value=result;
}
//////////////////////////////////////////////////////////////////////////////////////////


