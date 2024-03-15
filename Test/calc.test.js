/* Se deben crear uno o más unit tests para las siguientes funciones del archivo calc.js:
suma()
resta()
división()
multiplicación()
 */

// const { suma } = require('../calc.js');

const { suma, resta, multiplicacion, division } = require('../calc.js');

describe('Operaciones matematicas', ()=>{
    test('Realizamos la suma', ()=>{
        expect(suma(1,1)).toBe(2);
    });
    test('Realizamos la resta',()=>{
        expect(resta(1,1)).toBe(0);
    });
    test('Realizamos la multiplicacion',()=>{
        expect(multiplicacion(1,1)).toBe(1);
    });
    test('Realizamos la division',()=>{
        expect(division(1,1)).toBe(1);
    });
});

/*-toBe() es un "matcher" que se utiliza para verificar
que un valor sea exactamente igual a otro.
En otras palabras, toBe() comprueba si dos valores
son idénticos en tipo y valor.*/

//Probar con npm test