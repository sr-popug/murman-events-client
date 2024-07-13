import { NavLink, useNavigate } from 'react-router-dom'
import UserStore from '../../../store/UserStore.js'
import addSVG from './images/add.svg'
import addUserSVG from './images/add_user.svg'
import changeSVG from './images/change.svg'
import exitSVG from './images/exit.svg'
import './styles/panel.css'

export default function AdminPanel() {
	const admin = UserStore
	const navigate = useNavigate()
	function exitFn() {
		admin.setIsAdmin(false)
		localStorage.removeItem('admin')
		navigate('/')
	}
	return (
		<section className='admin'>
			<div className='a-panel'>
				<h2>Выберете опцию</h2>
				<div className='menu'>
					<NavLink to='/admin/create' className='elem'>
						<img src={addSVG} alt='add' />
						<h3>Добавить событие</h3>
					</NavLink>
					<NavLink to='/admin/change' className='elem'>
						<img src={changeSVG} alt='change' />
						<h3>Изменить события</h3>
					</NavLink>
					<NavLink to='/admin/offerevents' className='elem'>
						<img src={addUserSVG} alt='users_events' />
						<h3>Заявки</h3>
					</NavLink>
				</div>
				<div className='exit'>
					<button onClick={exitFn}>
						Выйти <img src={exitSVG} alt='' />
					</button>
				</div>
			</div>
		</section>
	)
}
