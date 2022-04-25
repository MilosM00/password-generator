"use strict";


const length = document.querySelector(`.length`);
const uppercase = document.querySelector(`.cb-uppercase`);
const lowercase = document.querySelector(`.cb-lowercase`);
const numbers = document.querySelector(`.cb-numbers`);
const symbols = document.querySelector(`.cb-symbols`);
const displayPassword = document.querySelector(`.display-password`);
const buttonPassowrd = document.querySelector(`.button-password`);
const buttonCopy = document.querySelector(`.button-copy`);


buttonPassowrd.addEventListener(`click`, () =>{
    if(uppercase.checked === true){
        switch(length.value){
            case `5`: displayPassword.value = `${includeU(5)}`; break;
            case `10`: displayPassword.value = `${includeU(10)}`; break;
            case `15`: displayPassword.value = `${includeU(15)}`; break;
            case `20`: displayPassword.value = `${includeU(20)}`; break;
            case `25`: displayPassword.value = `${includeU(25)}`; break;
            case `30`: displayPassword.value = `${includeU(30)}`; break;
            case `35`: displayPassword.value = `${includeU(35)}`; break;
            case `40`: displayPassword.value = `${includeU(40)}`; break;
            case `45`: displayPassword.value = `${includeU(45)}`; break;
            case `50`: displayPassword.value = `${includeU(50)}`; break;
        }
    }

    if(lowercase.checked === true){
        switch(length.value){
            case `5`: displayPassword.value = `${includeL(5)}`; break;
            case `10`: displayPassword.value = `${includeL(10)}`; break;
            case `15`: displayPassword.value = `${includeL(15)}`; break;
            case `20`: displayPassword.value = `${includeL(20)}`; break;
            case `25`: displayPassword.value = `${includeL(25)}`; break;
            case `30`: displayPassword.value = `${includeL(30)}`; break;
            case `35`: displayPassword.value = `${includeL(35)}`; break;
            case `40`: displayPassword.value = `${includeL(40)}`; break;
            case `45`: displayPassword.value = `${includeL(45)}`; break;
            case `50`: displayPassword.value = `${includeL(50)}`; break;
        }
    }

    if(numbers.checked === true){
        switch(length.value){
            case `5`: displayPassword.value = `${includeN(5)}`; break;
            case `10`: displayPassword.value = `${includeN(10)}`; break;
            case `15`: displayPassword.value = `${includeN(15)}`; break;
            case `20`: displayPassword.value = `${includeN(20)}`; break;
            case `25`: displayPassword.value = `${includeN(25)}`; break;
            case `30`: displayPassword.value = `${includeN(30)}`; break;
            case `35`: displayPassword.value = `${includeN(35)}`; break;
            case `40`: displayPassword.value = `${includeN(40)}`; break;
            case `45`: displayPassword.value = `${includeN(45)}`; break;
            case `50`: displayPassword.value = `${includeN(50)}`; break;
        }
    }

    if(symbols.checked === true){
        switch(length.value){
            case `5`: displayPassword.value = `${includeS(5)}`; break;
            case `10`: displayPassword.value = `${includeS(10)}`; break;
            case `15`: displayPassword.value = `${includeS(15)}`; break;
            case `20`: displayPassword.value = `${includeS(20)}`; break;
            case `25`: displayPassword.value = `${includeS(25)}`; break;
            case `30`: displayPassword.value = `${includeS(30)}`; break;
            case `35`: displayPassword.value = `${includeS(35)}`; break;
            case `40`: displayPassword.value = `${includeS(40)}`; break;
            case `45`: displayPassword.value = `${includeS(45)}`; break;
            case `50`: displayPassword.value = `${includeS(50)}`; break;
        }
    }

    if(uppercase.checked === true && lowercase.checked === true){
        switch(length.value){
            case `5`: displayPassword.value = `${includeUL(5)}`; break;
            case `10`: displayPassword.value = `${includeUL(10)}`; break;
            case `15`: displayPassword.value = `${includeUL(15)}`; break;
            case `20`: displayPassword.value = `${includeUL(20)}`; break;
            case `25`: displayPassword.value = `${includeUL(25)}`; break;
            case `30`: displayPassword.value = `${includeUL(30)}`; break;
            case `35`: displayPassword.value = `${includeUL(35)}`; break;
            case `40`: displayPassword.value = `${includeUL(40)}`; break;
            case `45`: displayPassword.value = `${includeUL(45)}`; break;
            case `50`: displayPassword.value = `${includeUL(50)}`; break;
        }
    }

    if(uppercase.checked === true && numbers.checked === true){
        switch(length.value){
            case `5`: displayPassword.value = `${includeUN(5)}`; break;
            case `10`: displayPassword.value = `${includeUN(10)}`; break;
            case `15`: displayPassword.value = `${includeUN(15)}`; break;
            case `20`: displayPassword.value = `${includeUN(20)}`; break;
            case `25`: displayPassword.value = `${includeUN(25)}`; break;
            case `30`: displayPassword.value = `${includeUN(30)}`; break;
            case `35`: displayPassword.value = `${includeUN(35)}`; break;
            case `40`: displayPassword.value = `${includeUN(40)}`; break;
            case `45`: displayPassword.value = `${includeUN(45)}`; break;
            case `50`: displayPassword.value = `${includeUN(50)}`; break;
        }
    }

    if(lowercase.checked === true && numbers.checked === true){
        switch(length.value){
            case `5`: displayPassword.value = `${includeLN(5)}`; break;
            case `10`: displayPassword.value = `${includeLN(10)}`; break;
            case `15`: displayPassword.value = `${includeLN(15)}`; break;
            case `20`: displayPassword.value = `${includeLN(20)}`; break;
            case `25`: displayPassword.value = `${includeLN(25)}`; break;
            case `30`: displayPassword.value = `${includeLN(30)}`; break;
            case `35`: displayPassword.value = `${includeLN(35)}`; break;
            case `40`: displayPassword.value = `${includeLN(40)}`; break;
            case `45`: displayPassword.value = `${includeLN(45)}`; break;
            case `50`: displayPassword.value = `${includeLN(50)}`; break;
        }
    }

    if(numbers.checked === true && symbols.checked === true){
        switch(length.value){
            case `5`: displayPassword.value = `${includeNS(5)}`; break;
            case `10`: displayPassword.value = `${includeNS(10)}`; break;
            case `15`: displayPassword.value = `${includeNS(15)}`; break;
            case `20`: displayPassword.value = `${includeNS(20)}`; break;
            case `25`: displayPassword.value = `${includeNS(25)}`; break;
            case `30`: displayPassword.value = `${includeNS(30)}`; break;
            case `35`: displayPassword.value = `${includeNS(35)}`; break;
            case `40`: displayPassword.value = `${includeNS(40)}`; break;
            case `45`: displayPassword.value = `${includeNS(45)}`; break;
            case `50`: displayPassword.value = `${includeNS(50)}`; break;
        }
    }

    if(lowercase.checked === true && symbols.checked === true){
        switch(length.value){
            case `5`: displayPassword.value = `${includeLS(5)}`; break;
            case `10`: displayPassword.value = `${includeLS(10)}`; break;
            case `15`: displayPassword.value = `${includeLS(15)}`; break;
            case `20`: displayPassword.value = `${includeLS(20)}`; break;
            case `25`: displayPassword.value = `${includeLS(25)}`; break;
            case `30`: displayPassword.value = `${includeLS(30)}`; break;
            case `35`: displayPassword.value = `${includeLS(35)}`; break;
            case `40`: displayPassword.value = `${includeLS(40)}`; break;
            case `45`: displayPassword.value = `${includeLS(45)}`; break;
            case `50`: displayPassword.value = `${includeLS(50)}`; break;
        }
    }

    if(uppercase.checked === true && symbols.checked === true){
        switch(length.value){
            case `5`: displayPassword.value = `${includeUS(5)}`; break;
            case `10`: displayPassword.value = `${includeUS(10)}`; break;
            case `15`: displayPassword.value = `${includeUS(15)}`; break;
            case `20`: displayPassword.value = `${includeUS(20)}`; break;
            case `25`: displayPassword.value = `${includeUS(25)}`; break;
            case `30`: displayPassword.value = `${includeUS(30)}`; break;
            case `35`: displayPassword.value = `${includeUS(35)}`; break;
            case `40`: displayPassword.value = `${includeUS(40)}`; break;
            case `45`: displayPassword.value = `${includeUS(45)}`; break;
            case `50`: displayPassword.value = `${includeUS(50)}`; break;
        }
    }

    if(uppercase.checked === true && lowercase.checked === true && numbers.checked === true){
        switch(length.value){
            case `5`: displayPassword.value = `${includeULN(5)}`; break;
            case `10`: displayPassword.value = `${includeULN(10)}`; break;
            case `15`: displayPassword.value = `${includeULN(15)}`; break;
            case `20`: displayPassword.value = `${includeULN(20)}`; break;
            case `25`: displayPassword.value = `${includeULN(25)}`; break;
            case `30`: displayPassword.value = `${includeULN(30)}`; break;
            case `35`: displayPassword.value = `${includeULN(35)}`; break;
            case `40`: displayPassword.value = `${includeULN(40)}`; break;
            case `45`: displayPassword.value = `${includeULN(45)}`; break;
            case `50`: displayPassword.value = `${includeULN(50)}`; break;
        }
    }

    if(uppercase.checked === true && lowercase.checked === true && symbols.checked === true){
        switch(length.value){
            case `5`: displayPassword.value = `${includeULS(5)}`; break;
            case `10`: displayPassword.value = `${includeULS(10)}`; break;
            case `15`: displayPassword.value = `${includeULS(15)}`; break;
            case `20`: displayPassword.value = `${includeULS(20)}`; break;
            case `25`: displayPassword.value = `${includeULS(25)}`; break;
            case `30`: displayPassword.value = `${includeULS(30)}`; break;
            case `35`: displayPassword.value = `${includeULS(35)}`; break;
            case `40`: displayPassword.value = `${includeULS(40)}`; break;
            case `45`: displayPassword.value = `${includeULS(45)}`; break;
            case `50`: displayPassword.value = `${includeULS(50)}`; break;
        }
    }

    if(lowercase.checked === true && numbers.checked === true && symbols.checked === true){
        switch(length.value){
            case `5`: displayPassword.value = `${includeLNS(5)}`; break;
            case `10`: displayPassword.value = `${includeLNS(10)}`; break;
            case `15`: displayPassword.value = `${includeLNS(15)}`; break;
            case `20`: displayPassword.value = `${includeLNS(20)}`; break;
            case `25`: displayPassword.value = `${includeLNS(25)}`; break;
            case `30`: displayPassword.value = `${includeLNS(30)}`; break;
            case `35`: displayPassword.value = `${includeLNS(35)}`; break;
            case `40`: displayPassword.value = `${includeLNS(40)}`; break;
            case `45`: displayPassword.value = `${includeLNS(45)}`; break;
            case `50`: displayPassword.value = `${includeLNS(50)}`; break;
        }
    }

    if(uppercase.checked === true && numbers.checked === true && symbols.checked === true){
        switch(length.value){
            case `5`: displayPassword.value = `${includeUNS(5)}`; break;
            case `10`: displayPassword.value = `${includeUNS(10)}`; break;
            case `15`: displayPassword.value = `${includeUNS(15)}`; break;
            case `20`: displayPassword.value = `${includeUNS(20)}`; break;
            case `25`: displayPassword.value = `${includeUNS(25)}`; break;
            case `30`: displayPassword.value = `${includeUNS(30)}`; break;
            case `35`: displayPassword.value = `${includeUNS(35)}`; break;
            case `40`: displayPassword.value = `${includeUNS(40)}`; break;
            case `45`: displayPassword.value = `${includeUNS(45)}`; break;
            case `50`: displayPassword.value = `${includeUNS(50)}`; break;
        }
    }

    if(uppercase.checked === true && lowercase.checked === true && numbers.checked === true && symbols.checked === true){
        switch(length.value){
            case `5`: displayPassword.value = `${includeULNS(5)}`; break;
            case `10`: displayPassword.value = `${includeULNS(10)}`; break;
            case `15`: displayPassword.value = `${includeULNS(15)}`; break;
            case `20`: displayPassword.value = `${includeULNS(20)}`; break;
            case `25`: displayPassword.value = `${includeULNS(25)}`; break;
            case `30`: displayPassword.value = `${includeULNS(30)}`; break;
            case `35`: displayPassword.value = `${includeULNS(35)}`; break;
            case `40`: displayPassword.value = `${includeULNS(40)}`; break;
            case `45`: displayPassword.value = `${includeULNS(45)}`; break;
            case `50`: displayPassword.value = `${includeULNS(50)}`; break;
        }
    }
});

