const objeto1 = { x: 1, y: 2, z: 3 };
const objeto2 = { a: 1, y: 2, z: 3 };

const propiedadesObjeto2 = Object.keys(objeto2);
console.log(propiedadesObjeto2);

for (let propiedad in objeto1) {
    if (propiedadesObjeto2.includes(propiedad)) {
        console.log(`la propiedad ${propiedad} existe a ambos objetos`);

        // comprueba si el valor de la propiedad es el mismo
        if (objeto1[propiedad] === objeto2[propiedad]) {
            console.log(`la propiedad ${propiedad} tiene el mismo valor: ${objeto2[propiedad]}`);
        }
    }
    //console.log(propiedad)
}