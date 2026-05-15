import '@fortawesome/fontawesome-free/css/all.min.css'
import React, { Fragment } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import './App.css'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Landing from './components/layout/Landing'
import Navbar from './components/layout/Navbar'
import Notify from './components/layout/notify'

import { Provider } from 'react-redux'
import store from './store'

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<Fragment>
					<Navbar />
					<Routes>
						<Route path='/' element={<Landing />} />
					</Routes>
					<section className='container'>
						<Notify />
						<Routes>
							<Route path='/register' element={<Register />} />
							<Route path='/login' element={<Login />} />
						</Routes>
					</section>
				</Fragment>
			</Router>
		</Provider>
	)
}

export default App
