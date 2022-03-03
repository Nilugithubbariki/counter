var count = 0;
var value = document.querySelector("#value");
var inc =document.querySelector(".inc");
var dec = document.querySelector(".dec");
var res = document.querySelector(".res");

inc.addEventListener("click",function(){
    count++;
    value.innerHTML = count;
});
dec.addEventListener("click",function(){
    count--;
    value.innerHTML = count;
});
res.addEventListener("click",function(){
    count=0;
    value.innerHTML = count;
});