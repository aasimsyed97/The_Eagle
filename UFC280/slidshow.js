  let i=0; 
  let images = JSON.parse(localStorage.getItem("images")); 
  let cont = document.getElementById("container");
 function start() { 
   
  
    setInterval(function(){  
        if(i==images.length){ 
            i=0;
        }
        cont.innerHTML = null;
    let image = document.createElement("img");
    image.src = images[i] 
    console.log(i)
    cont.append(image)   
       i++; 
      
    },1000)
 } 
  
 