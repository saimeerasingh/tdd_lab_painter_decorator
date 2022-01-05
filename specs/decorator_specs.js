const assert = require('assert');
const Room = require('../room.js');

describe ('Room',function(){

    let room;

    beforeEach(function(){
        room = new Room(37)
    })


    it('it should have an area in squaremeters',function(){
        const actual = room.area
        assert.strictEqual(actual,37)
    })


    it('it should start not painted')

    it('it should be able to be painted')
})