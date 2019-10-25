function pauseAuto() {
    location.replace("http://localhost:63342/demo/kexuan2.html?_ijt=ikvsjofrderbpltrqltc9pd152");
}

function beginAuto() {
    location.replace("http://localhost:63342/demo/kexuan.html?_ijt=ikvsjofrderbpltrqltc9pd152");
}

function move() {
    var elem = document.getElementById("dong");
    var topD = 40;
    var rightD = 80;
    var id = setInterval(frame, 25);
    var times = 0;
    var changeTime = 0;
    var right = false;
    function frame() {
        if (topD == 600) {
            clearInterval(id);
            elem.style.top = "40px";
            elem.style.right = "80px";
        } else {
            topD++;
            times++;
            if (times % 50 == 0) {
                right = !right;
                changeTime++;
            }
            if (right) {
                rightD-=1;
            } else {
                rightD+=1 + 0.2 * changeTime;
            }
            elem.style.top = topD + "px";
            elem.style.right = rightD + "px";
        }
    }
}