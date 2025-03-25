import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Header from './components/Header';
import Footer from './components/Footer'
import IntercomMessenger from './components/IntercomMessenger';


function App() {
  return (
    <Router>
      <Header />
      <div>
        <AppRoutes />
        {/* <div className='bg-black w-9 h-9 rounded-full fixed right-[4%] bottom-[4%] z-20'> */}
          <IntercomMessenger user={"test"} />
        {/* </div> */}
      </div>
      <Footer />
    </Router>
  );
}

export default App;