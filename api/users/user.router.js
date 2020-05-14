const {createUser,
       getUserByUserId,
    //    getUsers,
       updateUsers,
       deleteUser  ,
       login 
    }=require('./user.controller');
const router=require("express").Router();
const pool=require('../../config/database');
const {checkToken } =require('../../auth/token_validation');


router.post('/',checkToken,createUser);
router.get('/',checkToken,(req,res)=>{
    pool.query('select * from registration',(error,results,fields)=>{
        
        if(error){
            console.log(error.message);
        }
        if(results.length==0){
           return res.send("users array is empty");
        }
        else{
                    // console.log(results);
                   return res.send(results);
            // console.log(error);
        }
    });

});
router.get('/:id',checkToken,getUserByUserId);
router.patch('/',checkToken,updateUsers);
router.delete('/',checkToken,deleteUser); 
router.post('/login',login);

module.exports=router; 