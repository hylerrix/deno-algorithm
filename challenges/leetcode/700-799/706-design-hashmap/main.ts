class MyHashMap {
  constructor() {

  }

  put(key: number, value: number): void {
    console.log(key, value)
  }

  get(key: number): void {
    console.log(key)
  }

  remove(key: number): void {
    console.log(key)
  }
}

const hashMap = new MyHashMap()
hashMap.put(1, 1)
hashMap.put(2, 2)
hashMap.get(1) // return 1
hashMap.get(3) // return -1 (can not find it)
hashMap.put(2, 1) // update specified item
hashMap.get(2) // return 1 
hashMap.remove(2) // delete item which key is 2
hashMap.get(2) // return -1 (未找到) 
