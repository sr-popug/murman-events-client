import axios from 'axios'
import { observer } from 'mobx-react-lite'
import React, { useRef } from 'react'
import Select from 'react-select'
import options from '../../../../scripts/options'
import PostStore from '../../../../store/PostStore'
import search_img from './images/search.svg'
import './styles/select.css'

const SelectForm = observer(() => {
	const posts = PostStore
	const title = useRef(null)
	const date = useRef(null)
	const type = useRef(null)
	axios.get(`http://localhost:5001/api/posts/all`).then((res, req) => {
		posts.setPost(res.data)
		console.log(res.data)
	})

	function submit(e) {
		e.preventDefault()
		const titleValue = title.current.value
		const dateValue = date.current.value
		const typeValue = type.current.getValue()[0]?.value

		axios
			.get(
				`http://localhost:5001/api/posts/all?title=${titleValue}&date=${dateValue}&type=${typeValue}`
			)
			.then((res, req) => {
				posts.setPost(res.data)
				console.log(res.data)
			})
	}
	return (
		<form onSubmit={submit} className='search-form' action=''>
			<div className='flex'>
				<div className='left'>
					<h2>Информация</h2>
					<div className='about-input'>
						<input
							ref={title}
							name='title'
							placeholder='Искать событие...'
							type='text'
						/>
						<div className='search'>
							<img src={search_img} alt='search' />
						</div>
					</div>
					<div className='select-date'>
						<input ref={date} type='date' name='date' />
					</div>
					<button type='submit'>ПРИМЕНИТЬ</button>
				</div>

				<div className='right'>
					<h2>Теги</h2>
					<Select
						ref={type}
						classNamePrefix={'search'}
						name='type'
						placeholder='Выберете тип...'
						options={options}
					/>
				</div>
			</div>
		</form>
	)
})
export default SelectForm
