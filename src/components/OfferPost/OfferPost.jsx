import axios from 'axios'
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Select from 'react-select'
import options from '../../scripts/options'
import deleteSVG from './images/delete.svg'

export default function OfferPost() {
	const [file, setFile] = useState()
	const [photoFile, setPhotoFile] = useState()
	const [error, setError] = useState('')
	const navigate = useNavigate()

	function handleChange(e) {
		setPhotoFile(e.target.files)
		setFile(URL.createObjectURL(e.target.files[0]))
	}
	const title = useRef(null)
	const description = useRef(null)
	const price = useRef(null)
	const type = useRef(null)
	const place = useRef(null)
	const date = useRef(null)
	const time = useRef(null)
	const photo = useRef(null)

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
			const formData = new FormData()
			formData.append('title', newPost.title)
			formData.append('description', newPost.description)
			formData.append('price', newPost.price)
			formData.append('type', newPost.type)
			formData.append('place', newPost.place)
			formData.append('date', newPost.date)
			formData.append('time', newPost.time)
			formData.append('img', newPost.photo)
			console.log(formData)
			axios.post('http://localhost:5001/api/offerPosts', formData).then(() => {
				navigate('/articles')
			})
		} catch {
			setError('Какие-то из полей не заполнены')
		}
	}
	return (
		<section className='create'>
			<h1>Предложить событие</h1>
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
					<button type='submit'>Предложить событие</button>
					<div className='error'>{error}</div>
				</div>

				<div className='right'>
					<p className='desc'>Добавить изображение</p>
					<div className='about-img'>
						<img src={file} />
					</div>
					<div className='bottom'>
						<label htmlFor='upload-photo'>
							<div>Загрузить файл</div>
						</label>
						<input
							required
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
