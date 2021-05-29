import React, { useEffect, useRef, useContext, useState } from 'react'
import { GlobalState } from "../GlobalState"
import { Link, useParams } from 'react-router-dom'
import Footer from '../component/Footer'
import OpenNewBankAccount from '../component/OpenNewBankAccount'


const BlogDetailScreen = () => {
    const params = useParams()
    const state = useContext(GlobalState)
    const [blogs] = state.blogsAPI.blogs
    const [search, setSearch] = state.blogsAPI.search
    const [blogDetail, setBlogDetail] = useState([])

    const handleSearch = event => {
      event.preventDefault()
      setSearch('')
    }

    useEffect(() => {
      if(params.id) {
        blogs.forEach(blog => {
          if(blog._id === params.id) return setBlogDetail(blog)
        })
      }
    }, [params.id, blogs])

    const globalRef = useRef(null)
    const globalScroll = () => globalRef.current.scrollIntoView(0)

    useEffect(() => {
      globalScroll()
    }, [])

    return (
      <>
        <div id="global-top-image-container" ref={globalRef}>
          <section className="global-top-section-container">
            <div className="container global-top-text-container text-white">
              <h1 className="global-h1-text">Blog Details</h1>
                <div className="global-header-title-container">
                  <Link to="/">
                    <i className="fa fa-home"></i>
                    Home
                  </Link>
                  <Link to="/blog">
                    <i className="fa fa-angle-right"></i>
                    Blog
                  </Link>
                  <span>
                    <i className="fa fa-angle-right"></i>
                    Blog Details
                  </span>
                </div>
            </div>
          </section>
        </div>

        <section id="blog-details-screen-container" className="blog-details-screen-box">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-8 col-xs-12">
                <img id="banner-img" src={blogDetail.image} alt="" />
                <article className="blog-details-aticle-container">
                  <div className="blog-details-banner-box">
                    <div className="blog-details-content-box">
                      <div className="blog-details-user-info-box">
                        <span>
                        <i className="fa fa-user" aria-hidden="true"></i>
                          {blogDetail.user}
                        </span>
                        <span>
                        <i className="fa fa-calendar" aria-hidden="true"></i>
                          {new Date(blogDetail.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <h4>{blogDetail.title}</h4>
                      <p>
                        {blogDetail.description}
                      </p>
                    </div>
                  </div>
                </article>
              </div>

              <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="left-side-blog-items right-side-blog-items">
                  <div className="left-side-blog-box">
                    <form onSubmit={handleSearch}>
                      <div className="blog-search-box">
                        <input
                          type="text"
                          name="search"
                          id="search"
                          value={search}
                          autoComplete="off"
                          placeholder="Search for Blogs"
                          onChange={e => setSearch(e.target.value.toLowerCase())}
                        />
                        <button type="submit">
                          <i className="fa fa-search"></i>
                        </button>
                      </div>
                    </form>
                  </div>

                  <div className="left-side-blog-box">
                    <div className="left-side-blog-post-box">
                      <h4>Recent Post</h4>
                      <div className="recent-blog-post-box">
                        {
                          blogs.map(blog => {
                            return (
                              <div className="single-recent-img-post-box" key={blog._id}>
                                <div className="recent-post-img-box">
                                  <Link to={blog._id}>
                                    <img src={blog.image} alt="" />
                                  </Link>
                                </div>
                                <div className="post-content">
                                  <Link to={blog._id}>
                                    <p style={{overflow: 'hidden', textOverflow: 'ellipsis'}}>
                                      {blog.title}
                                    </p>
                                  </Link>
                                  <span className="date-box">
                                    {new Date(blog.createdAt).toLocaleDateString()}
                                  </span>
                                </div>
                              </div>
                            )
                          })
                        }
                      </div>
                    </div>
                  </div>

                  {/* <div className="left-side-blog-box">
                    <div className="blog-details-categories-box">
                      <h4>Categories</h4>

                        <div className="main-category-box">
                          <div className="category-box">
                            <span>24</span>
                            <a href="###">Investment</a>
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                          </div>
                          <div className="category-box">
                            <span>05</span>
                            <a href="###">Payments</a>
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                          </div>
                          <div className="category-box">
                            <span>34</span>
                            <a href="###">Business</a>
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                          </div>
                          <div className="category-box">
                            <span>10</span>
                            <a href="###">Banking</a>
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                          </div>
                          <div className="category-box">
                            <span>11</span>
                            <a href="###">Deposit</a>
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                          </div>
                        </div>
                    </div>
                  </div>

                  <div className="left-side-blog-box">
                    <div className="left-side-blog-tags">
                      <div className="popular-tag-box popular-left-tags-box">
                        <h4>Popular Tags</h4>
                        <ul>
                          <li>
                            <a href="###">Investment</a>
                          </li>
                          <li>
                           <a href="###">Payments</a>
                          </li>
                          <li>
                           <a href="###">Business</a>
                          </li>
                          <li>
                           <a href="###">Banking</a>
                          </li>
                          <li>
                           <a href="###">Deposit</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div> */}


                </div>
              </div>

            </div>
          </div>
        </section>


        <OpenNewBankAccount />
        <Footer />
      </>
  )
}


export default BlogDetailScreen
