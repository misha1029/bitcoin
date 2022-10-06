import Image from 'next/image'
import React, { FC } from 'react'

import image from '../../../assets/photo.jpg'

import styles from './Slider.module.scss'

export const SlideItem: FC<{
	slide: [string, any]
	buttonTitle: string | undefined
}> = ({ slide, buttonTitle = 'BTC' }) => {
	const priceBtc = slide[1].rate.replace(/\,/g, '.');

	return (
		<div className={styles.slide}>
			<Image
				layout="fill"
				className={styles.image}
				src={image}
				alt={'alt'}
				draggable={false}
				unoptimized
				priority
			/>

			<div className={styles.content}>
				<div className={styles.heading}>{buttonTitle}</div>
				<div
					className={styles.subHeading}
				>{`${priceBtc} ${slide[1].code}`}</div>
				<div className={styles.subHeading}>{slide[1].description}</div>
			</div>
		</div>
	)
}
