/* eslint-disable no-unused-vars */
import React from 'react'
import './Footer.css'

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__container container">
				<h1 className="footer__title">BetsQ</h1>

				<ul className="footer__list">
					<li>
						<a
							href="#about"
							className="footer__link"
						>
							About
						</a>
					</li>
					<li>
						<a
							href="#portfolio"
							className="footer__link"
						>
							Projects
						</a>
					</li>
					<li>
						<a
							href="#testimonials"
							className="footer__link"
						>
							Testimonials
						</a>
					</li>
				</ul>

				<div className="footer__social">
					<a
						href="https://www.instagram.com/aku_obet/"
						className="footer__social-link"
						target="_blank"
					>
						<i className="uil uil-instagram"></i>
					</a>
					<a
						href="https://dribbble.com/uibetsq"
						className="footer__social-link"
						target="_blank"
					>
						<i className="uil uil-dribbble"></i>
					</a>
					<a
						href="https://github.com/betsky2112"
						className="footer__social-link"
						target="_blank"
					>
						<i className="uil uil-github-alt"></i>
					</a>
				</div>
				<span className="footer__copy">
					&#169; BetsQ. All right reserved
				</span>
			</div>
		</footer>
	)
}

export default Footer
