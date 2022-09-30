console.log("hello world") 

function storeImages (){ 
    let url = document.getElementById("url").value; 
    let images = JSON.parse(localStorage.getItem("images")) || [];
    images.push(url); 
 
    localStorage.setItem("images",JSON.stringify(images)) 
    
}