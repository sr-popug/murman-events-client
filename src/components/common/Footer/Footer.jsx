import { NavLink } from 'react-router-dom'
import articles from './images/articles.svg'
import connect from './images/connect.svg'
import home from './images/home.svg'
import './styles/footer.css'

export default function Footer() {
	return (
		<footer>
			<div className='top'>
				<nav>
					<ul>
						<li>
							<NavLink to='/'>
								<img src={home} alt='' /> Главная
							</NavLink>
						</li>
						<li>
							<NavLink to='/'>
								<img src={articles} alt='' /> События
							</NavLink>
						</li>
						<li>
							<NavLink to='/'>
								<img src={connect} alt='' /> Связаться с нами
							</NavLink>
						</li>
					</ul>
				</nav>
				<div className='right'>
					<p className='let'>
						Вы можете добавить своё событие или мироприятие к нам на сайт,
						заполнив небольшую форму
					</p>
					<NavLink to='/offerpost'>ЗАПОЛНИТЬ ФОРМУ</NavLink>
				</div>
			</div>
			<div className='line'></div>
			<div className='bottom'>© MURMAN ENENTS 2023 All Rights Reserved</div>
		</footer>
	)
}
