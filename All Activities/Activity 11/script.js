function forLoop(){
    let num = parseInt(document.getElementById("num1").value, 10);
    let txt = document.getElementById("txt1");

    if(isNaN(num)){
        alert("Please enter a valid number.");
        return;
    }

    let output = "";
    for(let i = 0; i < num; i++){
        output += (i + 1) + ": " + txt.value + "\n";
    }
    document.getElementById("forResult").innerHTML = output.replace(/\n/g, "<br>");
}

function whileLoop(){
    let i = 0;
    let num = parseInt(document.getElementById("num2").value, 10);
    let txt = document.getElementById("txt2");

    if(isNaN(num)){
        alert("Please enter a valid number.");
        return;
    }

    let output = "";
    while(i < num){
        output += (i + 1) + ": " + txt.value + "\n";
        i++;
    }
    document.getElementById("whileResult").innerHTML = output.replace(/\n/g, "<br>");
}

function doLoop(){
    let i = 0;
    let num = parseInt(document.getElementById("num3").value, 10);
    let txt = document.getElementById("txt3");

    if(isNaN(num)){
        alert("Please enter a valid number.");
        return;
    }

    let output = "";
    do{
        output += (i + 1) + ": " + txt.value + "\n";
        i++;
    } while(i < num);
    document.getElementById("doResult").innerHTML = output.replace(/\n/g, "<br>");
}

function clearFields1(){
    document.getElementById("num1").value = "";
    document.getElementById("txt1").value = "";
    document.getElementById("forResult").innerHTML = "";
}

function clearFields2(){
    document.getElementById("num2").value = "";
    document.getElementById("txt2").value = "";
    document.getElementById("whileResult").innerHTML = "";
}

function clearFields3(){
    document.getElementById("num3").value = "";
    document.getElementById("txt3").value = "";
    document.getElementById("doResult").innerHTML = "";
}
