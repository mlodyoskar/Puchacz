import type {
	CreateEventMutation,
	CreateEventMutationVariables,
	PublishEventMutationVariables,
	PublishEventMutation,
} from './../../../generated/graphql';
import {
	CreateEventDocument,
	PublishEventDocument,
} from './../../../generated/graphql';
import { CreateEvent } from 'components/templates/events/createEvent';
import { authorizedApolloClient } from 'graphql/authorizedClient';
import type { NextApiHandler } from 'next';
import { z } from 'zod';

const Body = CreateEvent.pick({ name: true, date: true }).extend({
	stuff: z.array(z.object({ id: z.string() })).optional(),
});

const handler: NextApiHandler = async (req, res) => {
	const body = Body.parse(req.body);

	const { data, errors } = await authorizedApolloClient.mutate<
		CreateEventMutation,
		CreateEventMutationVariables
	>({
		mutation: CreateEventDocument,
		variables: {
			name: body.name,
			day: body.date,
			stuff: {
				connect: body.stuff?.map((p) => {
					return { id: p.id };
				}),
			},
		},
	});

	const id = data?.createEvent?.id;
	if (!id) {
		console.log(errors);

		res.status(500).json({ error: 'Wystąpił błąd przy tworzeniu eventu' });
		return;
	}

	await authorizedApolloClient.mutate<
		PublishEventMutation,
		PublishEventMutationVariables
	>({
		mutation: PublishEventDocument,
		variables: {
			id,
		},
	});

	res.status(201).json({ id });
};

export default handler;
