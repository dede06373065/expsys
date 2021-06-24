const swaggerJsDoc=require('swagger-jsdoc')
const option={
    definition:{
        openapi:'3.0.0',
        info:{
            title:'JR todo api',
            version:'1.0.0',
            contact:{
                name:'jjjj',
                email:'123@163.com'
            }
        }
    },
    apis:['./src/controllers/*.js']
}
module.exports=swaggerJsDoc(options)