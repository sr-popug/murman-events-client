import { observer } from 'mobx-react-lite'
import { NavLink } from 'react-router-dom'
import UserStore from '../../../store/UserStore.js'
import starSVG from './images/star.svg'
import './styles/header.css'

const Header = observer(() => {
	const admin = UserStore
	return (
		<header>
			<nav>
				<ul>
					<li>
						<NavLink to='/'>Главная</NavLink>
					</li>
					<li>
						<NavLink to='/articles'>События</NavLink>
					</li>
					<li>
						<NavLink to='/connect'>Связаться с нами</NavLink>
					</li>
				</ul>
			</nav>
			{admin.isAdmin && (
				<NavLink className='admin' to='/admin'>
					<img src={starSVG} alt='' />
					<p>Админ панель</p>
				</NavLink>
			)}
		</header>
	)
})
export default Header
