$(".glavnaSlika").hide().slideDown(3000);

document.getElementsByClassName('naslov').addEventListener('mouseover', function () {
  this.style.color = 'blue'; // Change color on mouseover using JavaScript
});

document.getElementsByClassName('naslov').addEventListener('mouseout', function () {
  this.style.color = 'black'; // Change color back to default on mouseout using JavaScript
});
  
