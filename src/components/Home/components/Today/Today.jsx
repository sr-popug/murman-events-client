import axios from 'axios'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { checkEvent } from '../../../../scripts/checkEvent'
import { dateFn } from '../../../../scripts/timeAndDate'
import nextBtn from './images/nextBtn.svg'
import prevBtn from './images/prevBtn.svg'
import './styles/today.css'

const Today = observer(() => {
	const [events_arr, setPosts] = useState([])
	async function func() {
		const posts = await axios.get('http://localhost:5001/api/posts/all')
		const currentdate = new Date()
		console.log(posts)
		setPosts(
			posts.data.filter(event => {
				return (
					event.date ===
					`${currentdate.getFullYear()}-${(
						'0' +
						(currentdate.getMonth() + 1)
					).slice(-2)}-${('0' + currentdate.getDate()).slice(-2)}`
				)
			})
		)
	}
	setTimeout(() => {
		func()
	}, 200)
	return (
		<section className='today'>
			<article className='bg'>
				<div className='row'>
					<div className='sq'></div>
				</div>
				<div className='row'>
					<div className='circle'></div>
					<div className='point'></div>
				</div>
				<div className='row'>
					<div className='point'></div>
				</div>
				<div className='row'>
					<div className='point'></div>
				</div>
				<div className='row'>
					<div className='sq'></div>
					<div className='point'></div>
				</div>
			</article>
			<article className='content'>
				<h2>События на сегодня:</h2>
				{!events_arr.length && (
					<div className='not'>
						<p>На сегодня событий не найдено &#128532;</p>
					</div>
				)}
				{events_arr.length && (
					<div className='slider'>
						<button className='prev'>
							<img src={prevBtn} alt='prevBtn' />
						</button>
						<Swiper
							modules={[Navigation, Pagination]}
							pagination={{
								clickable: true,
								dynamicBullets: true,
							}}
							navigation={{
								prevEl: '.prev',
								nextEl: '.next',
							}}
							breakpoints={{
								1440: {
									slidesPerView: 3,
								},
								1200: {
									slidesPerView: 2,
								},
								400: {
									slidesPerView: 1,
								},
							}}
						>
							{events_arr.length &&
								events_arr.map((event, i) => {
									return (
										<SwiperSlide key={i}>
											<NavLink key={event.id} to={`/event/${event.id}`} c>
												<div className='type'>{checkEvent(event.type)}</div>
												<img
													src={'http://localhost:5001/' + event.img}
													alt=''
												/>
												<div className='content-slide'>
													<div className='head'>
														<div className='date'>{dateFn(event.date)}</div>
														<div className='price'>{event.price} ₽</div>
													</div>
													<h3>{event.title}</h3>
													<div className='description'>
														<p>
															{event.description
																.split('')
																.slice(0, 100)
																.join('')}
															...
														</p>
													</div>
												</div>
											</NavLink>
										</SwiperSlide>
									)
								})}
						</Swiper>
						<button className='next'>
							<img src={nextBtn} alt='nextBtn' />
						</button>
					</div>
				)}
			</article>
		</section>
	)
})
export default Today
