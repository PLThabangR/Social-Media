import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
    from:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    to:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    type:{
        type:String,
        required:true,
        enum:["follow","like"]
    },
    read:{
        type:Boolean,
        default:true
    }


},{timestamps:true})

const notificationModal = mongoose.model("Notification",notificationSchema);
export default notificationModal;