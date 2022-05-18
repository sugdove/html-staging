let arr = [
  { id: 1, name: '部门1', pid: 0 },
  { id: 6, name: '部门6', pid: 0 },
  { id: 2, name: '部门2', pid: 1 },
  { id: 3, name: '部门3', pid: 1 },
  { id: 4, name: '部门4', pid: 3 },
  { id: 5, name: '部门5', pid: 4 },
]
// [
//   {
//     id: 1,
//     name: '部门1',
//     pid: 0,
//     children: [
//       {
//         id: 2,
//         name: '部门2',
//         pid: 1,
//         children: [],
//       },
//       {
//         id: 3,
//         name: '部门3',
//         pid: 1,
//         children: [
//           // 结果 ,,,
//         ],
//       },
//     ],
//   }
// ]
function toTree(arr, result, pid) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].pid === pid) {
      const newObj = { ...arr[i], children: [] }
      result.push(newObj)
      toTree(arr, newObj.children, arr[i].id)
    }
  }
}
let result = []
toTree(arr, result, 0)
console.log(JSON.stringify(result))
