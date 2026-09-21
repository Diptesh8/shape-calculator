function calculateparallelogramArea(){
    const parallelogramBase =document.getElementById('parallelogram-base');
    const parallelogramValueBase= parallelogramBase.value;
    const Base = parseFloat(parallelogramValueBase);
    // height section
    const parallelogramHeight =document.getElementById('parallelogram-height');
    const parallelogramValueHeight= parallelogramHeight.value;
    const height = parseFloat(parallelogramValueHeight);
    // calculate section ------------
    const area = Base * height;
//    show the final output in ui ---------
const finalOutput =document.getElementById('parallelogramArea');
finalOutput.innerText=area;

}