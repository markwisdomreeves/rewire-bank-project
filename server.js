require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')


// Routes
const authRouter = require("./routes/authRouter")
const userRouter = require("./routes/userRouter")
const blogRouter = require("./routes/blogRouter")
const contactRouter = require("./routes/contactRouter")


const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

// Middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors());


// Midlleware setups
app.use('/api', authRouter);
app.use('/api', userRouter);
app.use('/api', blogRouter);
app.use('/api', contactRouter);
app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
      return res.status(403).send({
        success: false,
        message: 'No token provided.'
      });
    }
});


if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*', (req, res)=>{
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}


app.get('*', (req, res) => {
    res.send('API is running... -- use - (api/blogs)')
})



// Connect to mongodb
const URI = process.env.MONGODB_URL
mongoose.connect(URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if(err) throw err;
    console.log("Connected to mongodb")
})


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log('API is running on port', PORT)
})
