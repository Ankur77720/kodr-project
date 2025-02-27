const postModel = require('../models/post.model')


module.exports.createPost = async (req, res) => {

    res.send({ data: req.body, user: req.user })

}