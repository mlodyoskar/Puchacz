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

const peopleData = [
	{ id: 1, name: 'Oskar' },
	{ id: 2, name: 'Kuba' },
	{ id: 3, name: 'Janek' },
	{ id: 4, name: 'Oliwier' },
	{ id: 5, name: 'DJ OG' },
];

const photograpghs = [
	{ id: 1, name: 'Arti Jakob' },
	{ id: 2, name: 'Madzia' },
	{ id: 5, name: 'Marta' },
];

const CreateEventSchema = z.object({
	name: z.string().min(1, 'To pole nie może być puste').max(40),
	date: z.string(),
	photo: imageSchema.optional(),
	stuffDj: MultiSelectOptionSchema.array(),
	stuffPhoto: MultiSelectOptionSchema.array(),
});

type CreateEvent = z.infer<typeof CreateEventSchema>;

export const CreateEventPage = () => {
	const {
		register,
		handleSubmit,
		control,
		resetField,
		watch,
		formState: { errors },
	} = useForm<CreateEvent>({ resolver: zodResolver(CreateEventSchema) });

	const onSubmit: SubmitHandler<CreateEvent> = (data) => {
		//TODO: Request to API to add event
		console.log(data);
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
				{photo ? (
					<div>
						<button onClick={() => resetField('photo')}>Reset</button>
						{/* {photo[0].size} */}
					</div>
				) : (
					<FileInput {...register('photo')} />
				)}
				<Typography component="h2">Stuff na impreze</Typography>
				<div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
					<MultiSelect
						control={control}
						name="stuffDj"
						label="Dj'e"
						options={peopleData}
						defaultValue={[]}
					/>
					<MultiSelect
						control={control}
						name="stuffPhoto"
						label="Fotografowie"
						options={photograpghs}
						defaultValue={[]}
					/>
				</div>

				<Button>Utwórz wydarzenie</Button>
			</form>
		</MainLayout>
	);
};
