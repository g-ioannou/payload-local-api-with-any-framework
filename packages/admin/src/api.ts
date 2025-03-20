import { getPayload } from 'payload';

import config from './payload.config';

// saniteze the config here in order for types to work properly in apps
const api = await getPayload({ config });

export default api;
