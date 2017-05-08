/**
 * Created by emyr on 03/05/17.
 */
let CrochetBinding = require('./CrochetBinding')
function CrochetBinder(bindings, model) {
  this.bindings = {}
  Object.keys(bindings).forEach(binding => {
    bindings[binding.name] = new CrochetBinding(binding, model)
  })
}

CrochetBinder.prototype.bind = function (name, element) {
  this.bindings[name].bind(element)
}

CrochetBinder.prototype.trigger = function (name) {
  this.bindings[name].trigger()
}

CrochetBinder.prototype.hasBinding = function (name) {
  if(this.bindings[name]) {
    return true
  }
  return false
}
module.exports = CrochetBinder
