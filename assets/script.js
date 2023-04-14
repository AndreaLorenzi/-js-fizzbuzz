const eleContainer= document.querySelector('.container')

for(let i = 1; i<=100; i++){

    if(i % 15 == 0){
        console.log("fizzbuzz");
        eleContainer.innerHTML = eleContainer.innerHTML + `<div class="square fizzbuzz">fizzbuzz</div>`;
    }

    else if(i % 5 == 0){
        console.log("buzz");
        eleContainer.innerHTML = eleContainer.innerHTML + `<div class="square buzz">buzz</div>`;
    }

    else if(i % 3 == 0){
        console.log("Fizz");
        eleContainer.innerHTML = eleContainer.innerHTML + `<div class="square fizz">Fizz</div>`;
    }
    

else{
    console.log(i);
    eleContainer.innerHTML = eleContainer.innerHTML + `<div class="square">${i}</div>`;
}


}
