function calculateTringleArea(){
    const triangleBaseInput = document.getElementById('triangle-base');
    const tringleBaseText = triangleBaseInput.value;
    // console.log(tringleBaseText);
    const base = parseFloat(tringleBaseText);
    const tringleHeightInput =document.getElementById('tringle-height');
    const tringleHeightText =tringleHeightInput.value;
    // console.log(tringleHeightText);
        const height = parseFloat(tringleHeightText);

    const area= 0.5 * base * height;
    console.log(area);

}

function calculateRectangleArea(){
    const rectangleWidth = document.getElementById('rectangle-width');
    const rectangleWidthInput =rectangleWidth.value;
    const width =parseFloat(rectangleWidthInput)
  const rectangleLength = document.getElementById('rectangle-length');
  const rectangleLengthText = rectangleLength.value;
  const length = parseFloat(rectangleLengthText);
  const area =width * length;
  console.log(area);
}