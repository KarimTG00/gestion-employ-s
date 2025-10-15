
function errorHandler(err, req, res, next){
    err.status = 404
    res.status(err.status).json({
        message : err.message,
        status : err.status
    })
}

module.exports = errorHandler