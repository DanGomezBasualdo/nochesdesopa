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
    return {heroes};
  }
}
