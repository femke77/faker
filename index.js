import { faker } from '@faker-js/faker';
// change to type module in the package.json to use import statements


const USERS = [];

export function createRandomUser(){
  return {
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

Array.from({ length: 10 }).forEach(() => {
  USERS.push(createRandomUser());
});


console.log(USERS)


const CARS = [];

export function createRandomCar(){
  return {
    vehicle: faker.vehicle.vehicle(),
    year: faker.date.birthdate({min: 2000, max: 2022, mode: "year"}).getFullYear(),
    vin: faker.vehicle.vin(),
    color: faker.vehicle.color(),
    fueltype: faker.vehicle.fuel(),
    
  };
}

Array.from({ length: 20 }).forEach(() => {
  CARS.push(createRandomCar());
});


console.log(CARS)