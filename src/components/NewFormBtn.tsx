import Link from "next/link";
export default function NewFormBtn() {
	return (
		<button className='rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600'>
			<Link href='/create'>New Form</Link>
		</button>
	);
}
