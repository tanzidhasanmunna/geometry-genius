

function calCulateParallelogramArea(){
    const base = getValue("parallelogram-base");
    const height = getValue("parallelogram-height");
    const area = base * height;
    setValue('parallelogram-area', area);
}

function getValue(elementId){
    const baseInput = document.getElementById(elementId);
    return parseFloat(baseInput.value);
}

function setValue(elementId, value){
  document.getElementById(elementId).textContent = value.toFixed(2);
   
}