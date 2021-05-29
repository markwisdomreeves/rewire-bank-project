
const router = require("express").Router();
const blogCtrl = require("../controllers/blogCtrl");


router.route('/blogs')
    .get(blogCtrl.getBlogs)
    .post(blogCtrl.createBlog)

router.route('/blogs/id')
    .get(blogCtrl.getBlog)
    .put(blogCtrl.updateBlog)
    .delete(blogCtrl.deleteBlog)


module.exports = router;
