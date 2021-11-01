//fetch to create new user and create sessionlet submit=document.querySelector("#submitbtn")
//fetch to login user and authenticate sbmtbtn

let submit1 = document.querySelector("#sbmtbtn")
const signup = async (event) => {
    event.preventDefault();
    let password = document.querySelector("#form3Example8").value
    //take values from the form
    let email = document.querySelector("#form3Example1n").value
    let username = document.querySelector("#form3Example1m").value
    if (email && password && username) {
        console.log(email, password);
        const response = await fetch('/api/users/', {
            method: 'POST',
            body: JSON.stringify({username, email, password }),

            headers: { "Content-Type": "application/json" }
            //the body from the form values
        })
        if (response.ok) {
            document.location.replace('/homepage')
        }
        else {
            alert(response.statusText
            )
        }
    }
}

submit1.addEventListener("click", signup)
