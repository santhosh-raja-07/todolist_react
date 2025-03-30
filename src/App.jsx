
import Home from './component/Home'
import Login from './component/Login'
import Product from './component/Product'
import ProductDetails from './component/ProductDetails'
import ProductList from './component/ProductList'
import Signup from './component/Signup'
import Todo from "./component/Todo"
import {BrowserRouter , Routes , Route } from "react-router-dom"
import Navbar from './component/Navbar';

function App() {
  let user = "santhosh";
  
  return (
    <>
      <BrowserRouter>
        <Navbar user={user} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login/:newUser' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/products' element={<Product />}>
            <Route index element={<ProductList />} />
            <Route path='list' element={<ProductList />} />
            <Route path='details' element={<ProductDetails />} />
          </Route>
          <Route path='/todo' element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
