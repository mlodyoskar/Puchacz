import { Button } from 'components/atoms/Button/Button';
import { Input } from 'components/atoms/Input/Input';
import { Typography } from 'components/atoms/Typography/Typography';
import { MainLayout } from 'components/layouts/MainLayout';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	MultiSelect,
	MultiSelectOptionSchema,
} from 'components/atoms/MultiSelect/MultiSelect';
import { imageSchema } from 'utils/imageSchema';
import { FileInput } from 'components/atoms/FileInput/FileInput';
import Image from 'next/image';
import TrashIcon from './../../icons/Trash.svg';
import { useGetAllStuffQuery } from 'generated/graphql';
import { useRouter } from 'next/router';
import { fetcher } from 'utils/fetcher';
import { invariant } from '@apollo/client/utilities/globals';

const HYGRAPH_URL = process.env.NEXT_PUBLIC_HYGRAPH_URL;

invariant(HYGRAPH_URL);

export const CreateEvent = z.object({
	name: z.string().min(1, 'To pole nie może być puste').max(40),
	date: z.string().min(1, 'To pole nie może być puste'),
	photo: imageSchema.optional(),
	stuffDj: MultiSelectOptionSchema.array(),
	stuffPhoto: MultiSelectOptionSchema.array(),
});

type CreateEvent = z.infer<typeof CreateEvent>;

export const CreateEventPage = () => {
	const router = useRouter();
	const { data: stuffData } = useGetAllStuffQuery();

	const {
		register,
		handleSubmit,
		control,
		resetField,
		watch,
		formState: { errors },
	} = useForm<CreateEvent>({
		resolver: zodResolver(CreateEvent),
	});

	const onSubmit: SubmitHandler<CreateEvent> = async ({
		date,
		name,
		photo,
		stuffDj,
		stuffPhoto,
	}) => {
		const stuff = [...stuffPhoto, ...stuffDj];

		const variables = {
			name,
			date,
			stuff: stuff.map((p) => ({ id: p.id })),
		};

		const res = await fetcher('/api/events/create', {
			body: { ...variables },
		});

		console.log(res);

		// router.push(`/events/${createdEventData?.createEvent?.id}`);
	};

	const photo = watch('photo');

	return (
		<MainLayout>
			<Typography component="h1">Stwórz nową imprezę</Typography>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="mt-4 flex flex-col gap-4"
			>
				<Typography component="h2">Podstawowe informacje</Typography>
				<div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
					<Input
						{...register('name')}
						error={errors.name?.message}
						placeholder="American party"
					>
						Nazwa imprezy
					</Input>
					{/* //TODO: Add custom calendar component */}
					<Input {...register('date')} type="date">
						Data imprezy
					</Input>
				</div>
				{photo && photo.length > 0 ? (
					<div className="relative">
						<button
							className="absolute top-0 right-0 m-2 rounded-md border-2 border-blue-700 bg-white "
							onClick={() => resetField('photo')}
						>
							<TrashIcon className="h-6 w-6" />
						</button>
						<Image
							className="max-h-64 w-full overflow-hidden rounded-md object-cover"
							alt="Zdjęcie imprezy"
							width={200}
							height={200}
							src={URL.createObjectURL(photo[0])}
						/>
					</div>
				) : (
					<FileInput
						errorMessage={errors.photo?.message}
						{...register('photo')}
					/>
				)}
				<Typography component="h2">Stuff na impreze</Typography>
				{stuffData ? (
					<div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
						<MultiSelect
							control={control}
							name="stuffDj"
							label="Dj'e"
							options={stuffData.stuffs.filter((p) => p.type === 'dj')}
							defaultValue={[]}
						/>
						<MultiSelect
							control={control}
							name="stuffPhoto"
							label="Fotografowie"
							options={stuffData.stuffs.filter((p) => p.type === 'photograph')}
							defaultValue={[]}
						/>
					</div>
				) : (
					<p>Nie udało się załadować dji i fotografów</p>
				)}

				<Button disabled={false}>Utwórz wydarzenie</Button>
			</form>
		</MainLayout>
	);
};
