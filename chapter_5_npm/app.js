const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');


// Gvjt90pfrGIoOVdF
// mongodb+srv://netninja:<password>@cluster0.maqegew.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

// connect to mongo db
const dbURI = 'mongodb+srv://netninja:test1234@cluster0.maqegew.mongodb.net/nodetuts?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true}).then((result) => app.listen(3000, () => {console.log("express app started")})).catch((err) => console.log(err))


// express app
const app = express();


// express app
app.set('view engine', 'ejs');


// middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'));


// mongoose and mongo sandbox routes
// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: "new blog",
//         snippet: "about my new blog",
//         body: "more about my new blog"
//     });

//     blog.save().then((result) => {
//         res.send(result)
//     }).catch((err) => {
//         console.log(err)
//     });
// })


// app.get('/all-blogs', (req, res) => {
//     Blog.find().then((result) => {
//         res.send(result);
//     }).catch((err) => {
//         console.log(err);
//     });
// })


// app.get('/single-blog', (req, res) => {
//     Blog.findById('6677bd22668330564ec4e691').then((result) => {
//         res.send(result);
//     }).catch((err) => {
//         console.log(err);
//     })
// })


app.use((req, res, next) => {
    console.log('new request made !');
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method: ', req.method);
    next();
})

 
app.get('/', (req, res) => {
    // res.send('<h1> hello express.js </p>')
    // res.sendFile('views/index.html', {root: __dirname})
    res.redirect('/blogs');
})


app.get('/blogs', (req, res) => {
    Blog.find().sort({createdAt: -1 }).then((result) => {
        res.render('index', { title: "All blogs", blogs: result});
    }).catch((err) => {
        console.log(err)
    });
})


app.get('/about/', (req, res) => {
    // res.sendFile('views/about.html', {root: __dirname})
    res.render('about', {title: 'About'})
})


app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Create Blog'})
})


// redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about', {title: 'Not Found'});
})


// 404 page
app.use((req, res) => {
    res.status   (404).sendFile('views/404  .html', {root: __dirname})
})