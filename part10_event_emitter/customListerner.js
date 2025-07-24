const EventEmitter=require('events');

class CustomEmitter extends EventEmitter{
    constructor(){
        super();
        this.greeting="hello"
    }

    /**
     * !Making custom method that eventually ends on emits........
     */
    display(name){
        this.emit("greeting",`${this.greeting}, ${name}`);
    }
}

const customEmitter=new CustomEmitter();

customEmitter.on('greeting',(input)=>{
    console.log(`Greeting event`, input);
});

customEmitter.display("Kaif");