import { USERS_REPOSITORY } from 'src/configuration';
import { User } from './entity/users.entity';

export const usersProviders = [
  {
    provide: USERS_REPOSITORY,
    useValue: User,
  },
];
