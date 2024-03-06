const express = require('express');
const path = require("path");
const hbs = require('hbs')
const app = express();
const port = 3000;

/*
    const newPath = path.join(__dirname , '../public')
    app.use(express.static(newPath))                WITH THE HELP OF BUILT IN MIDDLEWARE STATIC WE CAN SHOW STATIC HTML FILE ON BROWSER
*/


// TEMPLATE ENGINE ROUTE
const newPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')


app.set('view engine', 'hbs')
app.set('views', newPath)
hbs.registerPartials(partialPath)


app.get('/', (req, res) => {
    res.render('index', {
        name: 'Home page'
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        name: req.query.name,
    });
})

app.get('*', (req, res) => {
    res.render('ErrorPage', {
        name: '404 Page'
    });
})

/*
 STATIC ROUTE
app.get('/', (req, res) => {
    res.send('working')
})
*/
app.listen(port, () => console.log(`server is running at port : ${port}`))