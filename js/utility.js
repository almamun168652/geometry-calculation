
// get input value
function getInputValue(inputFiledId){
    const inputFiled = document.getElementById(inputFiledId);
    const inputValueString = inputFiled.value;
    const inputValue = parseFloat(inputValueString);
    inputFiled.value ='';
    return inputValue;
};


// set element innerText 
function setElementInnerText(elementId , area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}

// toCardEntry

function toCardEntry(areaElementId , areaResult){
    const cardAreaResult = document.getElementById(areaElementId);
    cardAreaResult.innerText = areaResult
}


// to calc entry

function toCalcEntry(areaType, areaResult){

    const displayParent = document.getElementById('display-show');
    const count = displayParent.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-4' , 'text-lg' , 'font-semibold' , 'ml-12');
    p.innerHTML = `${count + 1}. ${areaType} ${areaResult} cm<sup>2</sup>
    <button onclick="${console.log(areaResult / 10000)}" class="btn btn-sm btn-success">Convert</button>`;

    displayParent.appendChild(p);


    
} 




