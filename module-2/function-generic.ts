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
}
