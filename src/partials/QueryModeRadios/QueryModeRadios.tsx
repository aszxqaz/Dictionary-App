'use client'
import { Radio } from '@/components/Radio/HURadio'
import { useAppContext } from '@/context/ContextProvider'
import { useLocalStorage } from '@/hooks/useLocalStorage'
// import { RadioGroup } from "@/components/Radio/RadioGroup";
import { RadioGroup } from '@headlessui/react'
import { useState } from 'react'
import styles from './QueryModeRadios.module.scss'

export const QueryModeRadios = () => {
	const { isAutoQueryMode, setIsAutoQueryMode } = useAppContext()
	return (
		<RadioGroup
			className={styles.wrapper}
			onChange={setIsAutoQueryMode}
			value={isAutoQueryMode}>
			<RadioGroup.Label className="sr-only">Search mode</RadioGroup.Label>
			<Radio value={true}>Auto-search</Radio>
			<Radio value={false}>Press "Enter" to search</Radio>
		</RadioGroup>
	)
}
