// Main JavaScript File

// You'll have to wait for you page to load to assign events to the elements created in your index.html file
$(function() {

  // Select the element with id `sandbox` and append a `div` element to it. Make sure to store the div in a JavaScript varaible

  var div1 = d3.select('#sandbox').append('div');
  // Create a variable `mySvg` by appending an `svg` element to your newly created `div`
  var mySvg = div1.append('svg');
  mySvg.attr('width', 300).attr('height', 300);
  // Set both the width and height attributes of your `svg` to 300

  // Append a `circle` element to your `svg`, setting the properties noted in index.html
  var circle = d3.select('circle');
  mySvg.append('circle');
  circle.attr('r', 20).attr('cx', 50).attr('cy', 50).attr('opacity', 0.5).attr('fill', blue);
  // Append a `rect` element to your `svg`, setting the properties noted in index.html

});
