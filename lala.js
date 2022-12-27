function ff(){
    let mm=document.getElementById("value").value;
    let sum=0; 
    for (let index = 1; index <= mm; index++) {
    sum += index;
    document.getElementById("result").innerHTML=sum;
        
    }

}

    function hh(){
        let mm=document.getElementById("value1").value;
         
        for (let index = 1; index <=mm; index++) {
        value=index + 1.5;
        document.getElementById("result1").innerHTML=value;
            
        }

}

function rr(){
let kk =document.getElementById("value2").value;
if(kk > 80){
    kk="mumtaz";
}else if(kk > 70){

    kk="jiyad jidan";
}else if(kk > 60){
    kk="jiyad"
}
else if(kk > 50){
    kk="makbol"
}
else{kk="fail"}
document.getElementById("result2").innerHTML=kk;

}