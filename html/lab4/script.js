const container = document.querySelector('.content');
const numberOfItems = 400;

for (let i = 0; i < numberOfItems; i++) {
    const img = document.createElement('img');
    img.src = `images/image_${i}.jpg`;
    img.alt = `Image ${i}`;
    container.appendChild(img);
}

for (let i = 1; i <= 5; i++) {
    const textContainer = document.createElement('div');
    textContainer.classList.add('text-container');
    fetch(`texts/text${i}.txt`)
        .then(response => response.text())
        .then(text => {
            textContainer.textContent = text;
            container.appendChild(textContainer);
        })
        .catch(error => console.error('Error loading text file:', error));
}