export const BASE_URL=import.meta.env.VITE_BASE_URL

const URL=`${BASE_URL}/api/v1`


export const GET_ALL_CARS=`${URL}/cars`;
export const CAR = `${URL}/car`;

export const LOGIN=`${URL}/login`
export const LOGOUT=`${URL}/logout`

export const GET_PROFILE=`${URL}/profile`



export const BRAND=`${URL}/brand`
export const SINGLE_BRAND=`${URL}/singlebrand/`