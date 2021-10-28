const numb = document.querySelector(".number");
let counter = 0;
setInterval(() => {
  if(counter == 35 ){
    clearInterval();
  }else{
    counter+=1;
    numb.textContent = counter + "%";
  }
}, 95);