import { InferSchemaType, model, Schema } from "mongoose";
import bcrypt from 'bcrypt'

const userSchema = new Schema({
    username: {
        type: String,
        required:[true, 'username is required'],
        unique:true
    },
    email:{
        type:String,
        unique:true,
        required:[true, "email is required"]
    },
    password:{
        type:String,
        required:[true, 'password is required']
    }
})

userSchema.pre('save', async function(next){
    const user = this;
    const hash = await bcrypt.hash(this.password!, 10);

    this.password = hash

    next()
})


type User = InferSchemaType<typeof userSchema>

export default model<User>("User", userSchema);