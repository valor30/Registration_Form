$(function() {
    $('.button-checkbox').each(function() {
  
      // Settings
      var $widget = $(this),
        $button = $widget.find('button'),
        $checkbox = $widget.find('input:checkbox'),
        color = $button.data('color'),
        settings = {
  
          on: {
            icon: 'glyphicon glyphicon-check'
          },
          off: {
            icon: 'glyphicon glyphicon-unchecked'
          }
        };
  
      // Event Handlers
      $button.on('click', function() {
        $checkbox.prop('checked', !$checkbox.is(':checked'));
        $checkbox.triggerHandler('change');
        updateDisplay();
      });
  
      $checkbox.on('change', function() {
        updateDisplay();
      });
  
      // Actions
      function updateDisplay() {
        var isChecked = $checkbox.is(':checked');
        // Set the button's state
        $button.data('state', (isChecked) ? "on" : "off");
        // Set the button's icon
        $button.find('.state-icon')
        .removeClass()
        .addClass('state-icon ' + settings[$button.data('state')].icon);
        // Update the button's color
        if (isChecked) {
          $button
            .removeClass('btn-default')
            .addClass('btn-' + color + ' active');
          $("#t_and_c").val(1);
        } else {
          $button
            .removeClass('btn-' + color + ' active')
            .addClass('btn-default');
          $("#t_and_c").val(0);
        }
      }
  
      // Initialization
      function init() {
        updateDisplay();
        // Inject the icon if applicable
        if ($button.find('.state-icon').length == 0) {
          $button.prepend(' ');
        }
      }
      init();
    });
  });
  
  $("#check_pass2 input").keyup(validate);
  function validate() {
    var pas1 = $("#check_pass1 input").val(),
        pas2 = $("#check_pass2 input").val(),
        pas2_on = $("#check_pass2 i");
    if (pas1 == pas2) {
      pas2_on.attr('class', 'glyphicon glyphicon-ok');
      $("#check_pass2").removeClass('not-valid').addClass("valid");
    } else {
      if (!pas2_on.hasClass("not_valid")) {
        pas2_on.attr('class', 'glyphicon glyphicon-remove');
        $("#check_pass2").removeClass('valid').addClass("not-valid");
      }
    }
  }