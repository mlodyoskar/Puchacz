import Camera from 'components/icons/Camera.svg';
import Star from 'components/icons/Star.svg';
interface Event {
	name?: string;
	day: string;
	createdAt: string;
	stuffs?: [
		{
			id: string;
			type: string;
			name: string;
		}
	];
}
export const EventDetails = ({ name, day, createdAt, stuffs }: Event) => {
	return (
		<div className="mx-auto mt-6 max-w-5xl px-4 sm:px-6 lg:px-8">
			<dl className="grid grid-cols-2 gap-x-4 gap-y-8">
				<div className="sm:col-span-1">
					<dt className="text-md font-medium text-gray-500">
						Nazwa wydarzenia
					</dt>
					<dd className="text-md mt-1 text-gray-900">{name}</dd>
				</div>
				<div className="sm:col-span-1">
					<dt className="text-md font-medium text-gray-500">Data wydarzenia</dt>
					<dd className="text-md mt-1 text-gray-900">{day}</dd>
				</div>
				<div className="sm:col-span-1">
					<dt className="text-md font-medium text-gray-500">Stuff</dt>
					{stuffs?.map((stuff) => (
						<dd
							className="text-md mt-1 flex flex-row text-gray-900"
							key={stuff.id}
						>
							{stuff.type === 'photograph' ? (
								<Camera className="mt-1 mr-1 h-4 w-4" aria-hidden="true" />
							) : (
								<Star className="mt-1 mr-1 h-4 w-4" aria-hidden="true" />
							)}
							{stuff.name}
						</dd>
					))}
				</div>
				<div className="sm:col-span-1">
					<dt className="text-md font-medium text-gray-500">Stworzony</dt>
					<dd className="text-md mt-1 text-gray-900">{createdAt}</dd>
				</div>
			</dl>
		</div>
	);
};
