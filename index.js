var midNavigation = document.querySelector('.mid-nav');
var menuButton = document.querySelector('.onkar');

menuButton.addEventListener('click', function() {
    midNavigation.classList.toggle('dropdown');
})