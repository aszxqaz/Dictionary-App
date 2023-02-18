'use client'
import { RadioGroup } from '@headlessui/react'
import { PropsWithChildren } from 'react'
import styles from './RadioButton.module.scss'
import { useRadioGroupContext } from './RadioGroup'

type RadioProps = {
	orientation?: 'left' | 'right'
	value: unknown
}

export const Radio: React.FC<PropsWithChildren<RadioProps>> = ({
	children,
	orientation = 'left',
	value,
}) => {
	return (
		<RadioGroup.Option value={value}>
			{({ active, checked }) => (
				<div className={styles.wrapper}>
					<input
						type="radio"
						style={{
							clipPath: 'polygon(0 0, 0 0, 0 0, 0 0)',
							width: 1,
							height: 1,
						}}
					/>
					<div
						className={`${styles.circle} ${checked ? styles.checked : ''}`}
					/>
					<RadioGroup.Label className="paragraph-medium">
						{children}
					</RadioGroup.Label>
				</div>
			)}
		</RadioGroup.Option>
	)
}
