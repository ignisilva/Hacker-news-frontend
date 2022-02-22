import { applyMiddleware, createStore } from "redux";
import reducer from "./modules";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./modules/rootSaga";

const create = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(reducer, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(rootSaga);

  return store;
};

export default create;
