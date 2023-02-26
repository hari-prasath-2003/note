
import { useParams } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import { Link, useHistory } from 'react-router-dom'
const url = 'localhost'
export default function EditPage(props) {
  const history = useHistory();
  const [data, setData] = useState([])
  const { id } = useParams()
  const heading = useRef()
  const notes = useRef()
  console.log(id);
  async function getUserData() {
    fetch("http://" + url + ":4000/home/hari/" + id).then((promiseData) => {
      return promiseData.json()
    }).then((data) => {
      console.log(data);
      setData(data)
    })
  }
  useEffect(() => {
    getUserData()
  }, [])
  function sendData() {
    fetch("http://" + url + ":4000/home/updateData", { method: "post", body: JSON.stringify({ heading: heading.current.value, notes: notes.current.value, id: data._id }), headers: { 'Content-Type': 'application/json' } }).then(() => {
      props.updateData()
      history.push("/home")

    })
  }
  return (
    <div>
      <div className='container-sm my-5' >
        <button className='btn btn-primary' onClick={sendData}>SAVE</button>

        <textarea name="heading" id="" ref={heading} style={{ minWidth: '100%', minHeight: '50px', marginTop: '30px' }} className='edit' defaultValue={data.heading}></textarea>
        <textarea name="body" id="" ref={notes} style={{ minWidth: '100%', minHeight: '60vh' }} className='edit ' defaultValue={data.notes}></textarea>
      </div>
    </div>
  )
}
