
import './App.css';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';
import ShowUser from './components/ShowUser';
import ProductList from './ProductList';
import Profile from './Profile';
import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <div>
      <h1>User Management System</h1>
      <Routes>
        <Route path="/" element={<ShowUser/>}/>
        <Route path="/edit-user/:id" element={<EditUser/>}/>
        <Route path="/create-user" element={<CreateUser/>}/>
        <Route path="/show-user" element={<ShowUser/>}/>
       </Routes>
       </div>)}

export default App