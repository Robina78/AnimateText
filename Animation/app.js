const h1 = document.querySelector('h1');
    h1.style.fontSize = '100px';
    h1.style.textAlign = 'center';
    h1.style.transition = 'all 1s';
setInterval(function(){
    if (h1.classList.contains('big')){
        h1.innerText = 'RODWIN';
        h1.style.color ='green' 
        
      

    } else {
        h1.innerText = 'ELLA';
        h1.style.color = 'red';
        
    };
    h1.classList.toggle('big');    
    h1.classList.toggle('small');
   
   
}, 1000);
