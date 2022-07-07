interface Reproductor {
  volumen: number;
  segundo: number;
  cancion: string;
  detalles: Detalles;
}

interface Detalles {
  autor: string;
  anio: number;
}

const reproductor: Reproductor = {
  volumen: 90,
  segundo: 36,
  cancion: "Cry for the Moon",
  detalles: {
    autor: "Epica",
    anio: 2005,
  },
};

//Destructuracion de objetos

const { volumen, segundo, cancion, detalles } = reproductor;
const { autor } = detalles;

console.log("El volumen actual de ", volumen);
console.log("El segundo actual de ", segundo);
console.log("La cancion actual de ", cancion);
console.log("El autor es: ", autor);
