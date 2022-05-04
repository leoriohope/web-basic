const fs = require('fs')

// fs.readFile('./1-初体验.html', (err, data)=>{
//     if (err) throw err
//     console.log(data.toString())
// })

// Promise version

let p = new Promise((resolve, reject) => {
        resolve('success')
    })

console.log(p)




