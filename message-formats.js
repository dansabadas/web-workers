function add(l,r){
    this.postMessage(l+r);
}

function substract(l,r){
    this.postMessage(l-r);
}

this.addEventListener('message', function(e){
    switch(e.data.type){
        case 'add':
            add.apply(this, e.data.args);
            break;
        case 'substract':
            substract.apply(this, e.data.args);
            break;
    }
});