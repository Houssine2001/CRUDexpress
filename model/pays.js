const mongo=require('mongoose');
const schema = mongo.Schema;

const PAYS=new schema({
    name:String,
    captitale:String,
    code:Number,
})
module.exports=mongo.model("pays",PAYS,"paysCollection");