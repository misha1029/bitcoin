import React, { FC } from 'react'
import { CSSTransition } from 'react-transition-group'

import { SlideItem } from './SlideItem'
import styles from './Slider.module.scss'
import { SliderArrow } from './SliderArrow/SliderArrow'
import { useSlider } from './useSlider'

export interface IItem {
	code: string
	symbol: string
	rate: string
	description: string
	rate_float: string
}

export interface ISlider {
	slides: IItem
	buttonTitle?: string
}

const Slider: FC<ISlider> = ({ slides, buttonTitle }) => {
	const transformation = Object.entries(slides)

	const doublePrices = Object.fromEntries(
		Object.entries(Object.entries(slides))
	)

	const { slideIn, handleClick, index, isNext, isPrev } = useSlider(
		transformation.length
	)

	return (
		<div className={styles.slider}>
			<CSSTransition
				in={slideIn}
				className="slide-animation"
				timeout={300}
				unmountOnExit
			>
				{slides && (
					<SlideItem slide={doublePrices[index]} buttonTitle={buttonTitle} />
				)}
			</CSSTransition>

			{isPrev && (
				<SliderArrow variant="left" clickHandler={() => handleClick('prev')} />
			)}
			{isNext && (
				<SliderArrow variant="right" clickHandler={() => handleClick('next')} />
			)}
		</div>
	)
}

export default Slider
