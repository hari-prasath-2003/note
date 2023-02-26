
import './App.css';
import Appbar from './components/Appbar';
import Home from './components/Home';
import EditPage from './components/EditPage';
import CreatePage from './components/CreatePage';
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/Login';
const url = '192.168.98.213'
function App() {
  const [data, setData] = useState([]);

  async function getUserData() {
    const name = sessionStorage.getItem("name")
    fetch("http://" + url + ":4000/home/" + name).then((promiseData) => {
      return promiseData.json()
    }).then((data) => {
      setData(data)
      console.log(data, "data");
    })
  }

  function handleDelete(id) {
    fetch("http://" + url + ":4000/home/delete/" + id)
    let newDataArry = [...data]
    console.log(newDataArry);
    newDataArry = newDataArry.filter((newdata) => {
      console.log(newdata._id !== id);
      return newdata._id !== id
    })
    setData(newDataArry)
  }
  function handleSearch(searchValue) {
    const searchData = data.filter((dataElement) => {
      return dataElement.heading.toLowerCase().includes(searchValue.toLowerCase())
    })

    if (searchValue.length === 0) {
      getUserData()
    }
    setData(searchData)
  }
  function updateData() {
    getUserData()
  }

  return (
    <Router>
      <div className="App">
        <Appbar></Appbar>
        <Switch>
          <Route exact path="/">
            {/* <Home data={data} handleDelete={handleDelete} handleSearch={handleSearch}></Home> */}
            <Login></Login>
          </Route>
          <Route path="/home">
            <Home data={data} handleDelete={handleDelete} handleSearch={handleSearch} getUserData={getUserData}></Home>
          </Route>
          <Route path="/edit/:id">
            <EditPage updateData={updateData}></EditPage>
          </Route>
          <Route path="/create">
            <CreatePage updateData={updateData}></CreatePage>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
