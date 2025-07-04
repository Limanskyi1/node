const http = require("node:http");
const { AsyncLocalStorage } = require("node:async_hooks");

const asyncLocalStorage = new AsyncLocalStorage();

// console.log(asyncLocalStorage.run);

// const log = () => {
//   const id = asyncLocalStorage.getStore();
//   console.log(id);
// };

// let idSeq = 0;
// const server = http
//   .createServer((req, res) => {
//     asyncLocalStorage.run(idSeq++, () => {
//       log();
//       setImmediate(() => {
//         log();
//         res.end();
//       });
//     });
//   })
//   .listen(8080);

// http.get("http://localhost:8080");
// http.get("http://localhost:8080");
// http.get("http://localhost:8080");
// http.get("http://localhost:8080");

// const logContext = () => {
//   console.log("Context:", asyncLocalStorage.getStore());
// };

// http
//   .createServer((req, res) => {
//     asyncLocalStorage.run({ id: 1 }, () => {
//       const boundLog = asyncLocalStorage.bind(logContext);
//       setImmediate(() => {
//         boundLog();
//         res.end();
//       });
//     });
//   })
//   .listen(8080);

// http.get("http://localhost:8080");

// const runInAsyncScope = asyncLocalStorage.run({ context: "old" }, () => AsyncLocalStorage.snapshot());

// const result = asyncLocalStorage.run({ context: "new" }, () =>
//   runInAsyncScope(() => {
//     console.log(asyncLocalStorage.getStore());
//     console.log(asyncLocalStorage.getStore());
//     asyncLocalStorage.disable();
//     console.log(asyncLocalStorage.getStore());
//     console.log(asyncLocalStorage.getStore());
//     console.log(asyncLocalStorage.getStore());

//   })
// );

// console.log(result);


// const store = { id: 1 };

// asyncLocalStorage.enterWith(store);
// console.log(asyncLocalStorage.getStore());
// setImmediate(() => {
//   asyncLocalStorage.run({ id: 2 }, () => {
//     console.log(asyncLocalStorage.getStore());
//   })
// }); 

// function log() {
//   console.log('store:', asyncLocalStorage.getStore());
// }

// setTimeout(() => {
//   asyncLocalStorage.enterWith({ requestId: 123 });
//   log();
// }, 0);

const store = { id: 2 };
try {
  asyncLocalStorage.run(store, () => {
    console.log(asyncLocalStorage.getStore(),"1"); // Returns the store object
    setTimeout(() => {
      console.log(asyncLocalStorage.getStore(),"2"); // Returns the store object
    }, 0);
    throw new Error();
  });
} catch (e) {
  console.log(asyncLocalStorage.getStore(),"3"); // Returns undefined
  // The error will be caught here
} 