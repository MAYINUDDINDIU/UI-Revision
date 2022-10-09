import logo from './logo.svg';
import './App.css';
import products from './Products';
import Button from '@mui/material/Button';
import Product from './Component/Product';
import Navbar from './Component/Navbar';
import Slider from './Component/Slider';


function App() {



  return (
    <div>
      <Navbar></Navbar>
      <Slider></Slider>
      <div className="grid lg:grid-cols-4 gap-3 p-5">


        {
          products.map(product => <Product key={product.key} product={product}></Product>)

        }

      </div>
    </div>

  );
}

export default App;
