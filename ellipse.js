function ellipseCalculateArea(){
    const ellipseBase =document.getElementById('ellipse-base');
    const ellipseValueBase= ellipseBase.value;
    const Base = parseFloat(ellipseValueBase);
    // height section
    const ellipseHeight =document.getElementById('ellipse-height');
    const ellipseValueHeight=ellipseHeight.value;
    const height = parseFloat(ellipseValueHeight);
    // calculate section ------------
    const area = 3.14 * Base * height;
//    show the final output in ui ---------
const finalOutput =document.getElementById('ellipseArea');
finalOutput.innerText=area;
}