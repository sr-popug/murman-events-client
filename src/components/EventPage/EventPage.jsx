import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { checkEvent } from '../../scripts/checkEvent.js'
import { dateFn } from '../../scripts/timeAndDate'
import './styles/eventPage.css'

export default function EventPage() {
	const params = useParams().id
	const [post, setPost] = useState({})
	useEffect(() => {
		axios.get(`http://localhost:5001/api/posts/${params}`).then((res, req) => {
			setPost(res.data)
		})
	}, [params])
	return (
		<section className='event'>
			{post.type && (
				<div>
					<div className='top'>
						<h2>{post.title}</h2>
						<div className='type'>{checkEvent(post.type)}</div>
					</div>
					<h3>Что вас ждёт?</h3>
					<div className='container'>
						<img src={'http://localhost:5001/' + post.img} alt='' />
						{post.description.split('.').map(elem => {
							return (
								<>
									<p className='par'>{elem}.</p>
									<br />
									<br />
								</>
							)
						})}
					</div>
					<div className='info'>
						<div className='block'>
							<h3>Дата и время</h3>
							<p className='date'>
								{dateFn(post.date)}, {post.time}
							</p>
						</div>
						<div className='block'>
							<h3>Место</h3>
							<p className='location'>{post.place}</p>
						</div>
						<div className='block'>
							<h3>Цена билета</h3>
							<p className='price'>{post.price} ₽</p>
						</div>
					</div>
				</div>
			)}
		</section>
	)
}
