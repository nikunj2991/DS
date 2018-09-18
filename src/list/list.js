'use strict';
/* 
    List data structure is a node based data structure
    It's implementation will be based on Node constructor
*/

// Node Constructor
function Node(val) { 
    this.val = val;
    this.next = null
}

// List Constructor
function List() {
    this.head = null;
    this.size = 0;
}

List.prototype.add = function(val) {
    var newNode = new Node(val);

    if(!this.head) {
        this.head = newNode;
    } else {
        var currentNode = this.head;
        while(currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
    }
    this.size++;
};

List.prototype.searchAt = function(position) {
    if(position > this.size) return null;
    var result = this.head;

    while(position > 0) { 
    	position--;
        result = result.next;
    }
    return result;
};

List.prototype.remove = function(position) {
    if(position > this.size || position < 0) return null;

    var currentNode = this.head;
    var previousNode = null;

    while(position > 0) {
        position--;
        previousNode = currentNode;
        currentNode = currentNode.next;
    }
    
    if(previousNode) {
    	previousNode.next = currentNode.next;
    } else {
    	this.head = currentNode.next;
    }

    return currentNode.val;
};

module.exports = List;

/*
    Operation   | Time Complexity
    Access      | O(n)           
    Search      | O(n)
    Insert      | O(n)
    Delete      | O(n)    
*/
