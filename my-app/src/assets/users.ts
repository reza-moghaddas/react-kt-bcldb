// ESM
import { faker } from '@faker-js/faker';

interface User {
    userId: string,
    username: string,
    email: string,    
    password: string,
    birthdate: Date,
    registeredAt: Date

}

export function createRandomUser(): User {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),    
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

export const Users: User[] = faker.helpers.multiple(createRandomUser, {
  count: 50,
});