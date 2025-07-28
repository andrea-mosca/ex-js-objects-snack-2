// **FUNZIONI DENTRO ALTRE FUNZIONI**

function funzioneEsempio(prima, dopo) {
  prima();
  setTimeout(() => {
    console.log("sono passati 1000ms");
    dopo();
  }, 1000);
}
funzioneEsempio(
  () => console.log("aspetto"),
  () => console.log("fine")
);
// *GENERATORE DI FUNZIONI
function createGreeter(greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
}
const sayHello = createGreeter("hello");
sayHello("Andrea");

// funzione che genera una funzione che moltiplica un numero

function generateMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const double = generateMultiplier(2);
console.log(double(5));
