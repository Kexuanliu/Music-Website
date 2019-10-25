function myMove() {
    var elem = document.getElementById("animate");
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}

function a(){
    var sp_1 = parseInt(document.getElementById("sp_1").value);
    var sp_2 = parseInt(document.getElementById("sp_2").value);
    alert(sp_1+sp_2);
}