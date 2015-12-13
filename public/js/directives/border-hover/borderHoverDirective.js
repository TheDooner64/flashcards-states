app.directive('borderHover', function() {
  return {
    restrict: 'A',
    link: function(scope, element) {
      element.on('mouseenter', function() {
        element.addClass('border-thicken');
      });

      element.on('mouseleave', function() {
        element.removeClass('border-thicken');
      });
    }
  }
});