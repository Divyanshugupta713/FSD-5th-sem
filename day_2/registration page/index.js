const name = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const div = document.getElementById("students");
const registerbtn = document.getElementById("register");


registerbtn.addEventListener("click", () => {

    const innerdiv = document.createElement("div");
    innerdiv.innerHTML = `<h1>Username: ${name.value}</h1>
    <h1>Email: ${email.value}</h1>
    <h1>Password: ${password.value}</h1>
    <a href="https://www.google.com">Google</a>`;


    div.appendChild(innerdiv);
  



})