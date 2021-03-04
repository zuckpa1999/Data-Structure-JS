// Queue : First in First Out

let Queue = function () {

    this.collection = []


    //print the whole queue
    this.print = function () {
        console.log(this.collection)

    }
    //enqueue :add element at the end of the queue
    this.enqueue = function (element) {
        console.log(this.collection)
        this.collection.push(element)
        console.log(this.collection)




    }
    //dequeue : delete element at the beginning  of the queue
    this.dequeue = function () {

        return this.collection.shift()


    }

    //front : return first element in the array
    this.front = function () {
        return this.collection[0]


    }
    //size : return number of element in the array, size instead of length as to represent the implementation
    this.size = function (element) {
        return this.collection.length


    }
    //size : return whether the queue is empty or not
    this.isEmpty = function (element) {
        return (this.collection.length === 0)


    }

}


// Priority Queue


let PriorityQueue = function () {

    this.collection = []


    //print the whole queue
    this.print = function () {
        console.log(this.collection)

    }
    //enqueue :add element at the end of the queue
    this.enqueue = function (element) {
        if (this.isEmpty()) {
            console.log(this.collection)
            this.collection.push(element)
            console.log(this.collection)
        }
        else {
            let added = false
            for (let i = 0; i < this.collection.length; i++) {
                if (element[1] < this.collection[i][1]) {
                    // 1st - index where you want to add the new element, the old elmen will be pushed to be index+1
                    // 2rd deleteCount == 1 to delete == 0 to add element 
                    // 3rd element to be added
                    this.collection.splice(i, 0, element)
                    added = true
                    break;
                }
            }
            if (!added) {
                this.collection.push(element)
            }

        }



    }
    //dequeue : delete element at the beginning  of the queue
    this.dequeue = function () {
        let element = this.collection.shift()
        return element


    }

    //front : return first element in the array
    this.front = function () {
        return this.collection[0]


    }
    //size : return number of element in the array, size instead of length as to represent the implementation
    this.size = function (element) {
        return this.collection.length


    }
    //size : return whether the queue is empty or not
    this.isEmpty = function (element) {
        return (this.collection.length === 0)


    }

}


let queue1 = new PriorityQueue()
queue1.enqueue([1, 3])
queue1.enqueue([1, 3])
queue1.enqueue([2, 5])
queue1.enqueue([3, 6])
queue1.enqueue(['fefe', 3])
console.log(queue1.front())
console.log(queue1.dequeue())
console.log(queue1.dequeue())
queue1.print()
// queue1.print()