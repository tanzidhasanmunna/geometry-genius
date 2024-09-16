
function calculateRectangleArea() {
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const width = parseFloat(rectangleWidthInput.value);
    
 
    const rectangleLengthInput = document.getElementById('rectangle-length');
    const length = parseFloat(rectangleLengthInput.value);
    
    const area = width * length;
    
    document.getElementById('rectangle-area').textContent = area.toFixed(2);
}