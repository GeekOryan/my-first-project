//making the buttons responsive

function insert(num){
    document.forms.textview.value = document.forms.textview.value + num;
}

function equal(){
    let exp = document.forms.textview.value;
    if(exp){
        document.forms.textview.value = eval(exp);
    }
}

function clean(){
    document.forms.textview.value = "";
}

function back(){
    let exp = document.forms.textview.value;
    document.forms.textview.value = exp.substring(0, exp.length - 1);
}
