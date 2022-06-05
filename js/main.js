const hamburgerBtn = document.querySelector('.hamburger')

const footerYear = document.querySelector('.footer__year')

const hamburgerAnimation = () => {
	hamburgerBtn.classList.toggle('is-active')
}

const addYear = () => {
	const date = new Date()
	const year = date.getFullYear()
	footerYear.textContent = `${year}`
}

hamburgerBtn.addEventListener('click', hamburgerAnimation)

addYear()
