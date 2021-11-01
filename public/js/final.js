// fetch to the comment routeslet submit=document.querySelector("#submitbtn")
//fetch to login user and authenticate
let text=document.querySelector("#text1")
const task = async (event) => {
    event.preventDefault();
 
    // if (email && password) {


        let comment=document.querySelector("#exampleFormControlTextarea1").value
        console.log(event);
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({comment:comment}),
            headers: { "Content-Type": "application/json" }
            //the body from the form values
        })
        if (response.ok) {
            console.log("through proper")
            // document.location.replace('/final')
        }
        else {
            console.log("denied")
            alert(response.statusText)
        }
    // }
}

text.addEventListener("click",task)
// fetch to the comment routes
