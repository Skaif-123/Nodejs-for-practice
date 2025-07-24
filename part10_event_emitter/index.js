const EventEmitter=require('events');
const eventEmitter= new EventEmitter();


eventEmitter.on('wish',(name)=>{
    console.log("Your Name is ",name);
})

eventEmitter.emit('wish',"Sofia");