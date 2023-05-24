// export function CategoryReducer(state: any, action: any) {
//   if (typeof state === 'undefined') {
//     return [];
//   } else if (action.type == 'ADD') {
//     return [...state, action.payload];
//   } else if (action.type == 'DELETE') {
//     let newst = [...state];
//     console.log(action.payload.id);

//     newst = newst.filter(item => item.id != action.payload.id);
//     return [...newst];
//   } else {
//     return state;
//   }
// }
