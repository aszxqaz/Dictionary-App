import { useEffect, useState } from 'react'

export const useLocalStorage = <S>(
	key: string,
	initialValue?: S | (() => S)
): [S, (value: S) => void] => {
	const [state, setState] = useState<S>(initialValue as S)

	useEffect(() => {
		const item = localStorage.getItem(key)
		if (item) setState(parse(item))
	}, [key])

  const setValue = (value: S) => {
    setState(value)
    localStorage.setItem(key, JSON.stringify(value))
  }

	return [state, setValue]
}

const parse = (value: string) => {
	try {
		return JSON.parse(value)
	} catch (e) {
		return value
	}
}
