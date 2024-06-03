const btw = 21;
let price = 157;
let totalprice = (price / 100) * btw + price;

let totprice = document.getElementById("totprice");
totprice.innerText = "Incl. Btw " + totalprice + " euro";
let temp = document.getElementById("templiteral");
let namofshoe = document.getElementById("namofshoe");

temp.textContent = `

 (Nike Air Max Plus)



Step into a world where style meets innovation with the Nike TN, also known as the Nike Air Max Plus. Born from the iconic Air Max lineage, this silhouette redefines what it means to be bold and progressive.

Crafted with a fusion of mesh and synthetic materials, the Nike TN boasts a sleek and modern design that's as comfortable as it is eye-catching. Its signature TPU overlays not only add structure and support but also elevate its aesthetic to new heights.

Featuring the legendary Air-Sole unit in the heel, the Nike TN provides responsive cushioning with every step, ensuring a smooth and comfortable ride no matter the terrain. Whether you're pounding the pavement or hitting the gym, this shoe delivers the performance you need to excel.

But the Nike TN is more than just a performance shoe; it's a cultural icon. With its distinctive silhouette and bold colorways, it has become a symbol of self-expression and individuality. From the streets to the runway, it's a statement piece that demands attention.

So, lace up a pair of Nike TNs and step into the future of footwear. With its blend of style, comfort, and performance, it's the perfect companion for those who dare to stand out from the crowd.`;


let stock = document.getElementById("stock");

// DESTRUCTURING
let stockquant = {
  shoe: "TN red",
  quantity: 15,
};

// template literals x destructuring
function stocklimit({ shoe, quantity }) {
    stock.innerText = `There are still ${quantity} of the ${shoe} left in stock... `;
  }
  stocklimit(stockquant);

  // Iteration
let iteration = ["38", "39", "40", "41", "42", "43", "44", "45", "46"];

let iterationclass = document.getElementById("iteration");

let output =
  "Dit zijn de schoenmaten : " + [...iteration].map(Number).join(",");

iterationclass.textContent = output;


let size38 = document.getElementById("size38");
let sizename = size38.value;
size38.addEventListener("click", function () {
  alert("Size 38 has been added to your cart");
});

function displayCategorie(categorie) {
    const li = document.createElement('li');
    li.textContent = `Name: ${categorie.Name}"`;
    shoe.appendChild(li);
    }

  