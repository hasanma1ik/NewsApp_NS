import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'




// "07bd4837602b403ca6d530d030ee25db"

const App = ()=>  {
  
    const [darkMode, setDarkMode] = useState(true);
  
    useEffect(() => {
      document.body.classList.toggle('dark', darkMode);
    }, [darkMode]);
  
  const pageSize = 20;
  const apiKey = process.env.REACT_APP_NEWS_API
  
  const [progress, setProgress] = useState(0)
  
 
  return (
    <div>
      {/* <button onClick={() => setDarkMode(!darkMode)}>
        Toggle dark mode
      </button> */}
      <BrowserRouter>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
       
      />

      

        <Routes>
          <Route path='/' element={<News setProgress={setProgress} apiKey={apiKey} key='general' pageSize={pageSize} country='us' category='general' />} />
          <Route path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} key='entertainment' pageSize={pageSize} country='us' category='entertainment' />} />
          <Route path='/business' element={<News setProgress={setProgress} apiKey={apiKey} key='business' pageSize={pageSize} country='us' category='business' />} />
          <Route path='/general' element={<News setProgress={setProgress} apiKey={apiKey} key='general' pageSize={pageSize} country='us' category='general' />} />
          <Route path='/health' element={<News setProgress={setProgress} apiKey={apiKey} key='health' pageSize={pageSize} country='us' category='health' />} />
          <Route path='/science' element={<News setProgress={setProgress} apiKey={apiKey} key='science' pageSize={pageSize} country='us' category='science' />} />
          <Route path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} key='technology' pageSize={pageSize} country='us' category='technology' />} />
          <Route path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} key='sports' pageSize={pageSize} country='us' category='sports' />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
