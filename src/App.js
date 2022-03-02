import './App.css';
// import WeatherApp from './Pages/Weather/WeatherApp';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import MyPortfolio from './MyPortfolio';
import Timer from './Pages/Timer/Timer';
import MemeApp from './Pages/Meme/MemeApp';
import TodoApp from './Pages/Todo/TodoApp';

function App() {
  return (
    <BrowserRouter>
    
    <div className="App">                
          <Routes>
              <Route path ="/" element={ <MyPortfolio/>}/>
              {/* <Route path="/weatherApp" element={<WeatherApp/>} /> */}
              <Route path="/Timer" element={<Timer/>}/>
              <Route path='/Meme' element={<MemeApp/>}/>
              <Route path='/Todo' element={<TodoApp/>}/>
          </Routes>
    </div>  
  </BrowserRouter>
  );
}

export default App;
