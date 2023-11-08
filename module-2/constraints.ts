{
  // Constraints

  //   interface stdDetails {
  //     name: string;
  //     email: string;
  //     devLvl: string;
  //     skill?: string;
  //   }

  const addStd = <
    T extends {
      id: number;
      name: string;
      email: string;
      devLvl: string;
      skill?: string;
    }
  >(
    std: T
  ) => {
    const course = "Level Two";
    return {
      ...std,
      course,
    };
  };

  const rakib = addStd({
    id: 3,
    name: "Rakib",
    email: "rakib@gmail.com",
    devLvl: "Jr",
  });

  const hasan = addStd({
    id: 8,
    name: "Hasan",
    email: "hasan@gmail.com",
    devLvl: "Sr",
    skill: "DSA",
  });
}
