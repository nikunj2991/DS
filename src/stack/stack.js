/* 
    Stack data structure is first in last out (FILO) DS
    It's implementation will be based on JS array
*/

// Constructor
export default function Stack() {
    this.size = 0;
    return [];
}

// Push method
Stack.prototype.push = function(val) {
    this.push(val);
    this.size++;
};

// Pop method
Stack.prototype.pop = function() {
    if(this.size) {
        this.pop();
        this.size--;
    }
};

/*
    Operation   | Time Complexity
    Access      | O(n)           
    Search      | O(n)
    Insert      | O(1)
    Delete      | O(1)    
*/
