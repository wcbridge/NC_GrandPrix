
// Variables
var header_top = $('.header-top');
var nvBar = $('nav');



// toggle menu 
header_top.find('a').on('click', function() {
  $(this).parent().toggleClass('open-menu');
});

// fullpage customization
$('#fullpage').fullpage({
  sectionsColor: ['#82b8f6', '#232b2f', '#F2AE72'],
  sectionSelector: '.vertical-scrolling',
  navigation: true,
  controlArrows: false,
  anchors: ['firstSection', 'secondSection', 'thirdSection'],
  menu: '#menu',

  afterLoad: function(anchorLink, index) {
    header_top.css('background', 'rgba(0, 47, 77, .3)');
    nvBar.css('background', 'rgba(0, 47, 77, .25)');
    if (index == 5) {
        $('#fp-nav').hide();
      }
  },

  onLeave: function(index, nextIndex, direction) {
    if(index == 5) {
      $('#fp-nav').show();
    }
  }
}); 