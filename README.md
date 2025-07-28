## 🏆 Code Question 1

```javascript
const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = 'Double Cheese Burger';
secondBurger.weight = 500;
​
console.log(hamburger.name); // ?
console.log(secondBurger.name ); // ?
```

Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

### risposta:

in console viene stampato `Double Cheese Burger` sul nome e 500 sul peso. Questo perchè è stato creato in memoria un solo oggetto

## 🏆 Code Question 2

```javascript
const hamburger = {
    name: "Cheese Burger",
    weight: 250,
    ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
};
​
const secondBurger = {...hamburger};
secondBurger.ingredients[0] = "Salad";
​
console.log(hamburger.ingredients[0]); // ?
console.log(secondBurger.ingredients[0]); // ?
```

P.S.: Ricordati che gli Array, come gli oggetti, sono dei Reference Type (Tipi di Riferimento)!
Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

### risposta:

in entrambi i casi viene stampato `Salad` come primo elemento dell'array ingredients, questo perchè la shallow copia crea effettivamente due oggetti diversi, ma essendo ingredients una proprietà annidata, di quest'ultima verrà copiato il riferimento

## 🏆 Code Question 3

```javascript
const hamburger = {
    name: "Cheese Burger",
    weight: 250,
    maker: {
        name: "Anonymous Chef",
        restaurant: {
            name: "Hyur's Burgers",
            address: "Main Street, 123",
            isOpen: true,
        },
        age: 29
    }
};
​
const secondBurger = structuredClone(hamburger);
const thirdBurger = structuredClone(hamburger);
```

Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

### risposta:

sono stati creati 3 oggetti hamburger differenti ognuno dei quali ha a sua volta 2 oggetti all'interno(3 nel caso degli hamburger,9 nel caso di oggetti totali)

## 🏆 Code Question 4

```javascript
const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
}
​
const restaurant = {
    name: "Hyur's Burgers",
    address: {
        street: 'Main Street',
        number: 123,
    },
    openingDate: new Date(2025, 3, 11),
    isOpen: false,
};
```

Qual è il metodo migliore per clonare l’oggetto chef, e perché?
Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?

### risposta:

il metodo migliore per clonare chef è usare lo `spread operator`, perchè l'oggetto in questione non ha elementi annidati e a differenza di una deep copy, lo spread operator permette di copiare anche le funzioni(anche se copia il riferimento).
per restaurant invece il metodo migliore è `structuredClone()`, permettendo di copiare oggetti annidati e complessi come `Date`

## 🎯 Code Question 5 (Bonus)

```javascript
const hamburger = {
    name: "Cheese Burger",
    weight: 250,
    maker: {
        name: "Anonymous Chef",
        restaurant: {
            name: "Hyur's Burgers",
            address: "Main Street, 123",
            isOpen: true,
        },
        age: 29
    }
};
​
const newRestaurant = {...hamburger.maker.restaurant};
newRestaurant.name = "Hyur's II";
newRestaurant.address = "Second Street, 12";
const secondBurger = {...hamburger};
secondBurger.maker.restaurant = newRestaurant;
secondBurger.maker.name = "Chef Hyur";
​
console.log(hamburger.maker.name); // ?
console.log(secondBurger.maker.name); // ?
console.log(hamburger.maker.restaurant.name); // ?
console.log(secondBurger.maker.restaurant.name); // ?
```

Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

### risposta:

sono stati creati in memoria 3 oggetti, il primo è hamburger e il secondo è newRestaurant(avendo copiato solo un oggetto con proprietà primitive di hamburger) e il terzo è secondHamburger(che però al suo interno ha proprietà copiate per riferimento)

```javascript
console.log(hamburger.maker.name); // Chef Hyur
console.log(secondBurger.maker.name); // Chef Hyur
console.log(hamburger.maker.restaurant.name); // Hyur's II
console.log(secondBurger.maker.restaurant.name); // Hyur's II
```

## 🎯 Code Question 6 (Bonus)

```javascript
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
```

Qual è il metodo migliore per clonare l’oggetto chef, e perché?

### risposta:

volendo mantenere le funzioni annidate non è consigliabile utilizzare `structuredClone()`, nonostante permetta la copia di oggetti annidasti e complessi. In questo caso(tra i metodi appresi) è consigliabile utilizzare lo spred operator che, nonostante creerà copie con riferimenti, permette almeno di mantenere una copia(sempre per riferimento) delle funzioni.

## 🎯 Snack (Bonus)

Crea una funzione che permette la copia profonda (deep copy) di un oggetto, che copia anche i suoi metodi (proprietà che contengono funzioni). Usa l’oggetto di Code Question 6 come test.

⚠️ Serve usare una funzione ricorsiva! (fai un po’ di ricerca).
