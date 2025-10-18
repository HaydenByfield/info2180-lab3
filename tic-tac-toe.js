// window.onload is a special JavaScript event that runs after the entire webpage has finished loading
window.onload = function(){
    // A constant named squares that refers to the html document to select all elements that associate with an id and return a mode list
    const squares = document.querySelectorAll('#board div');
    const status = document.querySelector('#status')
    const button = document.querySelector('.btn')
    const instructions = status.textContent;
    // Instantiating a variable currentplayer as a string
    let currentplayer = "X";
    let lst = []
    let lst2 =[]

    

    // Loops the div elements in board and allows them access to the CSS classes and add the square class to each div element with thought removing any classes
    squares.forEach(square => {
    square.classList.add('square');

    // resets the board by removing the text content if the new game button is clicked
    button.addEventListener('click', () => {
        square.textContent = '';
        currentplayer = "X"
        status.textContent = instructions;
        status.classList.remove('you-won')
        square.classList.remove('X', 'O');
        lst.splice(0, lst.length);
        lst2.splice(0, lst2.length);
        main()
    });
    // listens for mouse to hover over the square and and change its design to match class hover
    square.addEventListener('mouseover', ()=> {
        if(currentplayer === 'X'){
            square.classList.add('hover')
        } else if(currentplayer === 'O'){
            square.classList.add('hover-O')
        }
        
    });
    // listens for mouse to no longer hover over the square and and change its design to remove hover
    square.addEventListener('mouseout', ()=> {
        square.classList.remove('hover')
    });

    });

    
    const winpattern = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

    function Winner(lst) {
        if (lst.length < 3) return false; 
        //.some allows for you to check if atleast one winpattern matches the inner function and then returns true, while .every checks if all elements inside the pattern are contained in the array list(lst)
        return winpattern.some(pattern => 
        pattern.every(pat => lst.includes(pat))
    );
    }
    function main (){
        squares.forEach((square,index) => {
            square.addEventListener('click', () =>{
                if(square.textContent === "" && currentplayer === "X"){
                    square.textContent = "X";
                    square.classList.add('X');
                    lst.push(index);
                    currentplayer = "O";
                    if(Winner(lst)){
                        status.textContent = "Congratulations! X is the Winner!";
                        status.classList.add('you-won');
                    }
                } else if (square.textContent === "" && currentplayer === "O"){
                    square.textContent = "O";
                    square.classList.add('O');
                    lst2.push(index);
                    currentplayer = "X";
                    if(Winner(lst2)){
                        status.textContent = "Congratulations! O is the Winner!" 
                        status.classList.add('you-won')
                    }
                }  
            });
        });
    }

    main()
};