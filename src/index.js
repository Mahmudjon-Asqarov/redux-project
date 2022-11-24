import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



// import React, { Suspense } from "react";
// import Loader from "./utils/loader/Loader";
// import ReactDOM from "react-dom/client";
// import reportWebVitals from "./reportWebVitals";
// import "./index.css";

// const App = React.lazy(() => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(import("./App")), 3800);
//   });
// });

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <Suspense fallback={<Loader />}>
//       <App />
//     </Suspense>
//   </React.StrictMode>
// );
// reportWebVitals();