this.addEventListener('message', function(e){
    console.log(e);
    this.close(); // another way to fishish a worker from inside
}.bind(this));