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
}

const maxheap = new MaxBinaryHeap();
maxheap.insert(1);
maxheap.insert(10);
maxheap.insert(3);
maxheap.insert(90);
console.log(maxheap.values);
