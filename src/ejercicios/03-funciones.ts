/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b: number): number {
  return a + b;
}

const sumarFlecha = (a: number, b: number): number => {
  return a + b;
};

function multiplicar(
  numero: number,
  otroNumero?: number,
  base: number = 2
): number {
  return numero * base;
}

const res = multiplicar(5, 0, 10);

interface PersonajeLOR {
  nombre: string;
  pv: number;
  mostrarHp: () => void;
}

function curar(personaje: PersonajeLOR, curarX: number): void {
  personaje.pv += curarX;
  console.log(personaje);
}

const nuevoPersonaje: PersonajeLOR = {
  nombre: "Sailor",
  pv: 50,
  mostrarHp() {
    console.log("Puntos de vida", this.pv);
  },
};

curar(nuevoPersonaje, 50);

nuevoPersonaje.mostrarHp();
