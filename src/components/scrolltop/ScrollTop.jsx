/* eslint-disable no-unused-vars */
import React from 'react'
import './ScrollTop.css'

const ScrollTop = () => {
	window.addEventListener('scroll', function () {
		const scrolltop = document.querySelector('.scrolltop')
		if (this.scrollY >= 560) {
			scrolltop.classList.add('show-scroll')
		} else scrolltop.classList.remove('show-scroll')
	})
	return (
		<a
			href="#home"
			className="scrolltop"
			onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
		>
			<i className="uil uil-arrow-up scrolltop__icon"></i>
		</a>
	)
}

export default ScrollTop
