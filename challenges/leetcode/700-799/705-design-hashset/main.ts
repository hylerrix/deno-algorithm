class MyHashSet {
  hash: number[] = []

  constructor() {
    this.hash = []
  }

  add(key: number): void {
    if (this.contains(key)) { return }
    this.hash.push(key)
  }

  remove(key: number): void {
    this.hash = this.hash.filter((i: number) => i !== key)
  }

  contains(key: number): boolean {
    return this.hash.indexOf(key) !== -1
  }
}

const hashSet = new MyHashSet()
hashSet.add(1)
hashSet.add(2)
hashSet.contains(1)
hashSet.contains(3)
hashSet.add(2)
hashSet.contains(2)
hashSet.remove(2)
hashSet.contains(2)
