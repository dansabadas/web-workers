let ports = [],
    i = 0;
this.addEventListener('connect', function(e){
    //console.log(e);
    let port = e.ports[0];
    ports.push(port);
    //port.start();

    setInterval(function(){
        i++;
        ports.forEach(function(port){
            port.postMessage('sending message ' + i);
        });
    }, 500);
    // port.addEventListener('message', function(e){
    //     console.log('received ', e.data);
    // });
});