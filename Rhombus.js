function RhombusCalculationPart(){
        const rhombusBase =document.getElementById('rhombus-base');
    const rhombusValueBase= rhombusBase.value;
    const Base = parseFloat(rhombusValueBase);
    // height section
    const rhombusHeight =document.getElementById('rhombus-height');
    const rhombusValueHeight= rhombusHeight.value;
    const height = parseFloat(rhombusValueHeight);
    // calculate section ------------
    const area = Base * height;
//    show the final output in ui ---------
const finalOutput =document.getElementById('rhombusArea');
finalOutput.innerText=area;
}