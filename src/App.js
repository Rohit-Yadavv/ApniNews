import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
function App() {
  const ApiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(10)
  return (
    <>    <LoadingBar
      color='#f11946'
      progress={progress}
    />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News key="general" category="general" ApiKey={ApiKey} progress={progress} setProgress={setProgress} />}/>
          <Route exact path="/business" element={<News key="business" ApiKey={ApiKey} category="business" progress={progress} setProgress={setProgress} />}/>
          <Route exact path="/entertainment" element={<News key="entertainment" ApiKey={ApiKey} category="entertainment" progress={progress} setProgress={setProgress} />}/>
          <Route exact path="/health" element={<News key="health" ApiKey={ApiKey} category="health" progress={progress} setProgress={setProgress} />}/>
          <Route exact path="/science" element={<News key="science" ApiKey={ApiKey} category="science" progress={progress} setProgress={setProgress} />}/>
          <Route exact path="/sports" element={<News key="sports" ApiKey={ApiKey} category="sports" progress={progress} setProgress={setProgress} />}/>
          <Route exact path="/technology" element={<News key="technology" ApiKey={ApiKey} category="technology" progress={progress} setProgress={setProgress} />}/>
        </Routes>

      </BrowserRouter>
    </>

  );
}


export default App;




// business
// entertainment
// general
// health
// science
// sports
// technology.