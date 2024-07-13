import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import UserStore from '../../../store/UserStore.js'
import errorSVG from './images/error.svg'
import loginSVG from './images/login.svg'
import passwordSVG from './images/password.svg'
import './styles/login.css'

export default function AdminLogin() {
	const admin = UserStore
	const [visible, setVisible] = useState(false)
	const [error, setError] = useState('')
	const navigate = useNavigate()
	const login = useRef(null)
	const password = useRef(null)
	useEffect(() => {
		document.addEventListener('keydown', e => {
			if (e.code === 'KeyQ' && (e.ctrlKey || e.metaKey)) {
				setVisible(prev => !prev)
			}
		})
	}, [])
	async function handleSubmit(e) {
		e.preventDefault()
		if (
			login.current.value === process.env.REACT_APP_ADMIN_NAME &&
			password.current.value === process.env.REACT_APP_ADMIN_PASSWORD
		) {
			setError('')
			admin.setIsAdmin(true)
			localStorage.setItem('admin', 1 + '')
			setVisible(false)
			navigate('/admin')
		} else {
			setError('Вы ввели неверные данные!')
		}
	}
	return (
		<>
			{visible && (
				<div className='login-form'>
					<div
						onClick={() => setVisible(false)}
						className='bg-black-form'
					></div>
					<div className='flex'>
						<div className='login-admin'>
							<h3>Введите данные, для входа в админ аккаунт</h3>
							<form onSubmit={handleSubmit} action=''>
								<div className='input'>
									<input
										placeholder='Введите логин...'
										className='admin-login-input'
										ref={login}
										type='text'
										name='name'
									/>
									<div className='icon'>
										<img src={loginSVG} alt='login' />
									</div>
								</div>
								<div className='input'>
									<input
										className='admin-login-input'
										placeholder='Введите пароль...'
										ref={password}
										type='password'
										name='pass'
										id='pass'
									/>
									<div className='icon'>
										<img src={passwordSVG} alt='' />
									</div>
								</div>
								{error && (
									<div className='error'>
										<img src={errorSVG} alt='error' />
										<p>{error}</p>
									</div>
								)}
								<div className='submit-btn'>
									<button onClick={handleSubmit} type='submit'>
										Подтвердить
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			)}
		</>
	)
}
