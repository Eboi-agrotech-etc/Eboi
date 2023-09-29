function toggleDarkMode() {
    let body = document.body;
    if (body.getAttributeNode('data-bs-theme').value == 'light') {
        body.getAttributeNode('data-bs-theme').value = 'dark';
    } else {
        body.getAttributeNode('data-bs-theme').value = 'light';
    }
}