const express = require('express')
const exphbs = require('express-handlebars')
const homeController = require('./controllers/homeController')
const app = express()

app.engine('.hbs', exphbs.engine({extname: 'hbs'}));
app.set('view engine', '.hbs');
app.use(express.urlencoded({extended: false}))
app.use(homeController)
app.listen(3000, () => {
    console.log('Server started on port 3000');
});