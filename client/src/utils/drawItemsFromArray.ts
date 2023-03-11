export const drawItemsFromArray = <T>(number: number, collection: T[]) => {
  const randomItems: T[] = [];
  for (let i = 0; i < number; i++) {
    const randomIndex = Math.floor(Math.random() * number);
    randomItems.push(collection[randomIndex]);
  } // todo uniques values
  return randomItems;
};
