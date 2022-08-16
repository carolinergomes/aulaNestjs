import { DataSource } from 'typeorm';
import { CreateCatDto } from './cats/dto/cats.dto';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'nestjs',
        entities: [CreateCatDto],
        synchronize: true,
        logging: true,
      });

      return dataSource.initialize();
    },
  },
]