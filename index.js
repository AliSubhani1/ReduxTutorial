const redux = require("redux");
const reduxLogger = require("redux-logger");
const { createStore } = require("redux");
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

const buyCake = () => ({
  type: BUY_CAKE,
  info: "First redux action",
});

const buyIcecream = () => ({
  type: BUY_ICECREAM,
  info: "second redux action",
});

const initialState = {
  numOfCakes: 10,
  numOfIcecreams: 10,
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

const icecreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams - 1,
      };
    default:
      return state;
  }
};
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: icecreamReducer,
});

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes - 1,
//       };
//     case BUY_ICECREAM:
//       return {
//         ...state,
//         numOfIcecreams: state.numOfIcecreams - 1,
//       };
//     default:
//       return state;
//   }
// };

const store = createStore(rootReducer, applyMiddleware(logger));

console.log("Initial state", store.getState());
const unsubscribe = store.subscribe(() => {});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
unsubscribe();
