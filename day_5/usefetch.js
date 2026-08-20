const div=document.getElementById('container')
const button=document.getElementById('btn')
// console.log(div);
const h2=document.createElement('h2');
h2.innerText='Data is loading....';
div.appendChild(h2);
console.log(h2);
async function display(){
// div.innerHTML='<h2>Hello Using DOM</h2>';
const serverdata=await fetch('https://fakestoreapi.com/products');
            const jsonData= await serverdata.json();
            console.log(jsonData[1].title)

}
button.addEventListener('click',display);