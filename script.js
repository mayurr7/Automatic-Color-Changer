const randomColor = function () {
    const hex ='0123456789ABCDEF';
    let color ='#';
   for(let i =0; i < 6; i++){
     color += hex[Math.floor(Math.random() * 16)];
   }
   return color;
};
let change;
document.querySelector('#start').addEventListener('click', function(){
     change = setInterval(changeBg, 1000);

    function changeBg(){
        document.body.style.backgroundColor = randomColor();
        console.log(randomColor());
        
    }
});


document.querySelector("#stop").addEventListener('click', function(){
    clearInterval(change);
})