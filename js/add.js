
let menu = document.querySelector(".icon");

menu.onclick = function () {

    console.log(document.querySelector(".linkOnclick").style.display)


    if (document.querySelector('.linkOnclick').style.display == 'none') {

        document.querySelector('.linkOnclick').style.display = 'blok';

    }
    else {

        document.querySelector('.linkOnclick').style.display = 'none';

    }
};

let x = document.querySelector(".startPage").scrollTop;
if (x <= 200) {
    document.querySelector('.home').style.border = "2px solid black";
} else if (x > 200 && x < 600) {
    document.querySelector('.link1').style.border = "2px solid black";
} else if (x > 200 && x < 650) {
    document.querySelector('.link2').style.border = "2px solid black";
} else if (x > 1200 && x <= 1800) {
    document.querySelector('.link3').style.border = "2px solid black";
} else if (x > 1800) {
    document.querySelector('.link4').style.border = "2px solid black";
}
console.log(x);
console.log(document.querySelector('.home').style)