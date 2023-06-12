import app from "./app";
import env from './utils/envValidation';
import mongoose from "mongoose";

const port = env.APP_PORT || 5000;



mongoose.connect(env.MONGO_CONNECTION_STRING)
        .then(() => {
            console.log('connected to database');
            
            app.listen(port, () => {
                console.log('server running on port', port);
                
            })
        }).catch(error => console.error(error));
