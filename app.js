const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')
const passport = require('passport')
const flash = require('connect-flash')
const session = require('express-session')
const io = require('socket.io')(server)

const app = express() 

require('./config/passport')(passport)

const db = require('./config/keys').mongoURI 

mongoose.connect(
    db, {useNewUrlParser: true}

    ).then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err))


app.use(expressLayouts)
app.set('view engine', 'ejs')

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

app.use('/', require('./routes/index.js')) 
app.use('/users', require('./routes/users.js'))



const rooms = { }

app.get('/', (req,res) =>{
    res.render('chat', {rooms:rooms})
})

app.post('/room', (req,res) =>{
    if(rooms[req.body.room] != null) {
        return res.redirect('/')
    }
    rooms[req.body.room] = {users: {} }
    res.redirect(req.body.room)
    io.emit('room-created', req.body.room)
})

app.get('/:room', (req,res) =>{
    if(rooms[req.params.room] == null) {
        return res.redirect('/')
    }

    res.render('room', {roomName: req.params.room})
})

io.on('connection', socket => {
    socket.on('new-user', (room, name) => {
    socket.join(room)
    rooms[room].users[socket.id] = name 
    socket.to(room).broadcast.emit('user-connected', name)
    }) 
    socket.on('send-chat-message', (room,message) =>{
        socket.to(room).broadcast.emit('chat-message', {message: message, name:rooms[room].users[socket.id] })
    })
    socket.on('disconnect', () => {
        getUserRooms(socket).forEach(room => {
            socket.to(room).broadcast.emit('user-disconnected', rooms[room].users[socket.id])
            delete rooms[room].users[socket.id]
        })
    })
    })

    function getUserRooms(socket){
        return Object.entries(rooms).reduce((names, [name,room] ) => {
            if(room.users[socket.id] != null) names.push(name)
            return names
        }, [])
    }








const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));