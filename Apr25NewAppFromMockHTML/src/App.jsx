
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import SideBar from "./components/SideBar"



function App() {
  
  return (
    <>
         <div id="wrapper">
            <SideBar />
            <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                
              </div>
            </div>

         </div>

    </>
  )
}

export default App
