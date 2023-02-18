import { query } from '@/dictionary-api/fetcher'
import { NotFound } from '@/partials/NotFound/NotFound'
import { QueryModeRadios } from '@/partials/QueryModeRadios/QueryModeRadios'
import { SearchInput } from '@/partials/SearchInput/SearchInput'
import { WordDefinition } from '@/partials/WordDefinition/WordDefinition'

export default async function Home({
	params,
	searchParams,
}: {
	params: { slug: string }
	searchParams?: { [key: string]: string | string[] | undefined }
}) {
	let data = null
	let param = ''
	if (typeof searchParams?.word === 'string') {
		param = decodeURI(searchParams.word)
	}
	if (param) {
		data = await query(param)
	}
	console.log(data)
	// console.log(paramOrData);
	return (
		<main className="container">
			<SearchInput initial={param} />
			<div style={{ display: 'flex' }}>
				<QueryModeRadios />
			</div>
			{JSON.stringify(searchParams, null, 2)}
			{data && '0' in data && data[0] ? (
				<WordDefinition word={data[0]} />
			) : (
				<NotFound />
			)}
		</main>
	)
}
