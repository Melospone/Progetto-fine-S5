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




document.addEventListener("DOMContentLoaded", function() {
    let letters = document.querySelectorAll(".move");

    function showLetters(index) {
        if (index <= letters.length) {
            letters[index].style.opacity = "0";
            setTimeout(function() {
                letters[index].style.opacity = "1";
                showLetters((index + 1) % letters.length);
            }, 500); 
        }
    }
    showLetters(0)
})

document.addEventListener("DOMContentLoaded", function() {
    let letters = document.querySelectorAll(".move2");

    function showLetters(index) {
        if (index <= letters.length) {
            letters[index].style.opacity = "0";
            setTimeout(function() {
                letters[index].style.opacity = "1";
                showLetters((index + 1) % letters.length);
            }, 500); 
        } 
    }
    showLetters(0)
})

document.addEventListener("DOMContentLoaded", function() {
    let letters = document.querySelectorAll(".move3");

    function showLetters(index) {
        if (index <= letters.length) {
            letters[index].style.opacity = "0";
            setTimeout(function() {
                letters[index].style.opacity = "1";
                showLetters((index + 1) % letters.length);
            }, 500); 
        }
    }
    showLetters(0)

})

