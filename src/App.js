// import logo from './logo.svg';
import './App.css';
import RouteCompo from './four/RouteCompo'
import {BrowserRouter} from "react-router-dom"
import LinkCompo from './four/LinkCompo';
function App() {
  return (
    <>
    <BrowserRouter>
    <LinkCompo/>
   <RouteCompo/>
   </BrowserRouter>
   </>
  );
}

export default App;
