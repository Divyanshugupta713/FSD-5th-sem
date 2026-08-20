const div=document.getElementById('container')
const button=document.getElementById('btn')
// console.log(div);
const h2=document.createElement('h2');
h2.innerText='Data is loading....';
console.log(h2);

function cart(){
    alert('Item is added to cart');
}
async function display(){
    try{
        // div.innerHTML='<h2>Hello Using DOM</h2>';
        div.appendChild(h2);
        const serverdata=await fetch('https://fakestoreapi.com/products');
        const jsonData= await serverdata.json();
        // console.log(jsonData[1].title)

        // div.innerHTML=`<h2 style="color: blue;">${JSON.stringify(jsonData)}</h2>`;

        let table=`<table border="2" cellspacing="1" cellpadding="10" style=" text-align: center;">
        <tr>
            <th>Id</th>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Action</th>
        </tr>`;

        jsonData.forEach(item => {
            table += `<div>
            <tr>
                <td>${item.id}</td>
                <td><img src="${item.image}" alt="${item.title}" width="100"></td>
                <td>${item.title}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td><button onclick="cart()">Add to Cart</button></td>
            </tr>
        </div>`;
        });

        table += `</table>`;
        div.innerHTML = table;
    }
    catch(err){
        console.log("Error is" + err);
    }
    finally{
        console.log("Data is loaded");
    }

}
button.addEventListener('click',display);