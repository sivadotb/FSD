import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import WelcomeNote from "./components/WelcomeNote";
import { useContext } from "react";
import AppContext from "./AppContext";

function Home() {
  const { gblStoreName } = useContext(AppContext);
  useEffect(() => {
    document.title = gblStoreName() + " ";
  }, []);

  return (
    <>
      <div className="container">
        <AppNav />
        <WelcomeNote />
        <Outlet />
      </div>
    </>
  );
}

export default Home;
