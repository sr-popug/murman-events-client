import axios from 'axios'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { dateFn } from '../../../scripts/timeAndDate.js'
import addSVG from './images/add.svg'
import deleteSVG from './images/delete.svg'

export default function UserEvents() {
	const [events_arr, setPosts] = useState([])
	useEffect(() => {
		const events_arr = axios
			.get('http://localhost:5001/api/offerPosts/all')
			.then((res, req) => {
				setPosts(
					res.data.sort((a, b) => {
						return (
							Number(a.date.split('-').join('')) -
							Number(b.date.split('-').join(''))
						)
					})
				)
			})

		console.log(events_arr)
	}, [])
	function deleteFn(id) {
		console.log(id)
		if (id) {
			axios.delete(`http://localhost:5001/api/offerPosts/delete/${id}`)
			axios.get('http://localhost:5001/api/offerPosts/all').then((res, req) => {
				setPosts(
					res.data.sort((a, b) => {
						return (
							Number(a.date.split('-').join('')) -
							Number(b.date.split('-').join(''))
						)
					})
				)
			})
		}
	}
	return (
		<section className='change'>
			<table>
				<thead>
					<tr>
						<th colSpan='4'>Все Заявки</th>
					</tr>
				</thead>
				<tbody>
					<tr className='info'>
						<th>Название</th>
						<th>Дата и время</th>
						<th>Место</th>
						<th>Действия</th>
					</tr>
					{events_arr.length &&
						events_arr.map(event => {
							return (
								<tr key={event.id} className='elem'>
									<td>{event.title}</td>
									<td>
										{dateFn(event.date)}, {event.time}
									</td>
									<td>{event.place}</td>
									<td className='actions'>
										<NavLink to={`/admin/offerevents/post/${event.id}`}>
											<img src={addSVG} alt='change' />
										</NavLink>
										<button
											id={event.id}
											data-id={event.id}
											onClick={() => deleteFn(event.id)}
										>
											<img src={deleteSVG} alt='delete' />
										</button>
									</td>
								</tr>
							)
						})}
				</tbody>
			</table>
		</section>
	)
}