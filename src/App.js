import React from 'react';
import Header from './Components/Header/Header'
import Footer from './Components/Footer'
import Routes from './routes'
import Global from './Components/Global/Styles'
function App() {
  return (
    <div className="App">
      <Global/>
      <Header/>
      <main>
        <Routes/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
