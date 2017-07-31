function add(l,r){
    if(!parseFloat(l) || !parseFloat(r))
    {
        throw 'Must have 2 numeric inputs!';
    }

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
    let result = null;
    try{
        result = {
            isError: false,
            value: currentFunc.apply(this, e.data.args)
        };
    }
    catch(e){
        result = {
            isError: true,
            value: e
        };
    }
    this.postMessage({
        correlationId: e.data.correlationId,
        result: result
    });
});

