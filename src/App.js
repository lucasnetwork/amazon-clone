import React from 'react';
import Footer from './Components/Footer'
import Routes from './routes'
import Global from './Components/Global/Styles'
function App() {
  return (
    <div className="App">
      <Global/>
      <main>
        <Routes/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
