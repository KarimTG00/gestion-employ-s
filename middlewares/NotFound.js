

function NotFound(req, res, next){
    return next(new Error(` Une erreur 404: Not Found`))
}

module.exports = NotFound 