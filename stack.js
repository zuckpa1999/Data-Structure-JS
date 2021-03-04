//stack

// stack of book
// Last In First Out //

// Operation L push, pop , peek , length
// push : placing element onto the stakc
//pop : removing top element of the stack
//peek : displaying top element of the stack
//length : determining the element in the stack

// JS  - already Implemented, can use array as stack

// JS -- Array --  push , pop

let Stack = function () {

    this.count = 0
    this.stack = []

    //push : add value onto the end of the stack
    this.push = function (value) {
        this.stack[this.count] = value
        this.count++
    }
    //pop : remove and return element at the top of the stack


    this.pop = function () {
        if (this.count === 0) {
            // undefined vs null
            return undefined
        }
        this.count--
        let removedElement = this.stack[this.count]
        delete this.stack[this.count]
        return removedElement
    }

    // size : cuz length already exist for prototype array. this serves as a way to show the implementation step for the operation
    this.size = function () {
        return this.count
    }

    //peek : return value at the top of the stack

    this.peek = function () {
        return this.stack[this.count - 1]
    }

}


let stack1 = new Stack()
stack1.push(1)
stack1.push(2)
stack1.push(3)
stack1.push(4)
stack1.push(5)
console.log(stack1.size())
console.log(stack1.peek())
console.log(stack1.pop())
console.log(stack1.peek())
console.log(stack1.size())



