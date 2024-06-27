// Creating a Reference of the Buttons using getElementById

let button1 = document.getElementById("myButton");

let button2 = document.getElementById("myButton2");

let classCopyCode = document.querySelector(".copyCode");

// Declaring Variables

let rgb1 = "rgb(92,145,229)";
let rgb2 = "rgb(152,63,198)";

// Adding Event Listeners

const hexaValues = () =>{
    let myHexaValues = "0123456789abcdef";

    let hexColor = "#";
    
    for(let i=0;i<6;i++){
        hexColor = hexColor + myHexaValues[Math.floor((Math.random() * 16 ))];
    }

    return hexColor;
}


const handleButton1 = () =>{
    rgb1 = hexaValues();
    console.log(rgb1);

    // Changing the color of the body
    document.body.style.backgroundImage = `linear-gradient(to right,${rgb1}, ${rgb2})`;

    // Changing the text of the Document also
    classCopyCode.innerHTML = `background-image: linear-gradient(to right, ${rgb1},${rgb2})`;

    // Changing the text of Button1 Dynamically
    button1.innerHTML = rgb1;
};

const handleButton2 = () =>{
    rgb2 = hexaValues();
    console.log(rgb2);

    // Changing the color of the body
    document.body.style.backgroundImage = `linear-gradient(to right,${rgb1}, ${rgb2})`;

    // Changing the text of the Document also
    classCopyCode.innerHTML = `background-image: linear-gradient(to right, ${rgb1},${rgb2})`;

    // Changing the text of Button2 Dynamically
    button2.innerHTML = rgb2;
};

classCopyCode.addEventListener('click', ()=>{
    navigator.clipboard.writeText(classCopyCode.innerHTML);

    alert(`${classCopyCode.innerHTML} copied to Clipboard!`);
});


button1.addEventListener('click',handleButton1);

button2.addEventListener('click',handleButton2);
