let container = document.querySelector('.container');




for(let i = 0; i < 4; i++){
    let div = document.createElement('div');
    div.classList.add('box');
    div.id = i;
    div.innerText = 'asfsd';
    container.appendChild(div);

}

for(let i = 0; i < 4; i++){
    let div2 = document.createElement('div');
    div2.classList.add('box');
    div2.innerText = 'asfsd';
    let element = document.getElementById(i);
    element.appendChild(div);
}



