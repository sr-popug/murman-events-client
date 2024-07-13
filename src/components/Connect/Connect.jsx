import { Link, NavLink } from 'react-router-dom'
import mail from './images/mail.svg'
import telegram from './images/telegram.svg'
import vk from './images/vk.svg'
import './styles/connect.css'

export default function Connect() {
	return (
		<section className='connect'>
			<div className='top'>
				<article className='socials'>
					<h2>Для связи с нами вы можете</h2>
					<Link target='_blank' to='https://web.telegram.org/k/Sr_pop'>
						<img src={telegram} alt='' />
						Написать в Телеграм
					</Link>
					<Link target='_blank' to='https://vk.com/artitosh'>
						<img src={vk} alt='' />
						Написать во ВКонтакте
					</Link>
					<Link target='_blank' to='mailto:antonpower2101@gmail.com'>
						<img src={mail} alt='' />
						Написать на почту
					</Link>
				</article>
				<article className='add-event'>
					<h2>Как можно разместить на сайте свое мероприятие?</h2>
					<p className='description'>
						Для этого вам нужно заполнить простую форму, после заполнения -
						данные отправится на модерацию, и ваше мероприятие окажется на нашем
						сайте.
					</p>
					<NavLink to={'/offerpost'}>ЗАПОЛНИТЬ ФОРМУ</NavLink>
				</article>
			</div>
			<article className='bottom'>
				*P.S. Разработкой, модерацией и редакцией сайта занимается всего один
				человек -{' '}
				<Link target='_blank' to='https://vk.com/artitosh'>
					Вот он
				</Link>
				, поэтому ответ на ваши сообщения или предложения мероприятий может
				задержаться, не обижайтесь пожалуйста)
			</article>
		</section>
	)
}
