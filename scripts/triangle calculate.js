
function calculateTriangleArea(){
   const triangleBaseInput = document.getElementById('triangle-base');
   const base = parseFloat(triangleBaseInput.value);
   

   const triangleHeightInput = document.getElementById('triangle-height');
   const height = parseFloat(triangleHeightInput.value);
   
   const area = 0.5 * base * height;
   
   document.getElementById('triangle-area').textContent = area.toFixed(2);
}