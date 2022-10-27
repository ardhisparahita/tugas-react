import './App.css';
import Card from './Components/Card/Card';
import Text from './Components/Text/Text';
import Button from './Components/Button/Button';
import Login from './Pages/Login/Login';
import Profile from './Pages/Profile/Profile';
import About from './Pages/About/About';

function App() {
  return (
    <div className="App">
      <Card/>
      <Text/>
      <Button/>
      <Login/>
      <Profile/>
      <About/>
    </div>
  );
}

export default App;
