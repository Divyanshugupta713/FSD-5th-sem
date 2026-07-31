const mypromise = new Promise((resolve, reject) => {


    username= "Divyanshu";
    password= "123456";

    if (username == "Divyanshu" && password == "123456") {
        resolve("Success");
    }
    else {
        reject("Invalid username or password");
    }


})

// mypromise
// .then(data => console.log(data))
// .catch(err => console.log(err))
// .finally(() => {
//     console.log("Completed");
// });


async function main() {
    try {
        const result = await mypromise;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
    finally {
        console.log("Completed");
    }
}

main();