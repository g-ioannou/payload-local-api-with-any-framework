import type { PageServerLoad } from './$types';

import api from '@repo/admin/api';

export const load: PageServerLoad = async () => {
	const users = await api.find({ collection: 'users' });
	return users;
};
