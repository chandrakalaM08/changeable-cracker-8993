import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {BrowserRouter} from "react-router-dom"
import { ChakraProvider } from '@chakra-ui/react';
import AuthContextProvider from './Context/AuthContextProvider';
// import store from './redux/store';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <ChakraProvider>
    <AuthContextProvider>
      {/* <Provider store={store}> */}
  <BrowserRouter>
       <App />
    </BrowserRouter>
    {/* </Provider> */}
    </AuthContextProvider>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

