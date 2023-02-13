// change to type module in the package.json to use import statements
import {writeFileSync} from 'fs'
import { faker } from '@faker-js/faker';

/* Note two examples of how to create fake data. Update the Array.from length to change the number
 of data objects. Update the variable names. Update the file name if desired. Copy the file to your
 seed folder.  See the usage section of fakerjs.com to see all the fake data options.
*/

const USERS = [];

function createRandomUser(){
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

function createRandomCar(){
  return {
    vehicle: faker.vehicle.vehicle(),
    year: faker.date.birthdate({min: 2000, max: 2022, mode: "year"}).getFullYear(),
    vin: faker.vehicle.vin(),
    color: faker.vehicle.color(),
    fueltype: faker.vehicle.fuel(),
    price: faker.commerce.price(3000, 35000),
    type: faker.vehicle.type()
    
  };
}

Array.from({ length: 20 }).forEach(() => {
  CARS.push(createRandomCar());
});


console.log(CARS)

writeFileSync("data.json", JSON.stringify(CARS, null, 2))