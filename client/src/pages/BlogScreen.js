import React, { useEffect, useRef, useContext } from 'react'
import { GlobalState } from "../GlobalState"
import { Link } from 'react-router-dom'
import BlogItems from '../component/BlogItems'
import Footer from '../component/Footer'
import OpenNewBankAccount from '../component/OpenNewBankAccount'


function BlogScreen () {
  const state = useContext(GlobalState)
  const [blogs] = state.blogsAPI.blogs

  const globalRef = useRef(null)
  const globalScroll = () => globalRef.current.scrollIntoView(0)

  useEffect(() => {
    globalScroll();
  }, [])


  return (
    <>
      <div id="global-top-image-container" ref={globalRef}>
        <section className="global-top-section-container">
          <div className="container global-top-text-container text-white">
            <h1 className="global-h1-text">Blog</h1>
              <div className="global-header-title-container">
                <Link to="/">
                  <i className="fa fa-home"></i>
                  Home
                </Link>
                <span>
                  <i className="fa fa-angle-right"></i>
                  Blog
                </span>
              </div>
          </div>
        </section>
      </div>

      <section id="blogscreen-container" className="blog-box-container">
        {
          blogs.map(blog => {
            return (
              <div key={blog._id} id="main-blog-items-box">
                <BlogItems key={blog._id} blog={blog} />
              </div>
            )
          })
        }
      </section>


      <OpenNewBankAccount />
      <Footer />
    </>
  )
}


export default BlogScreen
