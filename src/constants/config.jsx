// production
export const BASE_URL = `https://blockchain-service.onrender.com`;
// development
// export const BASE_URL = `http://localhost:9000`;

export const SET_COOKIE = `${BASE_URL}/user/setcookie`;
export const GET_COOKIES = `${BASE_URL}/user/getcookies`;
export const CLEAR_COOKIE = `${BASE_URL}/user/clearcookie`;

export const BLOCKCHAIN_BASE_URL = `${BASE_URL}/api/v1/blockchain`;
export const BLOCKCHAIN_BLOCKS_URL = `${BLOCKCHAIN_BASE_URL}/blocks`;
export const BLOCKCHAIN_BALANCE_URL = `${BLOCKCHAIN_BASE_URL}/balance`;
export const BLOCKCHAIN_CREATE_TRANSACTION_URL = `${BLOCKCHAIN_BASE_URL}/create/transaction`;
export const BLOCKCHAIN_CREATE_BLOCK_URL = `${BLOCKCHAIN_BASE_URL}/create/block`;

