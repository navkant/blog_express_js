const fs = require('fs');

// reading files 
fs.readFile('docs/blog1.txt', (error, data) => {
    if (error) {
        console.log(error);
    }
    console.log(data.toString());

})

console.log("hello there goodman")


// writing files
fs.writeFile('docs/blog1.txt', 'hello world', () => {
    console.log('file was written')
})

// fs.writeFile('docs/blog2.txt', 'hello world there from node.', () => {
//     console.log('file was written')
// })


// directories

if (!fs.existsSync('docs/assets')) {
    fs.mkdir('docs/assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder created !')
    })
} else {
    fs.rmdir('docs/assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log("folder deleted !")
    })
}


// deleting files

if (fs.existsSync('docs/blog2.txt')) {
    fs.unlink('docs/blog2.txt', (err) => {
        console.log(err)
    })
    console.log('file deleted')
}