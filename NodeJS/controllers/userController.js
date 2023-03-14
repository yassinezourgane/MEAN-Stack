const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var {User} = require('../models/User.js');
router.get('/', (req, res) => {
    User.find((err,docs) => {
        if(!err){res.send(docs)}
        else {console.log('Error in retrieving Users : '+ JSON.stringify(err, undefined, 2));}
    });
});
15

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id : ${req.params.id}');
    
    User.findById(req.params.id, (err,doc) =>{
        if(!err){res.send(doc)}
        else {console.log('Error in User save : '+ JSON.stringify(err, undefined, 2));}
    })
});

router.post('/',(req,res)=>{
    var usr = new User({
        name: req.body.name, 
        position: req.body.position, 
        office: req.body.office,  
        salary: req.body.salary,
    });
    usr.save((err,doc) =>{
        if(!err){res.send(doc)}
        else {console.log('Error in User save : '+ JSON.stringify(err, undefined, 2));}
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id :  ${req.params.id}');
    
        var usr = {
            name: req.body.name, 
            position: req.body.position, 
            office: req.body.office,  
            salary: req.body.salary,
        };
        User.findByIdAndUpdate(req.params.id, {$set : usr},{new : true}, (err,doc) =>{
            if(!err){res.send(doc)}
            else {console.log('Error in User Update : '+ JSON.stringify(err, undefined, 2));}
        })
});


router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id :  ${req.params.id}');
    
    User.findByIdAndUpdate(req.params.id, {$set : usr},{new : true}, (err,doc) =>{
        if(!err){res.send(doc)}
        else {console.log('Error in User Delete : '+ JSON.stringify(err, undefined, 2));}
        })
});

module.exports = router;