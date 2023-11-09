{
  const promise = new Promise<string>((resolve, reject) => {
    const data: string = "Rakib";
    if (data) {
      resolve(data);
    } else {
      reject("Something went wrong");
    }
  });

  const showData = async () => {
    const data = await promise;
    return data;
  };
}
