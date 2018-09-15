/* 
    Stack data structure is first in last out (FILO) DS
    It's implementation will be based on JS array
*/

// Constructor
function Stack() {
    this.size = 0;
    this.stack = [];
}

// Push method
Stack.prototype.push = function(val) {
    this.stack.push(val);
    this.size ++;
};

// Pop method
Stack.prototype.pop = function() {
    if(this.stack.length) {
        this.size --;
        return this.stack.pop();
    }
};

/*
    Operation   | Time Complexity
    Access      | O(n)           
    Search      | O(n)
    Insert      | O(1)
    Delete      | O(1)    
*/
