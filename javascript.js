const container = document.querySelector('.container');

// Grid

for (let i = 0; i < 256; i++) {
    const board = document.createElement('div');
    board.classList = 'grid';

    container.appendChild(board);
};

// "Hover" effect

let newColor = document.querySelectorAll(".grid");
for (const color of newColor) {
    color.addEventListener("mouseover", () => {
        color.style.backgroundColor = "black";
    })
}

// Button to change grid size