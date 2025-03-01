const postModel = require('../models/post.model')


module.exports.createPost = async (req, res) => {

    // res.send({ data: req.body, user: req.user })

    const post = await postModel.create({
        media: {
            id: req.body.image.fileId,
            url: req.body.image.url,
            thumbnail: req.body.image.thumbnailUrl
        },
        caption: req.body.caption,
        author: req.user._id
    })

    res.send({ data: post })

}