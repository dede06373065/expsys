const {createLogger,format,transports}=require('winston')
const logger=createLogger({
    level:process.env.NODE_ENV==='production'?'info':'debug',
    format:format.combine(
        format.colorize(),
        format.label({label:Path2D.basename(module.parent.filename)}),
        format.printf(
            `${info.timestamp}[${info.label}][${info.level}]:"${info.message}`
        )
    ),
    transports:[new transports.Console()]
})

module.exports=logger