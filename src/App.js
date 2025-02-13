import logo from './logo.svg';
import './App.css';
import Profile from './Profile';
import Productlist from './Productlist';
import ShowUser from './ShowUser';
import CreateUser from './components/CreateUser';

function App() {
  return (
    <div>
      {/* <Profile/>
      <Productlist/> */}
      <ShowUser/>
      <CreateUser/>
    </div>
  );
}

export default App;
