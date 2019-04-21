// middlewares are removed just because, native is throwing error (middleware is not a function redux) when using
import { applyMiddleware, createStore } from 'redux';
// import { createLogger } from 'redux-logger';
// import thunk from 'redux-thunk';
// import promise from 'redux-promise-middleware';

import reducer from '../src/reducers';

// const logger = createLogger({
//   // ...options
// });
// const middelware = applyMiddleware(promise(), thunk, logger);

export default createStore(reducer);
