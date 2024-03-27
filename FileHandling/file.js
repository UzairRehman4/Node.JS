const fs = require('fs')


//synchronous call
// fs.writeFileSync('./test.txt', 'Hello World')

//Asyn
// fs.writeFile('./test.txt', 'Hello World', (err) => { })
// const result = fs.readFileSync('./contacts.txt', "utf-8")
// console.log(result);

// fs.readFile("./contacts.txt", "utf-8", (err, result) =>{
//     if(err){
//         console.log("Error", err);
//     }
//     else{
//         console.log(result);
//     }
// })   new Date().getDate().toLocaleString()

// fs.appendFileSync("./test.txt", `${Date.now()} hey there\n`)

// fs.cpSync("./test.txt","./copy.txt")  this will copy the file

// fs.unlinkSync("./copy.txt")   this will delete the file

// console.log(fs.statSync("./test.txt").isFile())   this will display all file stats 


fs.mkdirSync("my-docs/a/b" ,{recursive: true})