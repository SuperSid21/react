import './App.css';
import Login from './components/login';
import Profile from './components/Profile';
import Cart from './components/cart'
import Add from './components/add';

function App() {
  return (
    <div className="App">
        <Profile/>
        <Login/>
        <Cart/>
        <Add/>

    </div>
  );
}

export default App;
