'use strict';
/* 
    Queue data structure is first in first out (FIFO) DS
    It's implementation will be based on JS array
*/

// Constructor
function Queue() {
    this.size = 0;
    this.queue = [];
}

// Push method
Queue.prototype.enqueue = function(val) {
    this.queue.unshift(val);
    this.size ++;
};

// Pop method
Queue.prototype.dequeue = function() {
    if(this.queue.length) {
        this.size --;
        return this.queue.pop();
    }
};

module.exports = Queue;

/*
    Operation   | Time Complexity
    Access      | O(n)           
    Search      | O(n)
    Insert      | O(1)
    Delete      | O(1)    
*/
