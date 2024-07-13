import { observer } from 'mobx-react-lite'
import { Route, Routes } from 'react-router-dom'
import AdminLogin from './components/Admin/AdminLogin/AdminLogin'
import AdminPanel from './components/Admin/AdminPanel/AdminPanel'
import Change from './components/Admin/Change/Change'
import ChangePost from './components/Admin/Change/changePost/ChangePost.jsx'
import Create from './components/Admin/Create/Create'
import UserEvents from './components/Admin/UserEvents/UserEvents'
import ChangePostUser from './components/Admin/UserEvents/changePost/ChangePostUser'
import Articles from './components/Articles/Articles'
import Connect from './components/Connect/Connect'
import ErrorPage from './components/Error/ErrorPage'
import EventPage from './components/EventPage/EventPage'
import Home from './components/Home/Home'
import OfferPost from './components/OfferPost/OfferPost'
import Footer from './components/common/Footer/Footer'
import Header from './components/common/Header/Header'
import UserStore from './store/UserStore'

const App = observer(() => {
	const admin = UserStore
	if (localStorage.getItem('admin') === '1') {
		admin.setIsAdmin(true)
	}
	return (
		<>
			<div className='tr'></div>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/articles' element={<Articles />} />
				<Route path='/event/:id' element={<EventPage />} />
				<Route path='/connect' element={<Connect />} />
				<Route path='/offerpost' element={<OfferPost />} />
				{admin.isAdmin && <Route path='/admin' element={<AdminPanel />} />}
				{admin.isAdmin && <Route path='/admin/create' element={<Create />} />}
				{admin.isAdmin && <Route path='/admin/change' element={<Change />} />}
				{admin.isAdmin && <Route path='/admin/change' element={<Change />} />}
				{admin.isAdmin && (
					<Route path='/admin/change/post/:id' element={<ChangePost />} />
				)}

				{admin.isAdmin && (
					<Route path='/admin/offerevents' element={<UserEvents />} />
				)}
				{admin.isAdmin && (
					<Route
						path='/admin/offerevents/post/:id'
						element={<ChangePostUser />}
					/>
				)}

				<Route path='*' element={<ErrorPage />} />
			</Routes>
			<Footer />
			<AdminLogin />
		</>
	)
})

export default App
