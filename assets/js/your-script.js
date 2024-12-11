document.querySelectorAll('.annotation-target').forEach(function(target) {
    target.addEventListener('click', function() {
        var sidebar = document.getElementById('annotation-sidebar');
        sidebar.style.display = 'block';
        sidebar.innerHTML = `<div class="annotation-item">${target.getAttribute('data-comment')}</div>`;
    });
});
