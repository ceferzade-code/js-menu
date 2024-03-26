
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