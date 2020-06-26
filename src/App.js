import React from 'react';
import Header from './Components/Header/Header'
import Footer from './Components/Footer'
import Home from './Components/Pages/Home'
import Product from './Components/Pages/Product'
import Global from './Components/Global/Styles'
function App() {
  return (
    <div className="App">
      <Global/>
      <Header/>
      <main>
        {/* <Home/> */}
        <Product/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
