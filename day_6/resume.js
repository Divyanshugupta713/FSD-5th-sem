const div=document.getElementById('container');
const button=document.getElementById('btn')
// console.log(div);
const h2=document.createElement('h2');
h2.innerText='Data is loading....';
console.log(h2);

async function display(){
    try{
        // div.innerHTML='<h2>Hello Using DOM</h2>';
        div.appendChild(h2);
        setTimeout(() => {
        div.innerHTML = `<div class="container">
        <h1>My Resume</h1>
        <p>This is a sample resume page.</p>
        <ul id="resume-list">
            <li>Education: Bachelor of Science in Computer Science</li>
            <li>Experience: 3 years as a Software Developer</li>
            <li>Skills: JavaScript, Python, HTML, CSS</li>
        </ul>
    </div> 
     <img src="Myimage.png" alt="Profile Picture" width="150" style="border-radius: 50%; border: 2px solid #0037ff;"> `
        }, 1000);


        // console.log(jsonData[1].title)
        }
    catch(err){
        console.log("Error is" + err);
    }
    finally{
        console.log("Data is loaded");
    }

}
button.addEventListener('click',display);