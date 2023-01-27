import { useSession } from 'next-auth/react';

export const useAuthenitcatedSession = () => {
	const session = useSession();

	if (!session.data) {
		throw Error(
			'You used useAuthenitcatedSession where you are not authenticated'
		);
	}
	return session;
};
