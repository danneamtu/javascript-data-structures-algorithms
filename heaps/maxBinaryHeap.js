class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(num) {
    this.values.push(num);

    let index = this.values.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);

    while (this.values[parentIndex] < this.values[index]) {
      [this.values[parentIndex], this.values[index]] = [
        this.values[index],
        this.values[parentIndex],
      ];

      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  extractMax() {
    const result = this.values[0];
    const end = this.values.pop();

    this.values[0] = end;

    return result;
  }
}

const maxheap = new MaxBinaryHeap();
maxheap.insert(1);
maxheap.insert(10);
maxheap.insert(3);
maxheap.insert(90);
maxheap.insert(101);
console.log(maxheap.values);
console.log(maxheap.extractMax());
console.log(maxheap.values);
