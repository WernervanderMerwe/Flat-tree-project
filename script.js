'use strict';

const flatTree = [
  { id: 1, parentId: null },
  { id: 2, parentId: null },
  { id: 3, parentId: 2 },
  { id: 4, parentId: 2 },
  { id: 5, parentId: 4 },
  { id: 6, parentId: null },
  { id: 7, parentId: null },
  { id: 8, parentId: 7 },
  { id: 9, parentId: 5 },
  { id: 10, parentId: null },
  { id: 11, parentId: 6 },
  { id: 12, parentId: 9 },
  { id: 13, parentId: 5 },
  { id: 14, parentId: 1 },
  { id: 15, parentId: null },
  { id: 16, parentId: 15 },
  { id: 17, parentId: 16 },
  { id: 18, parentId: 17 },
  { id: 19, parentId: 18 },
  { id: 20, parentId: null },
  { id: 100, parentId: null },
  { id: 101, parentId: 100 },
  { id: 102, parentId: 101 },
  { id: 103, parentId: 102 },
  { id: 104, parentId: 103 },
  { id: 105, parentId: 104 },
  { id: 106, parentId: null },
  { id: 1000, parentId: null },
];

// selecting the parent element
const parentEl = document.querySelector('.parent');

flatTree.map((obj, _, arr) => {
  ////////////////////////
  // console.log(obj);
  // console.log(_);
  // console.log(arr);
  ////////////////////////

  obj.treeSpacing = 0;

  // if parentId value is falsey (null) the following ignores the obj iterator and leaves treespacing = 0
  if (obj.parentId) {
    // storing current parentId into variable to reference it with the findIndex function
    const parentId = obj.parentId;

    // finding the index of the parentId values that are truthy and saving it into a variable to add 1 to the treeSpacing value.
    const findIndex = arr.findIndex(obj => obj.id === parentId);
    // console.log(findIndex);
    obj.treeSpacing = arr[findIndex].treeSpacing + 1;
  }

  ////////////////////////

  // padding function
  // getting the last objects id: value.length
  const idLength = arr[arr.length - 1].id.toString().length;
  // Spacing the tree according to the highest id: value
  const objId = `${obj.id}`;
  const padding = objId.padStart(
    // if obj.treespacing === 0 spacing is idLength. otherwise spacing is idlenth + 1
    obj.treeSpacing ? obj.treeSpacing * (idLength + 1) + idLength : idLength,
    ' '
  );

  console.log(padding, padding.length);

  // HTML text that will be passed in to the DOM printing out the tree output
  const htmlText = `<pre margin="0px">${padding}</pre>`;

  parentEl.insertAdjacentHTML('beforeend', htmlText);

  return obj;
});

console.log(flatTree);

/*
/////////////////////////
Output:
1
2
  3
  4
    5
6
7
  8

*/
