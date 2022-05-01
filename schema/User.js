import mongoose from 'mongoose';

const user = mongoose.Schema({
    phone :{
        type : String,
        require : true,
        minLength : 10,
        maxLength : 10,
    },

    password:{
        type : String,
        require : true,
        minLength : 6,
    }

});

const User = mongoose.model('User',user);

export default User;