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

    let lastIndex = this.values.length - 1;
    let parentIndex = 0;

    [this.values[parentIndex], this.values[lastIndex]] = [
      this.values[lastIndex],
      this.values[parentIndex],
    ];

    this.values.length--;

    const childMap = {};

    let left = Math.floor(parentIndex * 2 + 1);
    let right = Math.floor(parentIndex * 2 + 2);

    childMap[this.values[left]] = left;
    childMap[this.values[right]] = right;

    while (parentIndex < this.values.length) {
      console.log('thisvalues', this.values);
      console.log('first', childMap);
      let max = Math.max(this.values[left], this.values[right]);
      let maxIndex = childMap[`${max}`];

      [this.values[maxIndex], this.values[parentIndex]] = [
        this.values[parentIndex],
        this.values[maxIndex],
      ];

      console.log('after first swap', this.values);

      parentIndex = maxIndex; // 1
      left = Math.floor(parentIndex * 2 + 1);
      right = Math.floor(parentIndex * 2 + 2);

      if (left < this.values.length) {
        childMap[this.values[left]] = left;
      }

      if (right < this.values.length) {
        childMap[this.values[right]] = right;
      }
    }

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
