const Paint = function(volume){
    this.volume = volume
    this.empty = false
}
Paint.prototype.isEmpty = function(){
    return this.empty
}
Paint.prototype.setEmpty = function(){
    this.empty = true
}
module.exports = Paint