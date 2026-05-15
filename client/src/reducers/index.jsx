import { combineReducers } from 'redux'
import alert from './alert' // ✅ Ensure correct import

export default combineReducers({
	alert // ✅ Make sure this is an object with reducers
})
