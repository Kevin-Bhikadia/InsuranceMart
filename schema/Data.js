import mongoose from 'mongoose';

const data = mongoose.Schema({
    name :{
        type: String,
        require : true,
    },
    
    phone :{
        type : String,
        require : true,
        minLength : 10,
        // maxLength : 10,
    },

    amount :{
        type: String,
        require : true, 
    },

    product :{
        type: String
    },

    sub_product :{
        type: String
    },

    policy_type :{
        type: String
    },

    insurar :{
        type: String
    },

    policy_no :{
        type: String,
        require: true,
    },

    start_date :{
        type: String
    },

    end_date :{
        type: String
    },

    vehicle_no :{
        type: String
    },

    vehicle_type :{
        type: String
    }
});

const Data = mongoose.model('Data',data);

export default Data;