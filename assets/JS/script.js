document.addEventListener("DOMContentLoaded", function () {
    var navBar = document.getElementById("li");
    var btn = document.querySelector(".EleU");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 350) {
            navBar.style.backgroundColor = "white";
            if (btn) {
                btn.style.backgroundColor = "green";
            }
        } else {
            navBar.style.backgroundColor = "#ffc017";
            if (btn) {
                btn.style.backgroundColor = "black"; 
            }
        }
    });
});

