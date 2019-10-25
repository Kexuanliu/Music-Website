var v1; // 第一个数
var v2; //第二个数
var math; //运算符
var show ; // id
var temp ; //中间值

function setV(a) {
    show = document.getElementById("show");
    temp = show.value;
    if (a >= 0 || a <= 9)//这里可以加一个‘.’
        show.value = temp + a;
}

function js(m) {
    show = document.getElementById("show");
    temp = show.value;
    v1 = temp;
    math = m;
    show.value="";
}

function get(){
    show = document.getElementById("show");
    temp = show.value;
    v2 = show.value;
    show.value="";
    a = parseInt(v1);//对字符转型
    b = parseInt(v2);
    var c;
    switch (math){
        case "*":
            c = a*b;
            break;
        case "+":
            c = a+b;
            break;
        case "-":
            c = a-b;
            break;
        case "/":
            c = a/b;
            break;
    }
    show.value = (c);
}