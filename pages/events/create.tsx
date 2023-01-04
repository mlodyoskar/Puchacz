import dynamic from 'next/dynamic';

const DynamicEventPage = dynamic(
	() =>
		import('../../components/templates/events/createEvent').then(
			(mod) => mod.CreateEventPage
		),
	{
		ssr: false,
	}
);

const CreateEvent = () => {
	return <DynamicEventPage />;
};

export default CreateEvent;
