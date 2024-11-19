const express = require('express')
const router = express.Router()

//middleware

const auth = function (req , res, next){
    console.log("i am inside AUTH MIDDLEWARE")
    //for convinence adding dummy user
    req.user = {userID :1 , role:"admin"}
    if(req.user){
        //if a valid user in request then proceed
        next();
    }
    else{
        res.json({
            sucess : false,
            message : "you are not a valid user",
        })
    }
}

const isStudent = function( req , res, next){
    console.log("I AM STUDENT MIDDLEWARE");

    if(req.user.role === "student"){
        next();
    }
    else{
        res.json({
        sucess : false,
        message : "ACESS DENIED ,THIS ROUTE IS ONLY FOR STUDENT",
    })

    }
}

    const isAdmin = function(req,res,next){
        console.log(" I AM INSIDE ADMIN SIDE MIDDLEWARE")
        if(req.user.role === "admin"){
            next();
        }
        else{
            res.json({
                sucess : false,
                message : "ACESS DENIED ,THIS ROUTE IS ONLY FOR ADMINS ",
            })
        
            
        }
    }



// define the about route
router.get("/student" ,auth , isStudent , (res, req) => {
     console.log("I AM INSIDE STUDENT ROUTE")
     res.setEncoding("STUDENT SPECIFIC PAGE")
})

router.get("/admin" , auth , isAdmin , (req , res) => {
    console.log("I AM INSIDE ADMIN ROUTE")
    res.setEncoding("ADMIN SPECIFIC PAGE")
})
module.exports = router