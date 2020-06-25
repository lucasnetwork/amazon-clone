import React from 'react';
import Header from './Components/Header/Header'
import Footer from './Components/Footer'
import Global from './Components/Global/Styles'
function App() {
  return (
    <div className="App">
      <Global/>
      <Header/>
      <p style={{flex:1}}>oi</p>
      <Footer/>
    </div>
  );
}

export default App;
