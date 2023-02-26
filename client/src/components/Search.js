import React from 'react'

export default function Search(props) {
  return (
    <div className='py-lg-5 py-2 '>
    <div className='Search '>
        <input type="text" placeholder='Search your notes' onChange={(e)=>{
          // console.log(e.target.value)
          props.handleSearch(e.target.value)
        }} className='search'/>
        <img src={require("../assert/search.png")} className="search-icon" alt="" />
    </div>

    </div>
  )
}
