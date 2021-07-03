import { Car } from "./models/Car";
//Query, Mutation
export const resolvers = {
  Query: {
    cars: () => Car.find(), //mongodb command
  },
  Mutation: {
    createCar: async (_, { name, model, company }) => {
      const car = new Car({ name, model, company });
      await car.save();
      return car;
    },
  },
};
