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
    console.log('running positive test')
  }
}

module.exports = new TestSuite