import './App.css';
import Card from './Components/Card/Card';
import Text from './Components/Text/Text';
import Button from './Components/Button/Button';
import Login from './Pages/Login/Login';
import Profile from './Pages/Profile/Profile';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Faq from './Pages/Faq/Faq';
import Donate from './Pages/Donate/Donate';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <Card/>
      <Text/>
      <Button/>
      <Login/>
      <Profile/>
      <About/>
      <Home/>
      <Faq/>
      <Donate/>
      <Cart/>
    </div>
  );
}

export default App;
