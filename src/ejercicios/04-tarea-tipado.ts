interface SuperHeroes {
  nombre: String;
  edad: number;
  direccion: Direccion;
  mostrarDireccion: () => string;
}

//La segunda interfaz se usa para manejar los objetos anidados

interface Direccion {
  calle: String;
  pais: String;
  ciudad: String;
}

const superHeroe: SuperHeroes = {
  nombre: "Spiderman",
  edad: 30,
  direccion: {
    calle: "Main St",
    pais: "USA",
    ciudad: "NY",
  },
  mostrarDireccion() {
    return (
      this.nombre + ", " + this.direccion.ciudad + ", " + this.direccion.pais
    );
  },
};

const direccion = superHeroe.mostrarDireccion();

console.log(direccion);
