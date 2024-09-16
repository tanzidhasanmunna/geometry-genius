
function calculatePentagonArea(){
    const perimeter = getValue('pentagon-perimeter');
    const apothem = getValue('pentagon-apothem');

    const area = 0.5 * perimeter * apothem;
    setValue('pentagon-area', area);
}