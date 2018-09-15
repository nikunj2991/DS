describe('Stack', function() {
   
    it('should create a new empty stack', function() {
        var newStack = new Stack();
        expect(newStack.size).toBe(0);
        expect(newStack.stack).toEqual([]);
    });

    describe('Stack operations', function() {
        var myStack;

        beforeEach(function() {
            myStack = new Stack();
        });

        it('should add 2 new elements', function() {
            myStack.push(12);
            expect(myStack.stack[0]).toBe(12);
            expect(myStack.size).toBe(1);
            
            myStack.push(31);
            expect(myStack.stack[1]).toBe(31);
            expect(myStack.size).toBe(2);
        });

        it('should remove the last added elment', function() {
            myStack.push(12);
            myStack.push(21);
            myStack.push(9);
            expect(myStack.size).toBe(3);
            var poppedElement = myStack.pop();

            expect(poppedElement).toBe(9);
            expect(myStack.size).toBe(2);
        });
    });
});