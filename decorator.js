const Decorator = function(){
    this.stock = []
}

Decorator.prototype.getStock = function(){
    let total = 0
    for(const paint of this.stock){
    total += paint.volume
    
    }
    return total
}
