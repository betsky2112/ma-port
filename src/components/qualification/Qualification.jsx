/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import './Qualification.css'

const Qualification = () => {
	const [toggleSet, setToggleSet] = useState(1)
	const toggleTab = (index) => {
		setToggleSet(index)
	}
	return (
		<section className="qualification section">
			<h2 className="section__title">Qualification</h2>
			<span className="section__subtitle">My personal journey</span>

			<div className="qualification__container container">
				<div className="qualification__tabs">
					<div
						className={
							toggleSet === 1
								? 'qualification__button button--flex qualification__active'
								: 'qualification__button button--flex'
						}
						onClick={() => toggleTab(1)}
					>
						<i className="uil uil-graduation-cap qualification-icon"></i>
						Education
					</div>
					<div
						className={
							toggleSet === 2
								? 'qualification__button button--flex qualification__active'
								: 'qualification__button button--flex'
						}
						onClick={() => toggleTab(2)}
					>
						<i className="uil uil-briefcase-alt qualification-icon"></i>
						Experience
					</div>
				</div>

				<div className="qualification__sections">
					<div
						className={
							toggleSet === 1
								? 'qualification__content qualification__content-active'
								: 'qualification__content'
						}
					>
						<div className="qualification__data">
							<div>
								<h3 className="qualification__title">
									Application Software Engineering
								</h3>
								<span className="qualification__subtitle">
									Telkom University
								</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i>{' '}
									2019 - 2022
								</div>
							</div>

							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
						</div>
						<div className="qualification__data">
							<div></div>
							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
							<div>
								<h3 className="qualification__title">IPA</h3>
								<span className="qualification__subtitle">
									SMAN 2 Tebing Tinggi
								</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i>{' '}
									2016 - 2019
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="qualification__sections">
					<div
						className={
							toggleSet === 2
								? 'qualification__content qualification__content-active'
								: 'qualification__content'
						}
					>
						<div className="qualification__data">
							<div>
								<h3 className="qualification__title">
									Freelance UI Designer
								</h3>
								<span className="qualification__subtitle">
									Fastwork
								</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i>{' '}
									2023 - Present
								</div>
							</div>

							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
						</div>
						<div className="qualification__data">
							<div></div>
							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
							<div>
								<h3 className="qualification__title">
									IDCamp - React Developer
								</h3>
								<span className="qualification__subtitle">
									Indosat Ooredoo Hutchison Digital Camp
								</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i>{' '}
									2023
								</div>
							</div>
						</div>
						<div className="qualification__data">
							<div>
								<h3 className="qualification__title">
									UI/UX Designer Intern
								</h3>
								<span className="qualification__subtitle">
									Internal Media
								</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i>{' '}
									2021 - 2022
								</div>
							</div>
							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Qualification
