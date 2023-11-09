{
  // Conditional type
  type aOne = number;
  type bOne = undefined;

  type X = aOne extends null ? true : false;

  type RichPeople = {
    bike: string;
    car: string;
    ship: string;
  };

  type CheckVehicle<T> = T extends keyof RichPeople ? true : false;

  type HasBike = CheckVehicle<"bike">;
}
