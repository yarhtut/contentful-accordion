window.contentfulExtension.init(function (extension) {
  var value = extension.field.getValue();
  var inputField = document.getElementsByClassName('input-text')[0];
  inputField.value = value;

  inputField.addEventListener('keyup', function(e) {
    if (e.keyCode == 13) {
      e.preventDefault();
      extension.field.setValue(e.target.value)
    }
  })
})

var acc = document.getElementsByClassName("accordion");

acc[0].addEventListener("click", function() {
  this.classList.toggle("active");
  var panel = this.nextElementSibling;
  if (panel.style.maxHeight){
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
})
