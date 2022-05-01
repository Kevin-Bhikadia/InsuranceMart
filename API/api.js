import  express  from "express";
import User from '../schema/User.js';
import Admin from '../schema/Admin.js';
import Data from  '../schema/Data.js';

const router = express.Router();

router.post('/signup', async (req,res,next)=>{
    const exist = await User.findOne({phone :req.body.phone });
    if(exist)
    {
        return res.status(400).json('User already Exist');
    }
    User.create(req.body)
    .then(data => res.json(data))
    .catch(next => console.log(next));
})

router.post('/login', async (req,res,next)=>{
    const exist = await User.findOne({phone :req.body.phone, password:req.body.password});
    if(exist)
    {
        return res.status(200).json(`${req.body.phone} login successfull`);
        // 
    }
    else 
    {
        return res.status(400).json('Invalid Login');
    }
    
})

router.post('/data', async (req,res,err) => {
    const exist = await Data.findOne({policy_no: req.body.policy_no})
    console.log(exist);
    if(exist){
        await Data.updateOne({"_id":exist._id},{$set:{quantity:req.body.quantity}});
        console.log("Data updated Successfully");
    }else{
        Data.create(req.body)
        .then(data => res.json(data))
        .catch(err => console.log(err))
    } 
})

router.get('/med/search', async (req,res,err) => {
    const exist = await Data.find(req.query);
    if(exist){
        console.log("deep");
     console.log(exist);
        return res.json(exist);
    }
    else{
        return res.json('medicine not found');
    }
})

router.post('/adminLogin', async (req,res,next)=>{
    const exist = await Admin.findOne({phone :req.body.phone, password:req.body.password });
    if(exist)
    {
        return res.status(200).json(`${req.body.phone} login successfull`);
        // 
    }
    else 
    {
        return res.status(400).json('Invalid Login');
    }
    
})

export default router;