buttonCopy.addEventListener(`click`, () =>{
    displayPassword.select();
    document.execCommand(`copy`);
});


const includeU = function(length) {
    let result = ``;
    const characters = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

const includeL = function(length) {
    let result = ``;
    const characters = `abcdefghijklmnopqrstuvwxyz`;
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

const includeN = function(length) {
    let result = ``;
    const characters = `0123456789`;
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

const includeS = function(length) {
    let result = ``;
    const characters = `!@#$%^&*()-=_+][}{;:|/.,<>~`;
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

const includeUL = function(length) {
    let result = ``;
    const characters = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`;
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

const includeUN = function(length) {
    let result = ``;
    const characters = `ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`;
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

const includeLN = function(length) {
    let result = ``;
    const characters = `abcdefghijklmnopqrstuvwxyz0123456789`;
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

const includeNS = function(length) {
    let result = ``;
    const characters = `!@#$%^&*()-=_+][}{;:|/.,<>~0123456789`;
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

const includeLS = function(length) {
    let result = ``;
    const characters = `!@#$%^&*()-=_+][}{;:|/.,<>~abcdefghijklmnopqrstuvwxyz`;
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

const includeUS = function(length) {
    let result = ``;
    const characters = `!@#$%^&*()-=_+][}{;:|/.,<>~ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

const includeULN = function(length) {
    let result = ``;
    const characters = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`;
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

const includeULS = function(length) {
    let result = ``;
    const characters = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()-=_+][}{;:|/.,<>~`;
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

const includeLNS = function(length) {
    let result = ``;
    const characters = `abcdefghijklmnopqrstuvwxyz!@#$%^&*()-=_+][}{;:|/.,<>~0123456789`;
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

const includeUNS = function(length) {
    let result = ``;
    const characters = `ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-=_+][}{;:|/.,<>~0123456789`;
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

const includeULNS = function(length) {
    let result = ``;
    const characters = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()-=_+][}{;:|/.,<>~0123456789`;
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}