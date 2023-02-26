const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static(__dirname))
app.set('view engine', 'pug')

// const names = [
//     'Joshua',
//     'Umar',
//     'Julia',
//     'Simran'
// ]

const projects = [
    {
        title: 'Trickle.app',
        description: 'Online learning platform',
        url: 'http://trickle.app',
        tags: ['Development'],
        contributions: '',
        notes: 'Lorem ipsum',
        img: '/public/img/skyline.jpg'
    },
    {
        title: 'THINC',
        description: 'Lawyer ',
        url: 'http://trickle.app',
        tags: ['Development'],
        contributions: '',
        notes: 'Lorem ipsum',
        img: '/public/img/glasses.jpg'
    }

]

app.get('/', (req,res)=>{
    res.render('index', {projects})
})

// app.get('/project', (req,res)=>{
//     // const project  = projects[req.params.id]
//     // res.render('project ', {project})
//     res.render('project ', {projects})
// })

app.get('/project/:i', (req,res)=>{
    const project  = projects[req.param("i")]
    res.render('project', {project})
})

app.get('/about', (req,res)=>{
    res.render('about')
})

// app.post('/', (req, res) => {
//     names.push(req.body.name)
//     res.render('index', { names });
//   });

app.listen(3000, ()=>{
    console.log('Server has started at 3000. Pug is used in this server render.')
})