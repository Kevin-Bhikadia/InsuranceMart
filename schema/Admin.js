import mongoose from 'mongoose';

const admin = mongoose.Schema({
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

const Admin = mongoose.model('Admin',admin);

export default Admin;