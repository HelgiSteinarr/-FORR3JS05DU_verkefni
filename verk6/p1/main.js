
function editMain()
{
    let divTags = document.getElementsByTagName("div");
    for (let value of divTags)
    {
        if(value.innerHTML == "Jón")
        {
            value.setAttribute("class", "active");
        }
        if(value.innerHTML == "Karen")
        {
            value.remove();
        }
    }
}
window.onload = function(){
    editMain();
};
