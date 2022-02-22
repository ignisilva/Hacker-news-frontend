import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import create from "./redux/create";

const store = create();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
