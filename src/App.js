import React from 'react';
import Header from './component/Header';
import Body from './component/Body';
import Footer from './component/Footer'

function App() {
  return (

    <div className="col backimg">
     
       <div className="row justify-content-center background-gradient">
       <div className="col-md-8 ">
          <Header/>
          <Footer/>
        </div>

      </div>
            
          
     
    </div>
  );
}

export default App;
