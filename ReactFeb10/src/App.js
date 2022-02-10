import logo from './logo.svg';
import './App.css';
import Prodcuct from './Product';
import Allproducts from './Allproducts';
import Categories from './Categories';
function App() {
  return (
    <div className="App">
      <h1>Welcome to React App</h1>
      <Prodcuct id={6}></Prodcuct>
      <Allproducts></Allproducts>
      <Categories></Categories>
    </div>
  );
}


export default App;