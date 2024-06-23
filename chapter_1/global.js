console.log(global)

setTimeout(() => {
    console.log('in the timeout')
    clearInterval(time_interval);
}, 2000);

const time_interval = setInterval(() => {
    console.log('in the interval !!')
}, 1000);


console.log(__dirname);
console.log(__filename);