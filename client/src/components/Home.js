import React from 'react'
import Search from './Search';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NoteCard from './NoteCard';
export default function Home(props) {
    function getUserData() {
        props.getUserData()
    }
    useEffect(() => {
        getUserData()
    }, [])
    return (
        <div className='home'>
            <div className='container-sm d-flex flex-lg-row flex-column justify-content-center justify-content-md-evenly align-items-center flex-lg-row-reverse my-5 my-lg-3'>

                <Search handleSearch={props.handleSearch}></Search>
                {console.log("hi")}
                <div className='heading'>
                    <p className='fw-lg-bold fw-bold fs-3'>All note</p>
                    <p className='px-3'>{`${props.data.length} notes`}</p>
                </div>
                <div className='btndiv text-center '>
                    <Link to={'/create'}><button className='btn create btn-primary' >CREATE</button></Link>
                </div>
            </div>
            <div className="container-fluid d-flex justify-content-center align-item-center flex-wrap mb-5 ">

                {props.data.map((data, index) => {

                    return <NoteCard date={data.date} heading={data.heading} userNotes={data.notes} index={index} delete={props.handleDelete} key={data._id} _id={data._id}></NoteCard>
                })
                }

            </div>
        </div>
    )
}
