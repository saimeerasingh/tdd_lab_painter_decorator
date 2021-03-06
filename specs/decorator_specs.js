const assert = require('assert');
const Paint = require('../paint.js');
const Room = require('../room.js');
const Decorator = require('../decorator.js');

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

    it('it should be able to check if its empty',function(){
        const actual = paint.isEmpty()
        assert.strictEqual(actual,false)
    })
    it('it should be able to empty itself of paint',function(){
        paint.setEmpty()
        const actual = paint.isEmpty()
        assert.strictEqual(actual,true)
    })
})

describe('Decorator',function(){

    let decorator;

    beforeEach(function(){
        decorator = new Decorator()
    })

    it('it should start with an empty paint stock',function(){
        const actual = decorator.getStock()
        assert.strictEqual(actual,0)
    })
    it('it should be able to add a can of paint to stock')
    it('it should be able to calculate total number of liters of paint in stock')
    it('it should be able to calculate whether is has enough paint to paint a room')
    it('it should be able to paint room if has enough paint in stock')
})
})