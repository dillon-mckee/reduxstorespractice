//// EXAMPLE STORE

// var redux = require('redux');
// var createStore = redux.createStore;

// var reducers = require('./reducers')

// var store = createStore(reducers.repositoryReducer);
// module.exports = store;



//// HOT OR COLD STORE

var redux = require('redux');
var createStore = redux.createStore;

var reducers = require('./reducers')

var store = createStore(reducers.hotOrColdReducer);
module.exports = store;
