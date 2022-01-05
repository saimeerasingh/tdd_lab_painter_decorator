const assert = require('assert');
const Paint = require('../paint.js');
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


    it('it should start not painted',function(){
        const actual = room.isPainted()
        assert.strictEqual(actual, false)
    })

    it('it should be able to be painted',function(){
        room.paint()
        const actual = room.isPainted()
        assert.strictEqual(actual,true)
    });

describe('Paint', function(){

    let paint;

    beforeEach(function(){
        paint = new Paint(10)
    })

    it('it should have a number of liters of paint',function(){
    const actual = paint.volume
    assert.strictEqual(actual,10)
    })





    it('it should be able to check if its empty')
    it('it should be able to empty itself of paint')
})
})