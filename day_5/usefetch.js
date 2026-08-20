const div=document.getElementById('container')
const button=document.getElementById('btn')
// console.log(div);
const h2=document.createElement('h2');
h2.innerText='Data is loading....';
console.log(h2);
async function display(){
    try{
        // div.innerHTML='<h2>Hello Using DOM</h2>';
        div.appendChild(h2);
        const serverdata=await fetch('https://fakestoreapi.com/products');
        const jsonData= await serverdata.json();
        // console.log(jsonData[1].title)

        div.innerHTML=`<h2 style="color: blue;">${JSON.stringify(jsonData)}</h2>`;
    }
    catch(err){
        console.log("Error is" + err);
    }

}
button.addEventListener('click',display);