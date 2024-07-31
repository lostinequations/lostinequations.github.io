    document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript is running...');
});


// Set the current year in the footer
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('current-year').textContent = new Date().getFullYear();
});