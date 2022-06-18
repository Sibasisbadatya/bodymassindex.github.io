let a = document.getElementById("height").value;
let b = document.getElementById("weight").value;
let e= document.getElementById("age").value;
let c = a * a;

function result() {
    let a = document.getElementById("height").value;
    let b = document.getElementById("weight").value;
    let c = a * a;
    var d = (b / c).toFixed(2);
     alert(`Your BMI is ${d}`);
    if((a === '') || (a < 0) || (isNaN(a))){
        //NaN !== NaN
        alert("please enter a valid height!!")
        
    }
    else if((b === '') || (b < 0) || (isNaN(b))){
        //NaN !== NaN
        alert("please enter a valid weight!!")
        
    }
    else if((e === '') || (e < 0) || (isNaN(e))){
        //NaN !== NaN
        alert("please enter a valid age!!")
        
    }
  
}

function refresh(){
     document.getElementById("height").value="";
    document.getElementById("weight").value="";
    document.getElementById("age").value="";
    
}
    
