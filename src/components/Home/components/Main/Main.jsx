import main from './photos/top-main.png'
import './styles/main.css'

export default function Main() {
	return (
		<section className='main'>
			<article className='bg'>
				<div className='row'>
					<div className='circle'></div>
					<div className='point'></div>
					<div className='point'></div>
				</div>
				<div className='row'>
					<div className='point'></div>
				</div>
				<div className='row'>
					<div className='circle'></div>
					<div className='sq'></div>
					<div className='point'></div>
				</div>
				<div className='row'>
					<div className='point'></div>
				</div>
			</article>
			<article className='content'>
				<div className='left'>
					<h1>MURMAN EVENTS</h1>
					<p className='description'>События в родном городе на каждый день!</p>
				</div>
				<div className='photo'>
					<img src={main} alt='main' />
				</div>
			</article>
		</section>
	)
}
