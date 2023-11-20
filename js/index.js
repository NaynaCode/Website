$(".glavnaSlika").hide().slideDown(3000);

document.getElementsByClassName('naslov').addEventListener('mouseover', function () {
  this.style.color = 'blue'; 
});

document.getElementsByClassName('naslov').addEventListener('mouseout', function () {
  this.style.color = 'black'; 
});
  
