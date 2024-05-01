// if (true) {
//   var x = 3;
// }
// console.log(x);

// if (true) {
//   let y = 3
// }
// console.log(y)

// console.log(f())
// function f() {
//   return 3
// }

// new x();
// class x {}

// console.log(x);
// let x = 3;
// console.log(x);

// function foo() {
//   console.log(x)
// }
// foo();
// let x = 3;
// foo();

// function inc(x) {
//   return x + 1;
// }

// let inc2 = x => x + 1

// let inc3 = (x,y) => x + y

// let inc4 = () => 7

// let inc5 = (x) => {
//   console.log(x)
//   return 7
// }

// this.x = 7;
// setTimeout(
//   () => console.log(this.x), 5000
// )

// let vals = []
// for(let x = 0; x < 4; x += 1) {
//   vals.push( () => x )
// }
// console.log(vals.map(x => x()))
// console.log(vals)

// const obj = {par: 3 }

// obj = 4

// obj.par = 12
// console.log(obj)

// Object.freeze(obj);
// obj.par = 10;
// console.log(obj)

// obj.newParam = 3
// console.log(obj)

// Object.seal(obj);
// obj.newParam = 3
// console.log(obj)

// let nameo = 'John';
// const x = `Hi ${nameo},
// Did you know that 5*3 = ${5*3}?`;
// console.log(x)

// let x = 3
// let xo = {x}
// console.log(xo)

// let y = 3;
// let yo = {y:y}
// console.log(yo)

// let foo = {
//   f(x) {
//     return x + 1
//   }
// }
// console.log(foo.f(3))

// let foo = {
//   toString() {
//     super.toString() + ' with foo!'
//   }
// }
// console.log(foo.toString())

// let ind = 100
// let foo = {
//   ['question' + ind] : 'question number '+ ind ,
//   ['answer' + ind](x) {
//     return ind === x;
//   }
// }
// console.log(foo.question100)
// console.log(foo.answer100(100))

// let s1 = Symbol('test')
// let s2 = Symbol('test')
// console.log(s1 === s2)
// class Jedi {
//   constructor() {
//     this.forceIsDark = false;
//   }
//   toString() {
//     return (this.forceIsDark ? 'Join' : 'Fear is the path to') +
//     ' the dark side';
//   }
// }
// class Sith extends Jedi {
//   constructor() {
//     super()
//     this.forceIsDark = true
//   }
// }

// let yoda = new Jedi()
// let darth = new Sith()
// console.log(yoda.toString())
// console.log(darth.toString())
// console.log(darth instanceof Sith)
// console.log(darth instanceof Jedi)

// class Util {
//   static inc(x) {return x+1}
//   static dec(x) {return x-1}
// }
// console.log(Util.inc(3))
// console.log(Util.dec(3))

// class O {
//   constructor() {
//     this.mx = 'initial'
//   }
//   get x() {
//     return this.mx
//   }
//   set x(val) {
//     console.log('x changed')
//     this.mx = val
//   }
// }
// let o = new O()
// console.log(o.x)
// o.x = 'NEWVAL'
// console.log(o.x)

// var a = new ANumber(3)
// class ANumber {
//   constructor(n) {
//     this.x = n
//   }
// }

// for (let n of ["a", "b", "c"]) {
//   console.log(n);
// }

// let x = [..."abcd"];
// console.log(x);

// let y = ([a, b, c, d] = "xy12");
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// let j = Array.from("123");
// console.log(j)

// let it = [1, 2, 3] [Symbol.iterator] ()
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

// let a = "Hello".startsWith('Hell')
// let b = "Goodbye".endsWith('bye')
// let c = "Jar".repeat(2)
// let d = "abcdef".includes('bcd')

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

// let arrayLike = {
//   0: 'zero',
//   1: 'one',
//   2: 'two',
//   3: 'three',
//   'length': 4
// }
// let arr = Array.from(arrayLike)
// console.log(arr)

// let n = [0, 1, 2, 3, 4, 5, 6]
// let y = Array.from(n, x => x*x)
// console.log(y)

// let x = Array.of(1, 2, 3, 4)
// console.log(x)

// let y = new Array(2)
// y[0] = 10
// y[1] = 2
// console.log(y)

// let x = ['a', 'b', 'c'].keys()
// console.log(x)
// let y = [...['a', 'b', 'c'].keys()]
// console.log(y)
// let z = Array.from(['a', 'b', 'c'].entries())
// console.log(z)

// let x = [4, 100, 7].find(x => x > 5)
// console.log(x)
// let y = [4, 100, 7].findIndex(x => x > 5)
// console.log(y)
// let z = (new Array(7)).fill(2).fill(4, 1, 6)
// console.log(z)

// let x = {a:1}
// Object.assign(x, {b:2})
// console.log(x)
// Object.is('y', 'y')
// Object.is({x:1}, {x:1})
// Object.is(NaN, NaN)

// var m = new Map([
//   [1, 'first']
// ])
// console.log(m)

// var m = new Map([
//   [1, 'first'],
//   [{}, 'second']
// ])
// console.log(m)

// var m = new Map([
//   [1, 'first'],
//   [{}, 'second']
// ])
// m.set(x => x+1, 'third')
// console.log(m)

