import { applyMiddleware, compose, createStore } from 'redux'
import { thunk } from 'redux-thunk' // ✅ Correct import
import rootReducer from './reducers'

// ✅ Use Redux DevTools if available
const composeEnhancers =
	(typeof window !== 'undefined' &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk)) // ✅ Use correct middleware
)

export default store
