const { useState } = require("react");



function Products() {
  const [produit, setproduit]=useState([
    { 
        name: "shoes",
        price : 200,
        description : "this is a nice shoes",
    },
    { 
        name: "tshit",
        price : 300,
        description : "this is a nice tshit",
    },
    { 
        name: "socks",
        price : 10,
        description : "this is a nice socks",
    }
  ])
  return (
   <div>
     <h1>Produits</h1>
     <ul>
        {produit.map((item, index) => (
            <li key={index}>
                <div>{item.name}</div>
                <div>{item.price}</div>
                <div>{item.description}</div>
            </li>
        ))}
     </ul>
     <button onClick={()=>{}}>delete product</button>
     <button onClick={()=>{setproduit([{
        name:"pro",
        price: 9000,
        description: "this is a nice pro"
     }])}}>edit product</button>
 
   </div>
  );
}
export default Products;