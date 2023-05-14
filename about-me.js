for (let i = 0; i < 120; i++){
    const photoSketchPad = document.querySelector('#photoSketchPad');
    const square = document.createElement('div');
    square.setAttribute('style', 'display: flex; height: 19.155px; width: 19.155px');
    square.classList.add('square');
    photoSketchPad.appendChild(square);

    square.onmousemove = function(){
        square.style.backgroundColor = 'transparent';


    };

};