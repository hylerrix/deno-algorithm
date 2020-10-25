// JS 题：继承，子类能重写父类的方法的同时，将父类这个方法的返回值改造一下
// （父类 getName 的 this.name = '1' 的话，子类 getName 是 '1 - 改造了'）

class Parent {
  name = ''
  firstName = ''
  lastName = ''

  getName() {
    this.name = 'parent'
  }
}

class Child {
  firstName = ''
  getName() {
    // parent.lastName + this.firstName
  }
}

