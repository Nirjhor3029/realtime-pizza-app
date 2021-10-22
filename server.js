/**
 * Create Server 
 * date: 21-10-2021
 * 
*/

// Dependencies
const express = require('express');
const app = express();
const ejs = require('ejs');
const expressLayout = require('express-ejs-layouts');
const path = require('path');

// variables
const PORT = process.env.PORT || 3300;
const pathOfViews = path.join(__dirname,'/resources/views');

// Routes
app.get('/',(req,res)=>{
    // res.send("<h1>Hello from Server</h1>");
    res.render('home');
})

// set template engine
app.use(expressLayout);

// Set/change default values of predefined (default ex: root/views  But our dir is ex: root/resources/views)
app.set('views',pathOfViews);
app.set('view engine',"ejs");

// Server listen
app.listen(PORT,()=>{
    console.log(`Listening on port: ${PORT} :\n path is: ${pathOfViews}`);
    console.log(app.get('views'));
})