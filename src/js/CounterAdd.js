import expect from "expect"

const addCounter = (list) => {
  return [...list, 0];
};

const removeCounter = (list,index) => {
  return [
    ...list.slice(0, index),
    ...list.slice(index + 1)
  ];
}

const incrementingCounter = (list, index) => {
  return [
    ...kist.slice(0, inde),
    list[index] + 1,
    ...list.slice(index + 1)
  ];
}

const testAddCounter = () => {
  const listBefore = [];
  const listAfter = [0];

  deepFreeze(listBefore);

  expect(
    addCounter(listBefore)
  ).toEqual(listAfter);
};

testAddCounter();
console.log('All tests passed.');
