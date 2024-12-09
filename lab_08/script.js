document.addEventListener('DOMContentLoaded', () => {
    const directories = document.querySelectorAll('.directory');
    directories.forEach(item => {
        item.onclick = function(event) {
            event.stopPropagation();
            this.classList.toggle('open');
        };
    });
});