import Pocketbase from 'pocketbase';

const POCKETBASE_API_URL = process.env.NEXT_PUBLIC_POCKETBASE_URL || "/hcgi/platform";

const pocketbaseClient = new Pocketbase(POCKETBASE_API_URL);

export default pocketbaseClient;
export { pocketbaseClient };
