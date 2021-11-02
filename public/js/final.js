//p
let text=document.querySelector("#text1")
const task = async (event) => {
    event.preventDefault();
 



        let comment=document.querySelector("#exampleFormControlTextarea1").value
        console.log(event);
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({comment:comment}),
            headers: { "Content-Type": "application/json" }
     
        })
        if (response.ok) {
            console.log("through proper")
            
        }
        else {
            console.log("denied")
            alert(response.statusText)
        }
 
}

text.addEventListener("click",task)

