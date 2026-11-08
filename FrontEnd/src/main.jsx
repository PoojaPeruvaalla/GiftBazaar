import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import NavBar from './NavBar.jsx'
// import Home from './Home.jsx'
import Master from './Master.jsx'
// import Carousals from './SmallComponents/Carousals.jsx'
// import Shop from './Shop.jsx'
// import Login from './Login.jsx'
// import MenuL from '../src/SmallComponents/MenuL'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <NavBar></NavBar> */}
    {/* <Home></Home> */}
    <Master></Master>
    {/* <MenuL></MenuL> */}
    {/* <Login/> */}
    {/* <Carousals></Carousals> */}
    {/* <Shop/> */}
    
  </StrictMode>,
)
