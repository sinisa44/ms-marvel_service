import { cleanEnv,str } from "envalid";
// import {str } from 'envalid/dist/validators';

export default cleanEnv(process.env, {
    APP_PORT: str(),
    MARVEL_PRIVATE_KEY: str(),
    MARVEL_PUBLIC_KEY:str(),
    MONGO_CONNECTION_STRING:str(),
    TOKEN:str()
})