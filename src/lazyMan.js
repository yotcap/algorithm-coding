/**
 * LazyMan 的 ES5、ES6 实现
 * 
 * 
 * LazyMan('daming')
 * --> 'hi! daming'
 * 
 * 
 * LazyMan('daming').sleep(10).eat('dinner')
 * --> 'hi! daming'
 *     (等待10s)
 * --> 10 seconds passed
 * --> eat dinner
 * 
 * 
 * LazyMan('daming').eat('apple').eat('banana')
 * --> hi! daming
 * --> eat apple
 * --> eat banana
 * 
 * 
 * LazyMan('daming').sleepFirst(10).eat('apple')
 *     (等待10s)
 * --> 10 seconds passed
 * --> hi! daming
 * --> eat apple
 * 
*/


/**
 * ES5 实现
*/
const LazyMan = function (name) {
  if (!(this instanceof LazyMan)) return new LazyMan(name);   // 可省去 new 实例
  this.tasks = [];
  this.tasks.push(() => {
    console.log(`hi! ${name}`);
    this.next();
  })
  setTimeout(() => {
    this.next();    // 执行栈为空时才继续执行
  }, 0);
}

LazyMan.prototype = {
  next: function () {
    if (this.tasks.length) {
      const fn = this.tasks.shift();
      fn & fn();
    }
  },
  sleep: function (time) {
    this.tasks.push(() => {
      setTimeout(() => {
        console.log(`${time} seconds passed`);
        this.next();
      }, time*1000);
    });
    return this;
  },
  sleepFirst: function (time) {
    this.tasks.unshift(() => {
      console.log(`please wait ${time} seconds`);
      setTimeout(() => {
        console.log(`${time} seconds passed`);
        this.next();
      }, time*1000);
    });
    return this;
  },
  eat: function (sth) {
    this.tasks.push(() => {
      console.log(`eat ${sth} now`);
      this.next();
    });
    return this;
  }
}

// LazyMan('daming');
// LazyMan('daming').eat('apple');
// LazyMan('daming').sleep(3).eat('banana');
// LazyMan('daming').eat('apple').sleep(3).eat('banana');
LazyMan('daming').sleepFirst(3).eat('apple');



/**
 * ES6 实现
*/
class LazyMan6 {
  constructor (name) {
    this.tasks = [];
    this.tasks.push(() => {
      console.log(`hi! ${name}`);
      this.next();
    });
    setTimeout(() => {
      this.next();
    }, 0);
  }
  next () {
    if (this.tasks.length) {
      const fn = this.tasks.shift();
      fn & fn();
    }
  }
  sleep (time) {
    this.tasks.push(() => {
      console.log(`please wait ${time} seconds`);
      setTimeout(() => {
        this.next();
      }, time*1000);
    });
    return this;
  }
  sleepFirst (time) {
    this.tasks.unshift(() => {
      console.log(`please wait ${time} seconds`);
      setTimeout(() => {
        this.next();
      }, time*1000);
    });
    return this;
  }
  eat (sth) {
    this.tasks.push(() => {
      console.log(`eat ${sth}`);
      this.next();
    });
    return this;
  }
}

const lm = (name) => new LazyMan6(name);

// lm('daming');
// lm('daming').eat('apple');
// lm('daming').sleep(3).eat('apple');
// lm('daming').eat('apple').sleepFirst(3).eat('banana');
