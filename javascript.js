const container = document.querySelector('.container');

for (let i = 0; i < 256; i++) {
    const board = document.createElement('div');
    board.classList = 'grid';

    container.appendChild(board);
};