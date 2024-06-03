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
