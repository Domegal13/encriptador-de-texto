let textoLeft = document.querySelector(".texto-left").value;
let textoRight = document.querySelector(".texto-right");

let copiar = document.querySelector(".btn4");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");
let modal = document.querySelector(".modal");
let cerrarModal = document.querySelector(".cerrar-modal");

const A = "ast";
const E = "epk";
const I = "itj";
const O = "okp";
const U = "umta";

const encriptar = () => {
  let textoLeft = document.querySelector(".texto-left").value;
  let textoRight = document.querySelector(".texto-right");
  let p1 = document.querySelector(".parrafo1");
  let p2 = document.querySelector(".parrafo2");
  let expReg = /[A-Zá-ü]/gm.test(textoLeft);
  // let expReg1 = /[áéíóú]/gm.test(textoLeft);

  if (expReg === true) {
    modal.showModal();
    console.log("Debe introducir un texto válido");
  } else {
    let textoEncriptado = textoLeft
      .replace(/e/gi, E)
      .replace(/i/gi, I)
      .replace(/a/gi, A)
      .replace(/o/gi, O)
      .replace(/u/gi, U);

    if (textoLeft.length !== 0) {
      btn4.hidden = false;
      p1.textContent = "";
      p2.textContent = "";
      textoRight.style.backgroundImage = "none";
      textoRight.value = textoEncriptado;
    } else {
      textoRight.value = "";
      textoRight.style.backgroundImage = "url(./imagenes/Muñeco.png)";
      p1.textContent = "Ningún mensaje fue encontrado";
      p2.textContent = "Ingresa el texto que desees encriptar o desencriptar.";
    }
  }
};

const desencriptar = () => {
  let textoLeft = document.querySelector(".texto-left").value;
  let textoRight = document.querySelector(".texto-right");
  let p1 = document.querySelector(".parrafo1");
  let p2 = document.querySelector(".parrafo2");
  let expReg = /[A-Zá-ü]/gm.test(textoLeft);

  if (expReg === true) {
    modal.showModal();
    console.log("Debe introducir un texto válido");
  } else {
    let textoDesencriptado = textoLeft

      .replace(/epk/g, "e")
      .replace(/itj/g, "i")
      .replace(/ast/g, "a")
      .replace(/okp/g, "o")
      .replace(/umta/g, "u");

    if (textoLeft.length !== 0) {
      btn4.hidden = false;
      p1.textContent = "";
      p2.textContent = "";
      textoRight.style.backgroundImage = "none";
      textoRight.value = textoDesencriptado;
    } else {
      textoRight.value = "";
      textoRight.style.backgroundImage = "url(./imagenes/Muñeco.png)";
      p1.textContent = "Ningún mensaje fue encontrado";
      p2.textContent = "Ingresa el texto que desees encriptar o desencriptar.";
    }
  }
};

const limpiar = () => {
  let textoLeft = document.querySelector(".texto-left");
  let textoRight = document.querySelector(".texto-right");
  let p1 = document.querySelector(".parrafo1");
  let p2 = document.querySelector(".parrafo2");

  textoLeft.value = "";
  textoRight.value = "";
  textoRight.style.backgroundImage = "url(./imagenes/Muñeco.png)";
  p1.textContent = "Ningún mensaje fue encontrado";
  p2.textContent = "Ingresa el texto que desees encriptar o desencriptar.";
  btn4.hidden = true;
};

//Cerrar ventana modal

cerrarModal.addEventListener("click", () => {
  modal.close();
});

// Copiar

copiar.addEventListener("click", () => {
  if (textoRight.length !== 0) {
    copyToClipBoard();

    let modal2 = document.querySelector(".modal-copy");
    modal2.showModal();
    setTimeout(() => {
      modal2.close();
    }, 1200);
  }
});

const copyToClipBoard = () => {
  try {
    navigator.clipboard.writeText(textoRight);
  } catch (error) {
    console.log(error);
  }
};
