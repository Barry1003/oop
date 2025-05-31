class MyArray {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    if (this.length === 0) return undefined;
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  shift() {
    if (this.length === 0) return undefined;
    const firstItem = this.data[0];
    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return firstItem;
  }

  unshift(item) {
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = item;
    this.length++;
    return this.length;
  }

  map(callback) {
    const result = new MyArray();
    for (let i = 0; i < this.length; i++) {
      result.push(callback(this.data[i], i));
    }
    return result;
  }

  filter(callback) {
    const result = new MyArray();
    for (let i = 0; i < this.length; i++) {
      if (callback(this.data[i], i)) {
        result.push(this.data[i]);
      }
    }
    return result;
  }

  find(callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this.data[i], i)) {
        return this.data[i];
      }
    }
    return undefined;
  }

  forEach(callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this.data[i], i);
    }
  }

  includes(value) {
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === value) return true;
    }
    return false;
  }

  reverse() {
    let start = 0;
    let end = this.length - 1;
    while (start < end) {
      const temp = this.data[start];
      this.data[start] = this.data[end];
      this.data[end] = temp;
      start++;
      end--;
    }
    return this;
  }

  print() {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      result.push(this.data[i]);
    }
    console.log(result);
  }
}
