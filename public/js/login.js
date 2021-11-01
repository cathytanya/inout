let submit=document.querySelector("#submitbtn")
//fetch to login user and authenticate
const login = async (event) => {
    event.preventDefault();
    let email = document.querySelector("#form2Example17").value
    //take values from the form
    let password = document.querySelector("#form2Example27").value
    if (email && password) {
        console.log(email, password);
        const response = await fetch('/api/users/login', {
            method: 'POST',

            body: JSON.stringify({ email:email, password:password }),

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

submit.addEventListener("click", login)