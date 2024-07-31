$(function() {
  var initialSliderValue = 5; // Initial slider value

  $("#year-slider .slider").noUiSlider({
    start: initialSliderValue,
    step: 1,
    connect: "lower",
    range: {
      'min': 0,
      'max': 10
    },
    serialization: {
      format: {
        decimals: 0
      }
    }
  });
  
  $('#year-slider .slider').on('change', function(){
    highlightLabel($(this).val());
  });
  
  $('#year-slider .slider').on('slide', function(){
    highlightLabel($(this).val());
  });

  function highlightLabel(value) {
    $('#year-slider .slider-labels li').removeClass('active');
    var index = parseInt(value) + 1;
    var selector = '#year-slider .slider-labels li:nth-child(' + index + ')';
    $(selector).addClass('active');
  }

  // Reset button functionality
  $('#resetButton').click(function() {
    $("#year-slider .slider").val(initialSliderValue);
    highlightLabel(initialSliderValue);
  });

  // Initialize the highlight for the initial value
  highlightLabel(initialSliderValue);
});
