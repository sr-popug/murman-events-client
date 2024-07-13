export function dateFn(date) {
	const strDate = date.split('-')

	if (strDate[1] === '01') return `${strDate[2]} Января`
	if (strDate[1] === '02') return `${strDate[2]} Февраля`
	if (strDate[1] === '03') return `${strDate[2]} Марта`
	if (strDate[1] === '04') return `${strDate[2]} Апреля`
	if (strDate[1] === '05') return `${strDate[2]} Мая`
	if (strDate[1] === '06') return `${strDate[2]} Июня`
	if (strDate[1] === '07') return `${strDate[2]} Июля`
	if (strDate[1] === '08') return `${strDate[2]} Августа`
	if (strDate[1] === '09') return `${strDate[2]} Сентября`
	if (strDate[1] === '10') return `${strDate[2]} Октября`
	if (strDate[1] === '11') return `${strDate[2]} Ноября`
	if (strDate[1] === '12') return `${strDate[2]} Декабря`
	return date
}
