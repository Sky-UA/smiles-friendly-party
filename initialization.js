function initBoard() {
    board.cellSize = $( window ).height() / board.columns / 2.25;
    board.$element.css( 'width', board.cellSize * board.columns + 'px' );
    board.$element.css( 'height', board.cellSize * board.rows + 'px' );

    // board.cellSize = $( window ).height() / board.columns / 3;
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

    // let colors = [
    //     'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray',
    //     'gray', 'gray', 'gray', 'gray', 'gray',
    //     'black', 'black', 'black',
    //     'white', 'white', 'white'
    // ];

    // let colors = [
    //     'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray',
    //     'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray',
    //     'black', 'black',
    //     'white', 'white'
    // ];

    // let colors = [
    //     'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray',
    //     'gray', 'gray', 'gray', 'gray', 'gray',
    //     'gray', 'gray', 'gray', 'gray',
    //     'black',
    //     'white'
    // ];

    shuffle( colors );
    let counter = 0;

    for ( let row = 0; row < board.rows; row++ ) {
        for (let column = 0; column < board.columns; column++) {
            let $cell = $(`#cell-${column}-${row}`);
            $cell.css('width', board.cellSize + 'px');
            $cell.css('height', board.cellSize + 'px');
            // $cell.text(`${column}-${row}`);

            let cell = new Cell( $cell );
            cell.indexes = { x: column, y: row };

            let color = colors[counter];
            switch (color) {
                case 'white':
                    cell.isAlive = true;
                    cell.color = color;
                    $cell.addClass('white');
                    break;
                case 'black':
                    cell.isAlive = true;
                    cell.color = color;
                    $cell.addClass('black');
                    break;
                case 'gray':
                    cell.isAlive = false;
                    cell.color = color;
                    $cell.addClass('gray');
                    break;
            }

            board.cells.push( cell );
            counter++;
        }
    }
}

function initialization() {
    initBoard();
    initCells();
    markDyingCells();
    markReadyToNewBornCells();
}