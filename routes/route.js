var express = require('express');
var router = express.Router();

const contact = require('../models/contact');


//fetch
router.get('/contacts',(req,res,next)=>{
	contact.find(function(err,result){
		if(err){
			console.log(err);
		}else{
			res.json(result);
		}
	})
});

//insert
router.get('/contact',(req,res,next)=>{
	let newContact = new contact({
		first_name : req.body.first_name,
		last_name : req.body.last_name,
		phone : req.body.phone
	});

	newContact.save((err,contact)=>{
		console.log(newContact);
		console.log("Here");
		if(err) res.json({msg:"Failed"});
		else{
			res.json({msg:"Contact created Successfully"});
		}
	});
});

//delete
router.get('/contact/:id',(req,res,next)=>{
	contact.remove({_id:req.params.id},function(err,result){
		if(err) throw err;
		else{ res.json(result);
		}
	});
});

// update
router.get('/contact/:id',(req,res,next)=>{res.send( )});
module.exports = router;