import options from './options'

export function checkEvent(event) {
	try {
		return options.find(el => el.value === event).label
	} catch {
		return 'Мероприятие'
	}
}
