import path from 'path';
import fs from 'fs';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';

import App from '../src/App';

const PORT = process.env.PORT || 3006;
const app = express();

app.use("/static", express.static(path.join(__dirname, "..", "public")));

app.get('/', (req, res) => {
  // const context = {}
  const app = ReactDOMServer.renderToString(
  // <StaticRouter location={req.url} context={context}>
    <App />
  // </StaticRouter>
  );
  const indexFile = path.resolve('./build/index.html');

  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
  });
});

// app.use(express.static('./build'));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});







// const path = require("path");
// import fs from 'fs';
// const React = require('react')
// const ReactDOMServer = require("react-dom/server");
// const express = require("express");
// const { default: App } = require("../src/App");
// import { persistor, store } from "./../src/redux";
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import { StaticRouter } from 'react-router-dom';
// import MainRouters from "./../src/routers/MainRouters";
// import { SecondaryNavBar } from "./../src/components";
// import Footer from "./../src/components/footer/Footer";

// const app = express();
// app.get('/*', (req, res) => {
//   console.log("===start rendering in string============ ")
// const app = <App/>
//   const reactRouterContext = {};
  
 
//   console.log(app)

//   const app2 = ReactDOMServer.renderToString(
//       app
//     );
// console.log("=======1=1=1=")
//   console.log(app2)
//   console.log("=======1=12o2kj2o=1=")

//   let html = `
//   <html>
//   <head></head>
//   <body>
//       <div id="root">${app2}</div>
//       <script src="/static/bundle.js"></script>
//   </body>
//   </html>
// `;

// res.send(html);


// });

// app.use(express.static('./build'));
// app.listen(8080, () => {
//   console.log(`server is up at 8080`);
// });
