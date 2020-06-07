//setup materialize components
document.addEventListener("DOMContentLoaded", function() {
  var models = document.querySelectorAll(".modal");
  M.Modal.init(models);
  var items = document.querySelectorAll(".collapsible");
  M.Collapsible.init(items);
});
