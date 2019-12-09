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

    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return result;
  }

  sinkDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftIndex = index * 2 + 1;
      let rightIndex = index * 2 + 2;

      let leftValue, rightValue;
      let swap = null;

      if (leftIndex < length) {
        leftValue = this.values[leftIndex];
        if (leftValue > element) {
          swap = leftIndex;
        }
      }

      if (rightIndex < length) {
        rightValue = this.values[rightIndex];
        if (
          (swap === null && rightValue > element) ||
          (swap !== null && rightValue > leftValue)
        ) {
          swap = rightIndex;
        }
      }

      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
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
console.log(maxheap.extractMax());
console.log(maxheap.extractMax());
console.log(maxheap.extractMax());
console.log(maxheap.extractMax());
console.log(maxheap.values);
