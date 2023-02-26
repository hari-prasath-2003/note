
import { Link, useParams, useHistory } from 'react-router-dom';
import { useRef } from 'react'
const url = 'localhost'
export default function CreatePage(props) {
  const heading = useRef()
  const notes = useRef()
  const history = useHistory()
  function sendData() {
    const userName = sessionStorage.getItem("name")
    fetch("http://" + url + ":4000/home/insertData", { method: "post", body: JSON.stringify({ heading: heading.current.value, notes: notes.current.value, name: userName }), headers: { 'Content-Type': 'application/json' } }).then(() => {
      props.updateData()
      history.push("/home")
    })

  }
  return (
    <div>
      <div className='container-sm my-5' >
        <button className='btn btn-primary' onClick={() => {
          sendData()
        }}>SAVE</button>

        <textarea name="heading" id="" ref={heading} style={{ minWidth: '100%', minHeight: '50px', marginTop: '30px' }} maxLength={50} className='edit' placeholder='Heading'></textarea>
        <textarea name="body" id="" ref={notes} style={{ minWidth: '100%', minHeight: '60vh' }} className='edit' placeholder='Type your text here'></textarea>
        {console.log("hi")}
      </div>
    </div>
  )
}
