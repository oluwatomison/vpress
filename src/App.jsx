import React from "react";
import { backgroundImage } from "./assets/jpg";
import Content from "./component/content";
import { Provider } from 'react-redux';
import AppRouter from './routers'
import store from "./store/store";

const STYLE = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
};

function App() {
  return (
    <Provider store={store}>
    <div className="w-screen h-screen overflow-auto" style={STYLE}>
        <Content>
          <AppRouter/> 
        </Content>
    </div>
    </Provider>
  );
}

export default App;
