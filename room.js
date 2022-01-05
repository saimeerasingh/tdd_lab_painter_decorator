const Room = function(area){
    this.area = area
    this.painted = false
}
Room.prototype.isPainted = function(){
    return this.painted
}

module.exports = Room