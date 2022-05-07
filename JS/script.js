var text = document.getElementsByClassName("text"),
    wholepage = document.getElementsByClassName("Wholepage"),
    bar=document.getElementById("buger"),
    cross=document.getElementById("cross");

function open(){
    for(var i = 0; i < text.length; i++)
    {
        text.item(i).style.visibility = "visible";
    }
    cross.style.visibility = "visible";
    bar.style.visibility = "hidden";
    wholepage.item(0).style.gridTemplateColumns = "300px auto";
}

function close(){
    for(var i = 0; i < text.length; i++)
    {
        text.item(i).style.visibility = "hidden";
    }
    cross.style.visibility = "hidden";
    bar.style.visibility = "visible";
    wholepage.item(0).style.gridTemplateColumns = "100px auto";
}

bar.onclick = open;
cross.onclick = close;