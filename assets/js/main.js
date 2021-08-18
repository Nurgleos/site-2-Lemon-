const diff = document.querySelector('.view-title').querySelector('.difficulty');

const diffParam = {
    'easy': 2,
    'normal': 3,
    'hard': 4
}

const diffLevel = diffParam[diff.innerText.toLowerCase()];

if (diffLevel) {
    const diffIcon = document.querySelector('.difficulty-icon');
    for (let i = 0; i < diffLevel; i++) {
        let stick = diffIcon.querySelector(`.elem-${i + 1}`);
        stick.style.backgroundColor = "#000";
    }

}