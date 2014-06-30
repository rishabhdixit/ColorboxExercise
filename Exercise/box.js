
"use strict";


var check = (function() {
    return function check(obj) {
        if (obj.style.backgroundColor != "red" && obj.style.backgroundColor != "blue" && obj.style.backgroundColor != "green") {
            var button = document.getElementsByName("color");

            var value;
            console.log(button.length);
            for (var i = 0; i < button.length; i++) {
                if (button[i].checked) {
                    value = button[i].value;
                    break;

                }
            }
            if (value != undefined) {
                obj.style.backgroundColor = value;

            }
            else alert("please first select a color");

        }
        else
            alert("color can not be set again because its color is :" + obj.style.backgroundColor);
    }
})();

var reset = (function(){

    return function reset() {
        var arr = document.getElementsByClassName("number");
        for (var i = 0; i < arr.length; i++) {
            arr[i].style.backgroundColor = "";
        }
        var arr1 = document.getElementsByName("color");
        for (var i = 0; i < arr1.length; i++) {
            arr1[i].checked = false;
        }
    }
})();