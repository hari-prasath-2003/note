import React from 'react'

export default function Appbar() {
  return (
    <div>
        <nav class="navbar" >
            <div class="container-fluid mx-2 justify-content-between gap-5">
                <h1 className='text-white p-0 m-0 fs-3'>Note It</h1>
                <img src={require("../assert/man.png")} className="mh-100 d-none d-md-block profile logo" alt="" />
                <img src={require("../assert/mobilenav.png")} className="mh-100  d-block d-md-none mobilenav"  alt="" />
            </div>
        </nav>
    </div>
  )
}

