import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { checkEvent } from '../../../../scripts/checkEvent.js'
import { dateFn } from '../../../../scripts/timeAndDate.js'
import PostStore from '../../../../store/PostStore.js'
import './styles/events.css'

const Events = observer(() => {
	const posts = PostStore
	const [events_arr, setPosts] = useState([])
	function func() {
		setPosts(
			posts.getPosts().sort((a, b) => {
				return (
					Number(a.date.split('-').join('')) -
					Number(b.date.split('-').join(''))
				)
			})
		)
	}
	useEffect(() => {
		setInterval(func, 200)
	})
	return (
		<article className='events'>
			<div className='slides'>
				{!events_arr.length && <h2> Ничего не найдено &#128543;</h2>}
				{events_arr.length &&
					events_arr.map((post, i) => {
						return (
							<NavLink key={post.id} to={`/event/${post.id}`}>
								<div className='type'>{checkEvent(post.type)}</div>
								<img src={'http://localhost:5001/' + post.img} alt='post' />
								<div className='content-slide'>
									<div className='head'>
										<div className='date'>{dateFn(post.date)}</div>
										<div className='price'>{post.price} ₽</div>
									</div>
									<h3>{post.title}</h3>
									<div className='description'>
										<p>{post.description.substring(0, 150)}...</p>
									</div>
								</div>
							</NavLink>
						)
					})}
			</div>
		</article>
	)
})
export default Events
