// const express = require('express');
// const app = express();
// const path = require('path');

// app.get('/', (req, res) => {
//     //res.send("Back levantado y escuchando!");
//     // agreo otro comentario
//     res.sendFile(path.join(__dirname, '/index.html'));
// })+


// -----------------------------------------------------------
//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
// const run = require('./src/controlers/test')

const PORT = process.env.PORT || 3001

server.listen(PORT, async () => {    
    console.log(`Server listening at port ${PORT}`); // eslint-disable-line no-console
  });
  