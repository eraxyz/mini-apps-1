
document.addEventListener('click', (event) => 
    (event.target.classList[0] === 'download' ? window.open('http://localhost:3000/download') : null));