// var m = new Map([
//   [1, "first"],
//   [{}, "second"],
// ]);
// m.set((x) => x + 1, "third");
// m.set({}, "fourth");
// console.log(m);

// var key = {}
// var m = new Map([
//   [key, 'first'], [1, 'second']
// ])
// console.log(m.get(key))
// console.log(m.has({}))
// console.log(m.delete(key))
// console.log(m.size)
// console.log(m.clear())
// console.log(m.size)
// console.log(m.forEach((val, key) => {}))

// let m = new Map([...'abcd'].map(x => [x, x + x]))
// console.log(m)
// console.log(JSON.stringify([...m]))
// console.log(JSON.stringify([...m.keys()]))
// console.log(JSON.stringify([...m.values()]))
// console.log(JSON.stringify([...m.entries()]))


// let s = new Set(['red', 'blue'])
// console.log(s)
// console.log(s.add('yellow'))
// console.log(s.add('red'))
// console.log(s.has('blue'))
// console.log(s.delete('blue'))
// console.log(s.size)
// console.log(s)
// console.log([...s])
// console.log(s.clear())
// console.log(JSON.stringify([...s.values()]))
// console.log(JSON.stringify([...s.entries()]))
// console.log(JSON.stringify([...s.keys()]))


// function* genFour() {
//   yield 1
//   yield 2
//   yield 3
//   return 4
// }
// let four = genFour()
// console.log(four.next())
// console.log(four.next())
// console.log(four.next())
// console.log(four.next())

// console.log([...genFour()])
// console.log( Array.from([...genFour()]) )


// function* flatten(arr) {
//   for(let x of arr) {
//     if (x instanceof Array) {
//       yield* flatten(x)
//     } else{
//       yield x
//     }
//   }
// }
// let t = flatten([1, 2, [3, 4]])
// console.log(t.next())
// console.log(t.next())
// console.log(t.next())
// console.log(t.next())
// console.log(t.next())
// console.log(Array.from(flatten([1, 2, [3, 4]])))
// console.log(...flatten([1, 2, [3, 4]]))


// let a = {x:1, y:2}
// console.log(a)
// let {x:x} = a
// console.log(x)


// let a = {x:1, y:2}
// let {x:x, y:z} = a
// console.log('x=' + x)
// console.log('z=' + z)
// let {y} = a
// console.log('y=' + y)


// let a = { x:{ y:3 } }
// let { x:{ y:z } } = a
// console.log('z=' + z)

// let {length: len1} = [1,2,3,40]
// console.log(len1)

// let {length: len2} = [1,2,3,40]
// console.log(len2)


// let [a, [b]] = [3, [5]]
// console.log(b)

// function* genInf() {
//   for(let i=0;;i++) yield i;
// }

// let [x,y,z] = genInf()
// console.log(x)
// console.log(y)
// console.log(z)


// let [a,b= 3 , c= 7] = [1, undefined]
// console.log('a= ' + a)
// console.log('b= ' + b)
// console.log('c= ' + c)

// let {x:x = 1 , y:y = 2 , z:z = 3} = {x: undefined , z:7}
// console.log(x)
// console.log(y)
// console.log(z)


// function con() {
//   console.log('TEST')
//   return 10
// }

// console.log(con())
// let [x = con()] = []
// console.log(x)

// let [y = con()] = [5]
// console.log(y)


// let [x = y, y = 0] = []
// console.log(x)
// console.log(y)
// let [z = 7, n = z] = []
// console.log(z)
// console.log(n)


// let [, , ...y] = [1,2,3,4,5]
// console.log(y)


// let reverse=([x, ...y])=>(y.length > 0)?[...reverse(y), x]:[x]
// console.log( reverse([1,2,3,4,5,6]) )

// let [x, ...y] = [1,2,3,4,5,6]
// console.log(y)


// console.log([1, 2, ...[3, 4]])
// console.log(-5, ...[2,5,4], 1)


// function* squares(n) {
//   for(let i = 1; i < n; i += 1) {
//     yield Math.pow(i,2)
//   }
// }
// console.log([...squares(10)])


//**** Shape.js *****
// export default class Shape {
//   getColro() {/*...*/}
// }
//**** Main.js *****
// import Shape from 'Shape'
// let shape = new Shape()


//**** Circle.js *****
// export function diameter(r) {
//   return 2 * Math.PI * r
// }
// export let area = r => Math.pow(Math.PI * r, 2)
//**** Main.js *****
// import {area as circleArea, diameter} from 'Circle'
// import area as cubeArea from 'Cube'
// import * as tri from 'Triangle'
// circleArea(5)
// cubeArea(4)
// tri.area(3)


// System.import('module')
// .than(module => {})
// .catch(error => {})


// let target = function() {}
// let handler = {
//   apply(target, thisArg, argsList) {
//     return 42
//   }
// }
// let p = new Proxy(target, handler)
// console.log(p())


// let target = { a:7 }
// let handler = {
//   get(target, name) {
//     return target[name] + 10
//   }
// }
// let p = new Proxy(target, handler)
// console.log(p.a)
// console.log(p.b)