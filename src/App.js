import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";



export class App extends Component {
 

  render() {
    return (
      <div>
          <Router>
          <Navbar/>
          <Routes>

            
          <Route exact path="/" element={<News key = "general1" pageSize = "12" category="general" country="in"/>}></Route>
          <Route exact path="/business" element={<News key = "business" pageSize = "12" category="business" country="in"/>}></Route>
          <Route exact path="/entertainment" element={<News key = "entertainment" pageSize = "12" category="entertainment" country="in"/>}></Route>
          <Route exact path="/general" element={<News key = "general" pageSize = "12" category="general" country="in"/>}></Route>
          <Route exact path="/health" element={<News key = "health" pageSize = "12" category="health" country="in"/>}></Route>
          <Route exact path="/science" element={<News key = "science" pageSize = "12" category="science" country="in"/>}></Route>
          <Route exact path="/sports" element={<News key = "sports" pageSize = "12" category="sports" country="in"/>}></Route>
          <Route exact path="/technology" element={<News key = "technology" pageSize = "12" category="technology" country="in"/>}></Route>

       
          </Routes>
          </Router>
         
        
      </div>
    )
  }
}

export default App

