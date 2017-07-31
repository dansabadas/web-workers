function add(l,r){
    return l+r;
}

function substract(l,r){
    return l-r;
}

this.addEventListener('message', function(e){
    var currentFunc = null;
    switch(e.data.type){
        case 'add':
            currentFunc = add;
            break;
        case 'substract':
            currentFunc = substract;
            break;
    }

    let result = currentFunc.apply(this, e.data.args);
    this.postMessage({
        correlationId: e.data.correlationId,
        result: result
    });
});

