{
  // Generic constraint with keyof operator

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  // type Owner = keyof Vehicle;
  // const person  : Owner = "car"

  const getValue = <T, U extends keyof T>(obj: T, key: U) => {
    return obj[key];
  };

  const user = {
    name: "Rakib",
    age: 24,
    address: "Dhaka",
  };

  const res = getValue(user, "name");
  console.log(res);
}
