
function errorHandler(err, req, res, next){
    console.log('on est rentrer dans errorHandler')
    err.status = 404
    res.status(err.status).json({
        message : err.message,
        status : err.status
    })
}

module.exports = errorHandler