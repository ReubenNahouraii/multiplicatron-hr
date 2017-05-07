let multiply = require('./multiply')

class TestSuite {

  runTest(testName) {
    const result = this[testName]()
    console.log(result, testName)

  }

  runTests() {
    Object.getOwnPropertyNames(Object.getPrototypeOf(this))
      .filter(property => this[property] instanceof Function)
      .filter(property => property.indexOf('test') !== -1)
      .forEach(property => this.runTest(property))
  }

  assertEquals(a, b) { return a === b }

  testZeroNegative() {
    return this.assertEquals(multiply(5, 4), 20)
  }

  testOneNegative() {
    return this.assertEquals(multiply(-5, 4), -20)
  }

  testTwoNegative() {
    return this.assertEquals(multiply(-5, -4), 20)
  }
}

module.exports = new TestSuite