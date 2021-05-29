import {useState, useEffect} from 'react'
import axios from 'axios'
import { REACT_BACKEND_API } from "../config/config"


function BlogsApI() {
    const [blogs, setBlogs] = useState([])
    const [callback, setCallback] = useState(false)
    const [search, setSearch] = useState('')
    const [result, setResult] = useState(0)
    const [sort, setSort] = useState('')
    const [page, setPage] = useState(1)


  useEffect(() =>{
    const getBlogs = async () => {
      const res = await axios.get(`${REACT_BACKEND_API}/api/blogs?limit=${page*6}&${sort}&title[regex]=${search}`)
      setBlogs(res.data.blogs)
      setResult(res.data.result)
    }
    getBlogs()
  },[callback, sort, page, search])

  return {
    blogs: [blogs, setBlogs],
    callback: [callback, setCallback],
    search: [search, setSearch],
    result: [result, setResult],
    sort: [sort, setSort],
    page: [page, setPage]
  }
}


export default BlogsApI

