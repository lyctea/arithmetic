// let set = new Set(),
//     key1 = {},
// key2 = {};
// set.add(key1);
// set.add(key2);
// console.log(set.size);

// let set = new Set([1, 2]);
// set.forEach(function(value, key, ownerSet) {
//     console.log(key + " " + value);
//     console.log(ownerSet === set);
// });


let map = new Map(),
    key1 = {},
    key2 = {};
map.set(key1, 5);
map.set(key2, 42);
console.log(map.get(key1));
console.log(map.get(key2));
console.log(map)

/**
 * Set 是无重复值的有序列表。
 * Weak Set 是只能包含对象的特殊 Set 
 * Map 是有序的键值对，其中的键允许是任何类型。
 * Weak Map 是只能包含对象类型的键的特殊 Map 
 */