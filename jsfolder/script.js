window.onscroll = function () { myFunction() };

var Header = document.getElementById("myHeader");

var sticky = Header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        Header.classList.add("sticky");

    } else {
        Header.classList.remove("sticky");

    }
}