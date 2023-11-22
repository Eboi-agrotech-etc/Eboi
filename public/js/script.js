function toggleDarkMode() {
    let body = document.body;
    if (body.getAttributeNode('data-bs-theme').value == 'light') {
        body.getAttributeNode('data-bs-theme').value = 'dark';
    } else {
        body.getAttributeNode('data-bs-theme').value = 'light';
    }
}

function openPreview(image) {
    preview = `
        <div id="overlay" class="position-absolute w-100 h-100 z-3 d-flex justify-content-center align-items-center" style="background-color: #0008" onclick="closePreview()" data-bs-theme="dark">
            <button type="button" onclick="closePreview" class="btn-close position-absolute top-0 end-0 fs-4 me-4 mt-4" aria-label="Close"></button>
            <img src="${image}">
        </div>
    `

    document.body.innerHTML += preview;
}

function closePreview() {
    document.getElementById('overlay').remove();
}