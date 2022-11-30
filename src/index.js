import React from "react";
import ReactDOM from "react-dom/client";
import { combineReducers, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
//
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { reducer } from "./reducers";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["list"],
};

const rootReducer = combineReducers({
  list: reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
let store = createStore(persistedReducer);
let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
