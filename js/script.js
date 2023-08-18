

// triangle calculate

document.getElementById('calculate-triangle').addEventListener('click', function(){

    const base = getInputValue('triangle-input-base');
    const height = getInputValue('triangle-input-height');

    // validate

    if(isNaN(base) || isNaN(height)){
        alert('please insert number..!');
        return;
    }

    const area = 0.5 * base * height;
    const areaToFixed = area.toFixed(2);


    toCardEntry('triangle-card-area' , areaToFixed);

    const areaName = document.getElementById('area-name').innerText;
    
    toCalcEntry(areaName, areaToFixed);
});



// rectanlge calculate

document.getElementById('calculate-rectangle').addEventListener('click', function(){

    const width = getInputValue('rectangle-input-width');
    const length = getInputValue('rectangle-input-length');

    // validate

    if(isNaN(width) || isNaN(length)){
        alert('please insert number..!');
        return;
    }

    const area = width * length;
    const areaToFixed = area.toFixed(2);


    toCardEntry('rectangle-card-area' , areaToFixed);

    const areaName = document.getElementById('area-name').innerText;
    
    toCalcEntry(areaName, areaToFixed);
});



// calculate-parallelogram

document.getElementById('calculate-parallelogram').addEventListener('click', function(){

    const base = getInputValue('parallelogram-input-base');
    const height = getInputValue('parallelogram-input-height');

    // validate

    if(isNaN(base) || isNaN(height)){
        alert('please insert number..!');
        return;
    }

    const area = base * height;
    const areaToFixed = area.toFixed(2);

    toCardEntry('parallelogram-card-area' , areaToFixed);

    const areaName = document.getElementById('area-name').innerText;
    
    toCalcEntry(areaName, areaToFixed);
});



// calculate-Rhombus

document.getElementById('calculate-Rhombus').addEventListener('click', function(){

    const d1 = getInputValue('Rhombus-input-d1');
    const d2 = getInputValue('Rhombus-input-d2');

    // validate

    if(isNaN(d1) || isNaN(d2)){
        alert('please insert number..!');
        return;
    }

    const area = 0.5 * d1 * d2;
    const areaToFixed = area.toFixed(2);

    toCardEntry('Rhombus-card-area' , areaToFixed);

    const areaName = document.getElementById('area-name').innerText;
    
    toCalcEntry(areaName, areaToFixed);
});



// calculate-Pentagon
document.getElementById('calculate-Pentagon').addEventListener('click', function(){

    const p = getInputValue('Pentagon-input-p');
    const b = getInputValue('Pentagon-input-b');

    // validate

    if(isNaN(p) || isNaN(b)){
        alert('please insert number..!');
        return;
    }

    const area = 0.5 * p * b;
    const areaToFixed = area.toFixed(2);

    toCardEntry('Pentagon-card-area' , areaToFixed);

    const areaName = document.getElementById('area-name').innerText;
    
    toCalcEntry(areaName, areaToFixed);
});


// calculate-Ellipse

document.getElementById('calculate-Ellipse').addEventListener('click', function(){

    const p = getInputValue('Ellipse-input-p');
    const b = getInputValue('Ellipse-input-b');

    // validate

    if(isNaN(p) || isNaN(b)){
        alert('please insert number..!');
        return;
    }

    const area = 3.1416 * p * b;
    const areaToFixed = area.toFixed(2);

    toCardEntry('Ellipse-card-area' , areaToFixed);


    const areaName = document.getElementById('area-name').innerText;
    
    toCalcEntry(areaName, areaToFixed);
});

