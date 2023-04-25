const interpolationBaseX = [1.1, 1.3, 1.5, 1.7, 1.9, 2.1, 2.3, 2.5];
const functionResults = [];
const deltaZero = [];
const deltaOne = [];
const deltaTwo = [];
const deltaThree = [];
const deltaFour = [];
const deltaFive = [];
const deltaSix = [];
//const deltaSeven = [];
const interpolationNumbersZ = [];
const PnZ = [];
const funcZ = [];
const h = 0.2;

const f1 = (x) => {
  return 3 * x**5 + 4 * x**4 - 2 * x**3 + x**2 - 4 * x + 7;
}

const f2 = (x) => {
  return Math.pow(Math.E, x) / Math.pow(x,2);
}

const countDelta = (baseId, deltaArray, funcResults) => {
  for (i = 0; i < funcResults.length - 1; i++) {
    const deltaElement = document.getElementById(`${baseId}-${i}`);

    deltaArray.push((funcResults[i+1] - funcResults[i]).toFixed(15));
    deltaElement.innerText = deltaArray[i];
  }
}

for (i = 0; i < 8; i++) {
  const interpolationBaseElement = document.getElementById(`base-interpolation-x-${i}`);
  const interpolationBaseResult = document.getElementById(`base-interpolation-y-${i}`);

  interpolationBaseElement.innerText = interpolationBaseX[i];
  functionResults.push((f1(interpolationBaseX[i])).toFixed(15))
  interpolationBaseResult.innerText = functionResults[i];
}

countDelta("base-interpolation-delta-0", deltaZero, functionResults);
countDelta("base-interpolation-delta-1", deltaOne, deltaZero);
countDelta("base-interpolation-delta-2", deltaTwo, deltaOne);
countDelta("base-interpolation-delta-3", deltaThree, deltaTwo);
countDelta("base-interpolation-delta-4", deltaFour, deltaThree);
countDelta("base-interpolation-delta-5", deltaFive, deltaFour);
countDelta("base-interpolation-delta-6", deltaSix, deltaFive);
//countDelta("base-interpolation-delta-7", deltaSeven, deltaSix);

const addBtn = document.getElementById("addBtn");

const addValues = () => {
  for (i = 0; i < 10; i++) {
    const input = document.getElementById(`number-z-${i+1}`);
    const interpolation = document.getElementById(`interpolation-z-${i+1}`)

    interpolationNumbersZ.push(input.value);
    interpolation.innerText = interpolationNumbersZ[i];
  }
}
const y = {
}
const countdeltaY = () =>{
  let functionLength = functionResults.length;
  if(functionLength % 2 === 0){
    y.y1 = functionResults[functionLength/2] - functionResults[functionLength/2-1];
  }else{
    y.y1 = functionResults[Math.floor(functionLength/2)];
  }
  functionLength = deltaZero.length;
  if(functionLength % 2 === 0){
    y.y2 = deltaZero[functionLength/2] - deltaZero[functionLength/2-1];
  }else{
    y.y2 = deltaZero[Math.floor(functionLength/2)];
  }
  functionLength = deltaOne.length;
  if(functionLength % 2 === 0){
    y.y3 = deltaOne[functionLength/2] - deltaOne[functionLength/2-1];
  }else{
    y.y3 = deltaOne[Math.floor(functionLength/2)];
  }
  functionLength = deltaTwo.length;
  if(functionLength % 2 === 0){
    y.y4 = deltaTwo[functionLength/2] - deltaTwo[functionLength/2-1];
  }else{
    y.y4 = deltaTwo[Math.floor(functionLength/2)];
  }
  functionLength = deltaThree.length;
  if(functionLength % 2 === 0){
    y.y5 = deltaThree[functionLength/2] - deltaThree[functionLength/2-1];
  }else{
    y.y5 = deltaThree[Math.floor(functionLength/2)];
  }
  functionLength = deltaFour.length;
  if(functionLength % 2 === 0){
    y.y6 = deltaFour[functionLength/2] - deltaFour[functionLength/2-1];
  }else{
    y.y6 = deltaFour[Math.floor(functionLength/2)];
  }
  functionLength = deltaFive.length;
  if(functionLength % 2 === 0){
    y.y7 = deltaFive[functionLength/2] - deltaFive[functionLength/2-1];
  }else{
    y.y7 = deltaFive[Math.floor(functionLength/2)];
  }
  functionLength = deltaSix.length;
  if(functionLength % 2 === 0){
    y.y8 = deltaSix[functionLength/2] - deltaSix[functionLength/2-1];
  }else{
    y.y8 = deltaSix[Math.floor(functionLength/2)];
  }
  console.log(y);

}
function factorial(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

const countPn = () => {
  for (i = 0; i < 10; i++) {
    const resultCell = document.getElementById(`pn-z-${i+1}`);
    let t = (interpolationNumbersZ[i] - interpolationBaseX[0])/h;
    console.log(t);
    countdeltaY();
    let Pn = y.y1 + (t-1) * y.y1 + t*(t-1)/factorial(2) *y.y2 + t*(t-1)*(t-0.5)/factorial(3)*y.y3 + t*(t^2-1)*(t-2)/factorial(4)*y.y4 +
        t*(t^2-1)*(t-2)^2*(t-0.5)/factorial(5)*y.y5 + t*(t^2-1)*(t-2)^3 ;
    console.log(resultCell);
  }
}

const countFunc = () => {

  for (i = 0; i < 10; i++) {
    const resultCell = document.getElementById(`func-z-${i+1}`);
    
    funcZ.push((f1(interpolationNumbersZ[i])).toFixed(15));
    resultCell.innerText = funcZ[i];
  }
}

const countDeltaAbs = () => {
  for (i = 0; i < 10; i++) {
    const deltaCell = document.getElementById(`delta-${i+1}`);

    deltaCell.innerText = Math.abs(funcZ[i] - PnZ[i]);
  }
}


addBtn.addEventListener("click", () => {
  addValues();
  countPn();
  countFunc();
  countDeltaAbs();
});


