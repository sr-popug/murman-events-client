import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Select from 'react-select'
import { checkEvent } from '../../../../scripts/checkEvent'
import options from '../../../../scripts/options'
import deleteSVG from './images/delete.svg'

export default function ChangePost() {
	const params = useParams().id
	const [file, setFile] = useState()
	const [photoFile, setPhotoFile] = useState()
	const [error, setError] = useState('')
	const navigate = useNavigate()
	const [post, setPost] = useState({})
	const title = useRef(null)
	const description = useRef(null)
	const price = useRef(null)
	const type = useRef(null)
	const place = useRef(null)
	const date = useRef(null)
	const time = useRef(null)
	const photo = useRef(null)
	useEffect(() => {
		axios.get(`http://localhost:5001/api/posts/${params}`).then((res, req) => {
			setPost(res.data)
		})

		title.current.value = post.title
		description.current.value = post.description
		price.current.value = post.price
		type.current.setValue({ value: post.type, label: checkEvent(post.type) })
		place.current.value = post.place
		date.current.value = post.date
		time.current.value = post.time

		setFile('http://localhost:5001/' + post.img)
	}, [
		params,
		post.title,
		post.description,
		post.price,
		post.place,
		post.date,
		post.time,
		post.type,
		post.img,
	])
	function handleChange(e) {
		setPhotoFile(e.target.files)
		try {
			setFile(URL.createObjectURL(e.target.files[0]))
		} catch {
			console.log('')
		}
	}

	const handleSubmit = e => {
		e.preventDefault()
		try {
			const newPost = {
				title: title.current.value,
				description: description.current.value,
				price: price.current.value,
				type: type.current.getValue()[0].value,
				place: place.current.value,
				date: date.current.value,
				time: time.current.value,
				photo: photoFile[0],
			}
			console.log(newPost)
			const formData = new FormData()
			try {
				formData.append('title', newPost.title)
				formData.append('description', newPost.description)
				formData.append('price', newPost.price)
				formData.append('type', newPost.type)
				formData.append('place', newPost.place)
				formData.append('date', newPost.date)
				formData.append('time', newPost.time)
				formData.append('img', newPost.photo)
			} catch {
				setError('Какие-то из полей не заполнены')
			}
			axios
				.put(`http://localhost:5001/api/posts/change/${params}`, formData)
				.then(() => {
					navigate('/articles')
				})
		} catch (e) {
			setError('Какие-то из полей не заполнены')
		}
	}
	return (
		<section className='create'>
			<h1>Изменить событие</h1>
			<form onSubmit={handleSubmit}>
				<div className='left'>
					<div className='input'>
						<p className='desc'>Название</p>
						<input
							ref={title}
							required
							maxLength={30}
							placeholder='Введите назавние...'
							name='title'
							type='text'
						/>
					</div>
					<div className='input'>
						<p className='desc'>Описание</p>
						<textarea
							ref={description}
							required
							rows={20}
							cols={60}
							placeholder='Введите описание...'
							name='description'
							type='text'
						/>
					</div>
					<div className='input'>
						<p className='desc'>Стоимость входа</p>
						<input
							ref={price}
							min={0}
							max={10000}
							maxLength={30}
							name='price'
							type='number'
						/>
						<span>₽</span>
					</div>
					<div className='input'>
						<p className='desc'>Тип</p>
						<Select
							ref={type}
							required
							classNamePrefix={'search'}
							name='type'
							placeholder='Выберете тип...'
							options={options}
						/>
					</div>
					<div className='input'>
						<p className='desc'>Адрес</p>
						<input
							ref={place}
							required
							placeholder='Введите адрес...'
							type='text'
							name='place'
						/>
					</div>
					<div className='date-time'>
						<div className='input'>
							<p className='desc'>Дата</p>
							<input ref={date} required type='date' name='date' />
						</div>
						<div className='input'>
							<p className='desc'>Время</p>
							<input ref={time} required type='time' name='time' />
						</div>
					</div>
					<button type='submit'>Изменить событие</button>
					<div className='error'>{error}</div>
				</div>

				<div className='right'>
					<p className='desc'>Добавить изображение</p>
					<div className='about-img'>
						<img src={file} alt='post' />
					</div>
					<div className='bottom'>
						<label htmlFor='upload-photo'>
							<div>Загрузить файл</div>
						</label>
						<input
							ref={photo}
							type='file'
							id='upload-photo'
							onChange={handleChange}
						/>
						<div className='delete' onClick={() => setFile()}>
							<img src={deleteSVG} alt='' />
						</div>
					</div>
				</div>
			</form>
		</section>
	)
}
