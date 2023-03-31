function change(x){
    x.classList.toggle("active");

    var panel= document.getElementById('navbar');
    if (panel.style.display === "none"){
        panel.style.display = "block";
    } else {
        panel.style.display = "none";
    }

}

function food(evt, foody){
    var i, content, link;
    content = document.getElementsByClassName("content");
    for (i = 0; i < content.length; i++){
        content[i].style.display = "none";
    }
    link = document.getElementsByClassName("link");
    for (i = 0; i < link.length; i++){
        link[i].className = link[i].className.replace(" change", "");
    }
    document.getElementById(foody).style.display = "block";
    evt.currentTarget.className += " change"
}

