const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')
const passport = require('passport')
const flash = require('connect-flash')
const session = require('express-session')
const app = express() 
var http = require("http").Server(app); 
var io = require("socket.io")(http); 
var Posts = require('./schema/posts'); 
var Comments = require('./schema/comments'); 
const methodOverride = require ('method-override')


const postsRouter = require('./routes/posts')
const notesRouter = require('./routes/notes')


var port = process.env.port || 3000; 

require('./config/passport')(passport)

const db = require('./config/keys').mongoURI 

mongoose.connect(
    db, {useNewUrlParser: true}

    ).then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err))


app.use(express.static('public'))
app.use(expressLayouts)
app.set('view engine', 'ejs')

app.use(methodOverride('_method'))
app.use(express.urlencoded({extended:true}))

app.use(session({
    secret: 'secret', 
    resave: true,
    saveUninitialized: true  
})
)

app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

app.use(function(req,res, next){
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')
    res.locals.error = req.flash('error')
    next()
})

//login and historical results routes

app.use('/', require('./routes/login.js')) 
app.use('/users', require('./routes/users.js'))




app.use('/posts', postsRouter)

app.use('/notes', notesRouter)


app.use('/pie', function(req,res){
    res.sendFile(__dirname + 'pie.html')
})

app.use('/arrays', function(req,res){
    res.sendFile(__dirname + 'arrays.html')
})

app.use('/functions', function(req,res){
    res.sendFile(__dirname + 'functions.html')
})


app.use('/variables', function(req,res){
    res.sendFile(__dirname + 'variables.html')
})


app.use('/quiz', function(req,res){
    res.sendFile(__dirname + 'quiz.html')
})


app.use('/functionsquiz', function(req,res){
    res.sendFile(__dirname + 'functionsquiz.html')
})

app.use('/variablesquiz', function(req,res){
    res.sendFile(__dirname + 'variablesquiz.html')
})

app.use('/arraysquiz', function(req,res){
    res.sendFile(__dirname + 'arraysquiz.html')
})


app.use('/end', function(req,res){
    res.sendFile(__dirname + 'end.html')
})


app.use('/highscores', function(req,res){
    res.sendFile(__dirname + 'highscores.html')
})




//Comments routes

app.get('/posts', function (req, res){
    Posts.find({}, function(err,posts){
        if (err){
            console.log(err);
        } else {
            res.render('index', {posts:posts})
        }
    })
})

app.get('/posts/detail/:id', function(req,res){
    Posts.findById(req.params.id, function (err, postDetail){
        if(err){
            console.log(err)
        }else{
            Comments.find({'postId': req.params.id}, function (err,comments){
                res.render('post-detail', {postDetail: postDetail, comments: comments, postId:req.params.id})
            })
        }
    })
})

mongoose.Promise = global.Promise; 
mongoose.connect('mongodb://localhost/posts')
.then(() => console.log('connection succesful'))
.catch((err) => console.error(err))

io.on('connection', function(socket){
    socket.on('comment', function(data){
        var commentData = new Comments(data);
        commentData.save(); 
        socket.broadcast.emit('comment', data)
    })
})

http.listen(port, function(){
    console.log("Server running at port" + port)
})



//notes









const PORT = process.env.PORT || 5000;



app.listen(PORT, console.log(`Server started on port ${PORT}`));