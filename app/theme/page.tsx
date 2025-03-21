import { Button } from '@/components/ui/button';

export default function ThemePage() {
	return (
		<div className='container mx-auto py-[5vmin]'>
			<h1 className='text-7xl'>Heading 1</h1>
			<h2 className='text-6xl'>Heading 2</h2>
			<h3 className='text-5xl'>Heading 3</h3>
			<h4 className='text-4xl'>Heading 4</h4>
			<br />

			<div className='space-y-4'>
				<p className='text-xs text-muted-foreground'>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
					aperiam, alias provident optio ea quibusdam deleniti
					reprehenderit sit officia. Ex consequuntur praesentium ab,
					accusamus recusandae corporis iste voluptatibus! Sit modi
					inventore deserunt doloribus sequi ad incidunt id, alias
					necessitatibus, nostrum qui! Eius cumque exercitationem veritatis
					alias excepturi atque, assumenda similique commodi cum, eum odio
					ullam rem? Nobis voluptatem consectetur, tenetur, autem iusto
					voluptatum odit ea cumque quaerat perferendis repellat tempora
					inventore libero molestiae deleniti pariatur quos. Quaerat amet
					quidem nisi recusandae nam deserunt eum temporibus obcaecati ab
					minima necessitatibus, eius reiciendis ad non. Exercitationem
					magni earum ipsam, amet at tempora.
				</p>

				<p className='text-sm text-primary'>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
					aperiam, alias provident optio ea quibusdam deleniti
					reprehenderit sit officia. Ex consequuntur praesentium ab,
					accusamus recusandae corporis iste voluptatibus! Sit modi
					inventore deserunt doloribus sequi ad incidunt id, alias
					necessitatibus, nostrum qui! Eius cumque exercitationem veritatis
					alias excepturi atque, assumenda similique commodi cum, eum odio
					ullam rem? Nobis voluptatem consectetur, tenetur, autem iusto
					voluptatum odit ea cumque quaerat perferendis repellat tempora
					inventore libero molestiae deleniti pariatur quos. Quaerat amet
					quidem nisi recusandae nam deserunt eum temporibus obcaecati ab
					minima necessitatibus, eius reiciendis ad non. Exercitationem
					magni earum ipsam, amet at tempora.
				</p>

				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
					aperiam, alias provident optio ea quibusdam deleniti
					reprehenderit sit officia. Ex consequuntur praesentium ab,
					accusamus recusandae corporis iste voluptatibus! Sit modi
					inventore deserunt doloribus sequi ad incidunt id, alias
					necessitatibus, nostrum qui! Eius cumque exercitationem veritatis
					alias excepturi atque, assumenda similique commodi cum, eum odio
					ullam rem? Nobis voluptatem consectetur, tenetur, autem iusto
					voluptatum odit ea cumque quaerat perferendis repellat tempora
					inventore libero molestiae deleniti pariatur quos. Quaerat amet
					quidem nisi recusandae nam deserunt eum temporibus obcaecati ab
					minima necessitatibus, eius reiciendis ad non. Exercitationem
					magni earum ipsam, amet at tempora.
				</p>
			</div>

			<div className='flex items-center gap-4 mt-4'>
				<Button>Button</Button>
				<Button variant='secondary'>Button</Button>
			</div>
		</div>
	);
}
