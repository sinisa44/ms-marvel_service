import env from './envValidation';

import md5 from 'md5'


const generateMarvelURL = (offset?: number | string, limit? : number | string) : string => {
    const publicKey = env.MARVEL_PUBLIC_KEY
    const privateKey = env.MARVEL_PRIVATE_KEY

    let timestamp = new Date().getTime();

    const hash = md5(timestamp + privateKey + publicKey);

    // console.log({offset, limit});
    

    return `?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&offset=${offset}&limit=${limit}`;
}


export default generateMarvelURL