function pentagonCalculation(){
    const pentagonBase =document.getElementById('pentagon-p');
    const pentagonValueBase= pentagonBase.value;
    const Base = parseFloat(pentagonValueBase);
    // height section
    const pentagonHeight =document.getElementById('pentagon-b');
    const pentagonValueHeight= pentagonHeight.value;
    const height = parseFloat(pentagonValueHeight);
    // calculate section ------------
    const area = 0.5 * Base * height;
//    show the final output in ui ---------
const finalOutput =document.getElementById('pentagonArea');
finalOutput.innerText=area;
}