  let i=0; 
  let images = JSON.parse(localStorage.getItem("images")); 

 function start() { 
   
  
    setInterval(function(){  
        let cont = document.getElementById("container");
    let image = document.createElement("img");
    image.src = images[i] 
    console.log(i)
    cont.append(image)   
       i++; 
       if(i==images.length){ 
           i=0;
       }
    },1500)
 } 
  
 