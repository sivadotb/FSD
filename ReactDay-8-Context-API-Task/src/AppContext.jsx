import { createContext, useState } from "react";

const AppContext = createContext();

export function AppContextProvider({ children }) {
  const appParams = {
    storeName: "Tamil - Digital Store",
    appImagePath: "src/assets/images/",
  };

  const [cart, setCart] = useState([]);

  const [appData, setAppData] = useState(appParams);

  const gblStoreName = function () {
    return appData.storeName;
  };

  const gblAppImageBasePath = function () {
    return appData.appImagePath;
  };

  const gblGetAppParams = function () {
    return appParams;
  };

  return (
    <AppContext.Provider
      value={{
        appData,
        setAppData,
        gblStoreName,
        gblGetAppParams,
        gblAppImageBasePath,
        cart,
        setCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
