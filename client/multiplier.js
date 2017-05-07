let multiply = require('./multiply')

class ViewManager {

  connectEventHandlers() {

    document.getElementById('multiply')
      .addEventListener(
        'submit',
        this.onSubmit.bind(this))

    document.getElementsByTagName('button')[0]
      .addEventListener(
        'click',
        () => {
          let div = document.createElement('div')
          div.innerHTML = '<input type="text" data-on="false" ' +
            '               onblur="event.target.setAttribute(\'data-on\', \'true\')">'

          let lastNode = document.getElementById('renderValue')
          lastNode.parentNode.insertBefore(div, lastNode)
        }
      )
  }

  onSubmit(event) {
    event.preventDefault()
    let value = 1,
        divInputs = document.getElementById('form-upper').getElementsByTagName('div')

    Array.from(divInputs).forEach( div => {
      let input = div.getElementsByTagName('input')[0]
      if(input.getAttribute('data-on') === 'true')
        value = multiply(value, parseInt(input.value))
    })

    this.renderValue(value)
  }

  renderValue(value) {
    document.getElementById('renderValue').innerText = value
  }

}

module.exports = new ViewManager

