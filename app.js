// const data = require('./data.json');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static(__dirname))
app.set('view engine', 'pug')

var fs = require('fs'); /* Put it where other modules included */
var data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

const {projects, skills} = data;


app.get('/', (req,res)=>{
    res.render('index', {projects: data.projects})
})

app.get('/project/:i', (req,res)=>{
    const project  = projects[req.param("i")]
    res.render('project', {project})
})

app.get('/about', (req,res)=>{
    res.render('about', {skills})
})

app.listen(3000, ()=>{
    console.log('Server has started at 3000. Pug is used in this server render.')
})