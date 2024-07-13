class Queue {
  elements
  constructor(){
    this.elements = []
  }
  
  size() {
    return this.elements.length;
  }
  add(item) {
    this.elements.push(item);
  }
  peek() {
    if (this.elements.length > 0) {
      return this.elements[0];
    }
    return null;
  }

  dequeue() {
    if(this.elements.length > 0) {
      return this.elements.shift();
    }
    return null
  }
}

module.exports = Queue;