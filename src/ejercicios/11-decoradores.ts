function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty = "new property";
    hello = "override";
  };
}

@classDecorator //Añadir funcionalidad, se usan para saber si es un componente, un pipe o una directiva
class MiSuperClase {
  public miPropiedad: string = "ABC123";

  imprimir() {
    console.log("Hola Mundo");
  }
}

console.log(MiSuperClase);
