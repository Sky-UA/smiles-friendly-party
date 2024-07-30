function initBoard() {
    // board.cellSize = $( window ).height() / board.columns;
    // board.$element.css( 'width', board.cellSize * board.rows + 'px' );

    // board.cellSize = $( window ).width() / board.rows;
    // board.$element.css( 'width', board.cellSize * board.rows + 'px' );
    // board.$element.css( 'height', board.cellSize * board.rows + 'px' );


    board.cellSize = $( window ).height() / board.columns / 2.25;
    board.$element.css( 'width', board.cellSize * board.columns + 'px' );
    board.$element.css( 'height', board.cellSize * board.rows + 'px' );
}

function initCells() {
    let colors = [
        'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black',
        'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white',
        'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray',
        'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray',
        'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray',
        'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray',
        'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray',
        'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray',
        'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray',
        'gray', 'gray', 'gray', 'gray', 'gray',
        'black', 'black', 'black', 'black', 'black',
        'white', 'white', 'white', 'white', 'white',
    ];

    shuffle( colors );
    let counter = 0;

    for ( let row = 0; row < board.rows; row++ ) {
        for (let column = 0; column < board.columns; column++) {
            let $cell = $(`#cell-${column}-${row}`);
            $cell.css('width', board.cellSize + 'px');
            $cell.css('height', board.cellSize + 'px');
            // $cell.text(`${column}-${row}`);

            let color = colors[counter];

            switch (color) {
                case 'black':
                    $cell.addClass('black');
                    break;
                case 'white':
                    $cell.addClass('white');
                    break;
                case 'gray':
                    $cell.addClass('gray');
                    break;
            }

            board.cells.push(new Cell($cell, color));
            counter++;
        }
    }
}

function initialization() {
    initBoard();
    initCells();
}