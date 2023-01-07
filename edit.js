let btns =document.querySelectorAll(".btn");
let storeProdctus =document.querySelectorAll(".store-product");
for(i=0 ; i < btns.length ; i++){
    btns[i].addEventListener("click",(e) => {
        e.preventDefault();
        let filter =e.target.dataset.filter;
       // console.log(filter)
       storeProdctus.forEach((product) => {
           if(filter== "Show aLL"){
               product.style.display ="block"
           }else{
               if (product.classList.contains(filter)){
                product.style.display ="block"
               }else{
                product.style.display ="none"
               }
           }
       })
    })
}
