

let rb = false;

const boxredClick = () => {
    rb = true;
    const box1  = document.getElementById('box-1');
    box1.style.backgroundColor = "red";
}

let bb = false;

const boxblueClick = () => {
    bb = true;
    const box1  = document.getElementById('box-2');
    box1.style.backgroundColor = "blue";
}

let gb = false;

const boxgreenClick = () => {
    rb = true;
    const box1  = document.getElementById('box-3');
    box1.style.backgroundColor = "green";
}

let yb = false;

const boxyellowClick = () => {
    yb = true;
    const box1  = document.getElementById('box-4');
    box1.style.backgroundColor = "yellow";
}

let button = false;

const submitbutton = () => {
    
    const text  = document.getElementById('inputtext');
    
    const text2 = "Hello, "+text.value;

    // text2.classList.add("heading");
    const headtext = document.getElementById('head');

    headtext.innerText = text2;
    headtext.classList.add("heading");

}

