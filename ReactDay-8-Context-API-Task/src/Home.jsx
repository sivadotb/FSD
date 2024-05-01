import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import WelcomeNote from "./components/WelcomeNote";

function Home(){
    return(
        <>
            <div className="container">
                 <AppNav />
                 <WelcomeNote />
                 <Outlet/>
            </div>
        </>
    )
}


export default Home