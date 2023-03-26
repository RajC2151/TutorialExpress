const express = require('express')
const app = express()
const port = 3001
const db = require('./models')
const postRouter=require('./routes/Posts')
app.use('/posts',postRouter)
db.sequelize.sync().then(()=>{
    app.listen(port,()=>{
        console.log(`Server running sucessfully ${port}`)
    })
})
