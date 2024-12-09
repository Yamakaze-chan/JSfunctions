const filterObject = (obj, filter, filterValue) => 
   Object.keys(obj).reduce((acc, val) => 
   (!obj[val][filter].includes(filterValue) ? acc : {
       ...acc,
       [val]: obj[val]
   }                                        
), {});

// EXAMPLES
// const developers = {
//   1: {
//    id: 1,
//    name: "Brendan", 
//    family: "Eich"
//   },
//   2: {
//    id: 2,
//    name: "John", 
//    family: "Resig"
//   },  
//   3: {
//    id: 3,
//    name: "Alireza", 
//    family: "Dezfoolian"
//  }
// };

// => Call function: filterObject(developers, "name", "Alir");

// => In return:
// {
//   3: {
//    id: 3,
//    name: "Alireza", 
//    family: "Dezfoolian"
//  }
// }
