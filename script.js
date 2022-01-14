const calcTemp = () =>{
    const num = document.getElementById("temp").value;
    const temp_diff = document.getElementById("temp_diff");
    const result = document.getElementById("result");

    const tempValue = temp_diff.options[temp_diff.selectedIndex].value;

    const celToFar = (c) =>{
        return Math.round(((9*c)/5) + 32);
    };
    const farToCel = (f) =>{
        return Math.round((f-32)*(5/9));
    }

    if(tempValue == 'cel'){
        result.innerHTML = `= ${farToCel(num)} ℃`; 
    }
    else{
        result.innerHTML = ` = ${celToFar(num)} ℉`;
    }
};