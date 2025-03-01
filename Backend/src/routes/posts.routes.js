const express = require('express');
const router = express.Router();
const userMiddleware = require("../middlewares/user.middleware")
const multer = require('multer');
const imageKit = require("../services/imagekit.service")
const upload = multer({ storage: multer.memoryStorage() })
const { Readable } = require("stream")
const mongoose = require('mongoose');
const postController = require("../controllers/post.controller")


router.post('/create',
    userMiddleware.authUser,
    upload.single('media'),
    async (req, res, next) => {
        const file = await imageKit.upload({
            file: Readable.from(req.file.buffer),
            fileName: new mongoose.Types.ObjectId().toString(),
            isPublished: true,
            isPrivateFile: false
        })
        req.body.image = file /* 
        {
        id: '5f7b1b7b7f7b1f7b1',
        url: 'https://ik.imagekit.io/your_image
        thumbnail: 'https://ik.imagekit.io/your_thumbnail'  
        }
         */
        next()
    },
    postController.createPost
)


module.exports = router;    