'use strict';
//-----------------
module.exports = (req, res,) => {
    res.status(404).send({
        error: 404,
        message: '404/Not-Found'
    })
}