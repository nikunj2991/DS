'use strict';

var Queue = require('./queue');

describe('Queue', function() {

    it('should create an empty queue', function() {
        var newQueue = new Queue();
        
        expect(newQueue.size).toBe(0);
        expect(newQueue.queue).toEqual([]);
    });

    describe('Queue operations', function() {
        var myQueue;

        beforeEach(function() {
            myQueue = new Queue();
        });

        it('should add 2 new elements', function() {
            myQueue.enqueue(12);

            expect(myQueue.queue[0]).toBe(12);
            expect(myQueue.size).toBe(1);

            myQueue.enqueue(31);

            expect(myQueue.queue[0]).toBe(31);
            expect(myQueue.size).toBe(2);
        });

        it('should remove the last added elment', function() {
            myQueue.enqueue(12);
            myQueue.enqueue(21);
            myQueue.enqueue(9);

            expect(myQueue.size).toBe(3);

            var poppedElement = myQueue.dequeue();

            expect(poppedElement).toBe(12);
            expect(myQueue.size).toBe(2);
        });
    });
});