{
  // const createArray = (T: string): string[] => {
  //     return [T];
  // }

  // Generic Array

  const createArray = <T>(user: T): T[] => {
    return [user];
  };

  const res = createArray<number>(8);

  interface User {
    name: string;
    id: number;
  }
  const resObj = createArray<User>({
    name: "Rakib",
    id: 8,
  });

  const createTuple = <T, U>(user: T, userOne: U): [T, U] => {
    return [user, userOne];
  };

  const resTuple = createTuple<string, number>("Rakib", 8);
  const resTuple1 = createTuple<string, { name: string }>("Rakib", {
    name: "Hasan",
  });

  const addStd = <T>(std: T) => {
    const course = "Level Two";
    return {
      ...std,
      course,
    };
  };

  interface stdDetails {
    name: string;
    email: string;
    devLvl: string;
    skill?: string;
  }

  const rakib = addStd<stdDetails>({
    name: "Rakib",
    email: "rakib@gmail.com",
    devLvl: "Jr",
  });

  const hasan = addStd<stdDetails>({
    name: "Hasan",
    email: "hasan@gmail.com",
    devLvl: "Sr",
    skill: "DSA",
  });
}
