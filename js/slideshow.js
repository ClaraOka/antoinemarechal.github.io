// whenever we load the page, display the first slide
var currentSlide = 0

// here we set how many slides we have using .lenght property
// it is usefull when we are using our maximum slide value
var totalSlides = $('.holder div').length

var moveSlide = function(slide) {
  // we re going to turn our currentSlide value into a negative vw unit + 'vw' unit
  var leftPosition = -slide * 600 + 'px'
  // pass the vw unit into our css method below
  //here we grab the holder and change it to the second slide
  $('.holder').css('left', leftPosition)

  // here we set a slide Number variable increments by 1 because our array starts at 0
  var slideNumber = slide + 1
  // here we set the text for the steps using currentShlode and total number
  $('.steps').text(slideNumber + '/' + totalSlides)
}

////////////////////////////////////////////////////////

//1. a function that deals with taking us to the next slide
// here we assign a function to our nextSlide variable
var nextSlide = function() {
  console.log('nextSlide')
  // increment our currentSlide value by reassigning it and incrementing it by 1
  currentSlide = currentSlide + 1
  // here we test to check wheter the current slide is greater than or equal to the number of Slide, if it is we are going to set the currentSlide backto zero
  if (currentSlide >= totalSlides) {
    currentSlide = 0
  }
  moveSlide(currentSlide)
}

/////////////////////////////////////////////////////////////

//2. a function that deals with taking us to the previous slide
var previousSlide = function() {
  // this is a identical to the next slide function apart from that we are decrementing the currentslide calue
  currentSlide = currentSlide - 1
  // if our currentSlide is less than 0 we want to set our curretnSlide to the last one
  if (currentSlide < 0) {
    currentSlide = totalSlides - 1
  }

  var leftPosition = -currentSlide * 100 + 'vw'
  $('.holder').css('left', leftPosition)

  // here we set a slide Number variable increments by 1 because our array starts at 0
  var slideNumber = currentSlide + 1

}

//////////////////////////////////////////////////////////////

// set Interval alllows us to run a unction everey X amout of time
var autoSlide = setInterval(function() {
  //here our nextSlide function will be run
  nextSlide()
  // runs every 3s
}, 3000)
