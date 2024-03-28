
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

// let x = document.querySelector(".startPage").scrollTop;
// if (x <= 200) {
//     document.querySelector('.home').style.border = "2px solid black";
// } else if (x > 200 && x < 600) {
//     document.querySelector('.link1').style.border = "2px solid black";
// } else if (x > 200 && x < 650) {
//     document.querySelector('.link2').style.border = "2px solid black";
// } else if (x > 1200 && x <= 1800) {
//     document.querySelector('.link3').style.border = "2px solid black";
// } else if (x > 1800) {
//     document.querySelector('.link4').style.border = "2px solid black";
// }
// console.log(x);
// console.log(document.querySelector('.home').style)
function lorem0(x){
    document.querySelector('.home').style.border= "2px solid black";
    

}
function normal0(x){
    document.querySelector('.home').style.border = '0';
}

function lorem1(x){
    document.querySelector('.link1').style.border = "2px solid black";
}
function normal1(x){
    document.querySelector('.link1').style.border = '0';
}
function lorem2(x){
    document.querySelector('.link2').style.border = "2px solid black";
}
function normal2(x){
    document.querySelector('.link2').style.border = '0';
}
function lorem3(x){
    document.querySelector('.link3').style.border = "2px solid black";
}
function normal3(x){
    document.querySelector('.link3').style.border = '0';
}
function lorem4(x){
    document.querySelector('.link4').style.border = "2px solid black";
}
function normal4(x){
    document.querySelector('.link4').style.border = '0';
}