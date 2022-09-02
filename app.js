let container = document.querySelector('.container');




for(let i = 0; i < 4; i++){
    let div = document.createElement('div');
    div.classList.add('box');
    div.id = i;
    container.appendChild(div);

}

for(let i = 0; i < 4; i++){
    for(j = 0; j < 4; j++){
        let div = document.createElement('div');
        div.classList.add('sub-box');
        
        box = document.getElementById(i)
        box.appendChild(div);
    }
}

document.getElementsByClassName('sub-box').onmouseover = function (evt) {
    this.parentNode.style.backgroundColor = "red";

}