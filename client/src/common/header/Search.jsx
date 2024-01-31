import React from "react"
import logo from "../../components/assets/images/logo.svg"
import images from "../../components/assets/images/logoo.png"
import { Link } from "react-router-dom"

const Search = ({ CartItem }) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
            <img src={images} alt='' />
          </div>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input style={{ direction: 'rtl' }} type='text' placeholder='بحث...' />
            <span>كل الفئات</span>
          </div>

          <div className='icon f_flex width'>
          <Link to='/account'>
            <i className='fa fa-user icon-circle'></i>
            </Link>
            <div className='cart'>
              <Link to='/sub'>
                <i className='fa fa-plus icon-circle'></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search
