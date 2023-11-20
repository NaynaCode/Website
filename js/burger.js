
document.getElementById("hamburger-meni").addEventListener("click", function () {
    document.getElementById("nav-lista").classList.toggle("prikazivanje");
    toggleCrtice();
});

function toggleCrtice() {
    document.getElementById("crtica1").classList.toggle("rotiraj1");
    document.getElementById("crtica2").classList.toggle("sakrivanje");
    document.getElementById("crtica3").classList.toggle("rotiraj2");
}

