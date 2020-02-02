$(document).ready(function ($) {
  $("#accordeon dl:not(:first-child)").hide();

  $("#thumb-selector a").click(function(e){
    e.preventDefault();
    $('#pnl'+this.name).show('fast');
    $('#pnl'+this.name).siblings().hide();
  });
})
