
function calculateEllipseArea(){
    const a = getValue('ellipse-a');
    const b = getValue('ellipse-b');
    const area = Math.PI * a * b;
    setValue('ellipse-area', area);
}