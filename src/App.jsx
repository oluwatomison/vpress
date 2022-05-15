import React from "react";
import { backgroundImage } from "./assets/jpg";
import Content from "./component/content";
import { Provider } from 'react-redux';
import AppRouter from './routers'
import { storeFactory } from "./store/store";
//import store from "./store/store";

const STYLE = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
};

function App() {
  let initialState = {}
   const store = storeFactory(initialState);
  return (
    <Provider store={store}>
      <div data-test="component-app" className="w-screen h-screen overflow-auto" style={STYLE}>
          <Content>
            <AppRouter/> 
          </Content>
      </div>
    </Provider>
  );
}

export default App;
