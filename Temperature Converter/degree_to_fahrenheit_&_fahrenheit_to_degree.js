function dTof(degree){
    var cal;
    if(degree=="C"){
        cal=(document.getElementById("C").value*9)/5+32;
        document.getElementById("F").value=Math.round(cal);
    }else{
        cal=(document.getElementById("F").value*9)/5-32;
        document.getElementById("C").value=Math.round(cal);
    }
}