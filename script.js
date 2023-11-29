document.getElementById('trigger').addEventListener('mouseover', function() {
    document.querySelector('.hover-image').style.display = 'block';
    document.querySelector('h2').style.display = 'block';
});

document.getElementById('trigger').addEventListener('mouseout', function() {
    document.querySelector('.hover-image').style.display = 'none';
    document.querySelector('h2').style.display = 'none';
});
