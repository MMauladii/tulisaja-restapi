const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

router.get('/', async(req, res) => {
    try {
        const post = await Post.find()
        res.json(post)
    }catch (error) {
        res.json({
            message: error
        })
    }
})
//tambah
router.post('/', async (req, res) => {
    const inputPost = new Post({
        content: req.body.content,
        user_id: req.body.user_id,
        username: req.body.username
    })

    try {
        const post = await inputPost.save()
        res.json(post) 
    } catch (error) {
    res.json({
        message: error
    })
   }
})
//update
router.put('/postId', async (req, res) => {
    const data = {
        content: req.body.content,
    }
    try {
        const post = await Post.updateOne({
            _id: req.params.postId
        }, data)
    } catch (erorr) {
        res.json({
            message: erorr
        })
    }
})

router.delete('/:postId', async (req, res) => {
    try{
        const post = await Post.deleteOne({
            _id: req.params.postId
        })
        res.json(post)
    } catch (erorr) {
        res.json({
            message: erorr
        })
    }
})

module.exports = router