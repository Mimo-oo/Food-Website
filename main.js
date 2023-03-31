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

document.getElementById("chan").click();

var currentIndex = 0;
slideShow();
function slideShow(){
    var i, content, link;
    content = document.getElementsByClassName("content");
    link = document.getElementsByClassName('link');
    for (i = 0; i < content.length; i ++){
        content[i].style.display = "none";
    }
    for (i = 0; i < link.length; i++){
        link[i].className = link[i].className.replace(" change", "");
    }
    currentIndex++
    if (currentIndex > content.length){
        currentIndex = 1
    }
    content[currentIndex - 1].style.display = "block";
    link[currentIndex - 1].className += " change"
    setTimeout(slideShow, 3000)
}

function validate(){
    let name = document.getElementById("name").value;
    let text = document.getElementById("text").value;
    let psd = document.getElementById("psd").value;
    let tel = document.getElementById("tel").value;
    if (name == "" || text == ""){
        alert("cannot be empty")
    } else{
        alert("Thanks for Ordering")
    }
    if (psd == "" || tel == ""){
        alert("cannot be empty")
    } else{
        alert("Thanks for Ordering")
    }
}
