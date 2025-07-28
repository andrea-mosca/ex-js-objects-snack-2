// Crea una funzione che permette la copia profonda (deep copy) di un oggetto,
//  che copia anche i suoi metodi (proprietà che contengono funzioni).
// Usa l’oggetto di Code Question 6 come test.
//  Serve usare una funzione ricorsiva! (fai un po’ di ricerca).
const chef = {
  name: "Chef Hyur",
  age: 29,
  makeBurger: (num = 1) => {
    console.log(`Ecco ${num} hamburger per te!`);
  },
  restaurant: {
    name: "Hyur's Burgers",
    welcomeClient: () => {
      console.log("Benvenuto!");
    },
    address: {
      street: "Main Street",
      number: 123,
      showAddress: () => {
        console.log("Main Street 123");
      },
    },
    isOpen: true,
  },
};

function deepCopy(obj) {
  if (typeof obj !== `object`) obj;

  if (Array.isArray(obj)) {
    const copyArr = [];
    for (let i = 0; i < obj.length; i++) {
      copyArr[i] = deepCopy(obj[i]);
    }
    return copyArr;
  }

  const copy = {};
  for (const key in obj) {
    const value = obj[key];
    if (typeof value !== `object`) {
      copy[key] = value;
    } else copy[key] = deepCopy(value);
  }
  return copy;
}

const chefCopy = deepCopy(chef);
console.log(chefCopy);
