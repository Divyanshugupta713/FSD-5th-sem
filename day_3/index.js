function login(msg, error) {
    if (error) {
        console.error("Error is: " + error);
    } else {
        console.log("Welcome, " + msg);
    }
}

function loginverification(username, password, clbk) {
    // Simulate a simple login verification (replace with actual verification logic)
    if (username === "Divypurush" && password === "123456") {
        clbk("Success", null);
    } else {
        clbk(null, "Invalid username or password");
    }
}

loginverification("Divypurush", "123456", login);