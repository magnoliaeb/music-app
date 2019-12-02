export const blur = {}

function setBlur (el, binding) {
  el.style.filter = !binding.value ? 'blur(3px)' : 'none'
  el.style.cursor = !binding.value ? 'not-allowed' : 'inhered'
  el.querySelectorAll('a').forEach((a) => {
    if (!binding.value) {
      a.setAtribute('disabled', true)
    } else {
      a.removeAtribute('disabled')
    }
  })
}

blur.install = function (Vue) {
  Vue.directive('blur', {
    bind (el, binding) {
      setBlur(el, binding)
    }
  })
}
