// Hash Table
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
// Operation : set, has, get, set , delete , clear

let contacts = new Map()
contacts.set('Jessie', { phone: "213-555-1234", address: "123 N 1st Ave" })
contacts.has('Jessie') // true
contacts.get('Hilary') // undefined
contacts.set('Hilary', { phone: "617-555-4321", address: "321 S 2nd St" })
contacts.get('Jessie') // {phone: "213-555-1234", address: "123 N 1st Ave"}
// contacts.delete('Raymond') // false
// contacts.delete('Jessie') // true
// console.log(contacts.size) // 1
// console.log('fwef')
// console.log(contacts.entries())
// console.log(contacts) // 1
// console.log(contacts.get('Hilary'))
// console.log(contacts.clear())
// console.log(contacts.get('Hilary'))

// contacts.forEach((key, value) => {
//     console.log(key + 'gergerg' + value)
// })


// for (let [key, value] of contacts.entries()) {
//     console.log(key + ' = ' + value)
// }


for (let key of contacts.keys()) {
    console.log(key)
}
// 0
// 1 

for (let value of contacts.values()) {
    console.log(value)
}


