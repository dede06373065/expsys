require('dotenv').config()
const express = require('express')
const helmet=require('helmet')
const swaggerUI=require('swagger-ui-express')
const cors=require('cors')
const router=require('./routes')
const morgan=require('morgan')
const swaggerDoc=require('./utils/swagger')
const logger=require('./utils/logger')
const app = express()
app.use(express.json())
//app.use(taskRouter)
app.use(helmet())
app.use(morgan(process.env.NODE_ENV==='production'?'common':'dev'))
app.use(cors())
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDoc))
const PORT=process.env.PORT||3000

app.use(router)
app.listen(PORT, (req, res) => {
   logger.info(`Success in port ${PORT}`)
    
})
