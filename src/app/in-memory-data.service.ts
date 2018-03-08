import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Gastón', needs: ['shirt M'], location: 'Almafuerte 4000' },
      { id: 12, name: 'Lucas', needs: ['jeans 38'], location: 'Peña 4000' },
      { id: 13, name: 'Marcela', needs: ['shirt S', 'shoes 40'], location: 'Primera Junta 4000' },
      { id: 14, name: 'Hernán', needs: ['shirt', 'jeans 32', 'shoes 36'], location: 'Roser 4000' },
      { id: 15, name: 'Carlos', needs: ['shorts L', 'jumper L'], location: 'Francia 4000' },
      { id: 16, name: 'Roberto', needs: ['jacket L', 'jumper M', 'diapers G'], location: 'Alem 4000' },
      { id: 17, name: 'Mariana', needs: ['towel', 'scarf'], location: 'San Juan 4000' },
      { id: 18, name: 'Juan', needs: ['shoes 32', 'socks S', 't-shirt S', 'shoes 36'], location: 'Luro 4000' },
      { id: 19, name: 'Magdalena', needs: ['shirt L', 'shirt M'], location: 'Independencia 4000' },
      { id: 20, name: 'Enzo', needs: ['jumper XL', 'shirt XL'], location: 'Bolivar 4000' }
    ];
    const items = [
      { id: 11, name: 'Remera', size: 'M', quantity: 10, maxStock: 20 },
      { id: 12, name: 'Remera', size: 'S', quantity: 11, maxStock: 20 },
      { id: 13, name: 'Remera', size: 'L', quantity: 5, maxStock: 20 },
      { id: 14, name: 'Remera', size: 'XL', quantity: 3, maxStock: 20 },
      { id: 15, name: 'Pantalon', size: '32', quantity: 1, maxStock: 20 },
      { id: 16, name: 'Pantalon', size: '38', quantity: 1, maxStock: 20 },
      { id: 17, name: 'Pantalon', size: '40', quantity: 1, maxStock: 20 },
      { id: 18, name: 'Pantalon', size: '46', quantity: 1, maxStock: 20 },
      { id: 19, name: 'Pantalon', size: '42', quantity: 1, maxStock: 20 },
      { id: 20, name: 'Zapatillas', size: '36', quantity: 1, maxStock: 20 },
      { id: 21, name: 'Zapatillas', size: '40', quantity: 1, maxStock: 20 },
    ]
    return {heroes, items};
  }
}
