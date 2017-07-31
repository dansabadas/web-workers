this.addEventListener('message', function(e){
    console.log(this + ' Message received: ' +  e.data);
});

let i = 0;

setInterval(function(){
    this.postMessage(this + ' counter value: ' + i++);
}.bind(this), 2000);