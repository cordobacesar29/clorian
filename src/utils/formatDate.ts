export function formatDate(date: any): string {
	const newDate = new Date(date)

	const month = newDate.toLocaleString('en', { month: 'short' })
	const day = newDate.getDate()
	const year = newDate.getFullYear()

	const formattedDate = `${month} ${day}, ${year}`

	return formattedDate
}
