// Aqui se gestionan los errores

const response = require("./response");

function errors(err, req, res, next) {
    console.error("[Error]", err);

    const message = err.message || "error interno";
    const status = err.statusCode || 500;

    response.error(req, res, err, status)
}

module.exports = errors;