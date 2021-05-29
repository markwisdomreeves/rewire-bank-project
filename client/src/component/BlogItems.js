
import React from 'react'
import { Link } from "react-router-dom";


const BlogItems = ({blog}) => {

  function truncate(str) {
    return str.length > 100 ? str.substring(0, 80) + "..." : str;
  }

  return (
    <div className="main-blog-items-content-container">
      <Link to={`blog/${blog._id}`}>
        <div className="blog-items-content-box">
          <img src={blog.image} alt="" />
          <div className="user-info-box">
            <span>
              <i className="fa fa-user" aria-hidden="true"></i>
              {blog.user}
            </span>
            <span>
            <i className="fa fa-calendar" aria-hidden="true"></i>
              {new Date(blog.createdAt).toLocaleDateString()}
            </span>
          </div>
          <h4>
            {blog.title}
          </h4>
          <p style={{overflow: 'hidden', textOverflow: 'ellipsis'}}>{truncate(blog.description)}</p>
          <Link to={`blog/${blog._id}`}>Read More</Link>
        </div>

      </Link>

    </div>
  )
}


export default BlogItems
