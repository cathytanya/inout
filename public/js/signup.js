//fetch to create new user and create sessionlet submit=document.querySelector("#submitbtn")
//fetch to login user and authenticate sbmtbtn
let submit1=document.querySelector("#sbmtbtn")
const signup = async (event) => {
    event.preventDefault();
    let email = document.querySelector("#form2Example17").value
    //take values from the form
    let password = document.querySelector("#form2Example27").value
    if (email && password) {
        console.log(email, password);
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
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

submit1.addEventListener("click", login)