$('.submit').on('click', function(){
    var imePrezime = $('#visitor').val();
    var samoSlova = /^[a-zA-Z\s]+$/;
    if (!samoSlova.test(imePrezime)) {
        alert('Uneli ste nedozvoljen karakter.');
    } else {
        let utisak = $('#comment').val();
        alert(utisak  + ' Vaš utisak je poslat!');
    }
    
})

document.getElementById('visitor').addEventListener('focus', function(){
    this.style.borderWidth = "3px"
    this.style.backgroundColor = "#978365"
})

document.getElementById('visitor').addEventListener('blur', function(){
    this.style.borderWidth = "1px"
    this.style.backgroundColor = "#FFFFFF"
})


