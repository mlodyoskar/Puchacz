import { Button } from 'components/atoms/Button/Button';
import { Input } from 'components/atoms/Input/Input';
import { Typography } from 'components/atoms/Typography/Typography';
import { MainLayout } from 'components/layouts/MainLayout';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { MultiSelect } from 'components/atoms/MultiSelect/MultiSelect';

const peopleData = [
	{ id: 1, name: 'Oskar' },
	{ id: 2, name: 'Kuba' },
	{ id: 3, name: 'Janek' },
	{ id: 4, name: 'Oliwier' },
	{ id: 5, name: 'DJ OG' },
];

const CreateEventSchema = z.object({
	name: z.string().min(1, 'To pole nie może być puste').max(40),
	date: z.string(),
	stuffDj: z.object({ id: z.number(), name: z.string() }).array(),
});

type CreateEvent = z.infer<typeof CreateEventSchema>;

const CreateEventPage = () => {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<CreateEvent>({ resolver: zodResolver(CreateEventSchema) });

	const onSubmit: SubmitHandler<CreateEvent> = (data) => {
		//TODO: Request to API to add event
		console.log(data);
	};

	return (
		<MainLayout>
			<Typography component="h1">Stwórz nową imprezę</Typography>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="mt-4 flex flex-col gap-4"
			>
				<Typography component="h2">Podstawowe informacje</Typography>
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
				<Typography component="h2">Ekipa</Typography>
				<MultiSelect
					control={control}
					name="stuffDj"
					label="Dj"
					options={peopleData}
					defaultValue={[]}
				/>
				<Button>Utwórz wydarzenie</Button>
			</form>
		</MainLayout>
	);
};

export default CreateEventPage;
