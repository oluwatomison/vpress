import { mount } from "enzyme";
import { findByTestAttr } from "./test/TestUtils";
import { storeFactory } from "./store/store";
//import store from "./store/store";
import { Provider } from "react-redux";
import App from "./App";

const setup = (initialState = {}) => {
     const store = storeFactory(initialState);
     return mount(
          <Provider store={store}>
               <App />
          </Provider>
     );
};

test("renders without error", () => {
     const wrapper = setup();
     const appComponent = findByTestAttr(wrapper, "component-app");
     expect(appComponent).toHaveLength(1);
});
