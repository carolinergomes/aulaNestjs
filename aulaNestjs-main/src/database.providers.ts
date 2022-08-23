import { DataSource } from 'typeorm';
import { CatDto } from './cats/dto/cats.dto';
import { Cat } from './cats/entity/create.cat';
import { Dog } from './dogs/entity/create.dog'

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'animals',
        // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        entities: [Cat, Dog],
        synchronize: true,
        logging: true,
      });

      return dataSource.initialize();
    },
  },
];