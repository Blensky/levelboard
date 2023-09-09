document.querySelectorAll('.level-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        // Hide all bubbles
        document.querySelectorAll('.bubble').forEach(b => b.style.display = 'none');
        
        const level = e.target.getAttribute('data-level');
        const bubble = document.querySelector(`.bubble[data-bubble="${level}"]`);
        bubble.style.display = 'block';
    });
});

// Hide bubbles when clicking outside of buttons
document.addEventListener('click', (e) => {
    if (!e.target.classList.contains('level-btn')) {
        document.querySelectorAll('.bubble').forEach(b => b.style.display = 'none');
    }
});
