let Event=require("events")

module.exports=class Userevent extends Event.EventEmitter{
    CreatEvent(){
        this.emit("CustemEvent",106);
    }
}
// const eventobject=new Event.EventEmitter();
// function get(){
//     console.log("thijdzb");
    
// }
// eventobject.addListener("put",get)
// eventobject.emit("put");
