function main(){
    document.body.childNodes.forEach(element => {
        element.addEventListener("touchend", changeColor);
    }); 
}
function changeColor(e){
    e.target.style.backgroundColor = "red";
    setTimeout(function(){
        e.target.style.backgroundColor = "";
    }, 1000);
}
window.onload = function () {
   main();
}