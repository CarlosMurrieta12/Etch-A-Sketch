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

const btn = document.querySelector('.button');

btn.addEventListener('click', () => {
    let user_input = prompt("Change the size of your grid");
    if (user_input <= 0 || user_input > 100) {
        window.alert('Maximum input is 100')
    }
    else {
        document.getElementById('container').innerHTML="";
        let user_grid = user_input * user_input;
        for (let i = 0; i < user_grid; i++) {
            const board = document.createElement('div');
            board.classList = 'grid';

            container.appendChild(board);
        }
        document.getElementById('container').style.cssText = 'grid-template-columns: repeat(' + user_input + ', 1fr);'
        
        let newColor = document.querySelectorAll(".grid");
        for (const color of newColor) {
            color.addEventListener("mouseover", () => {
                color.style.backgroundColor = "black";
            })
        }
    }

    
})