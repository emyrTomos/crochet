/**
 * Created by emyr on 07/05/17.
 */
function CrochetBinding(binding, proxy) {
  this.name = binding.name
  this.action = binding.action
  this.boundReaders = []
  this.boundWriters = []
  this.proxy = proxy
}

CrochetBinding.prototype.init = function () {
  this.targetPhase = this.trigger.bind(this)
}

CrochetBinding.prototype.trigger = function (ev) {
  let value = ev.target.value
  let el = ev.target
  if (typeof this.action === 'function') {
    this.action.call(this.proxy, value)
  } else {
    this.proxy[this.action] = value
  }
  //create a custom event that reflects the change and despatch it to every listener except el
  this.boundReaders.forEach(despatch(customEvent))
}

CrochetBinding.prototype.bindElement = function (element) {
  element.addEventListener ('change', this.targetPhase)
  this.boundWriters.push(element)
}

CrochetBinding.prototype.unbindElement = function (element) {
  element.removeEventListener ('change', this.targetPhase)
}
