function getCellByElement( $cell ) {
    for ( let cell of board.cells ) {
        if ( cell.$element.is( $cell ) ) {
            return cell;
        }
    }
}

function showAvailableCells( currentCell ) {
    board.$cells.removeClass( 'available-cell' );
    for ( let cell of board.cells ) {
        cell.isAvailable = false;
        cell.isCurrent = false;
    }

    currentCell.isCurrent = true;

    // console.log( 'currentCell.indexes.x = ' + currentCell.indexes.x + ', currentCell.indexes.y = ' + currentCell.indexes.y );

    for ( let cell of board.cells ) {
        if (cell.indexes.x === currentCell.indexes.x &&
            cell.indexes.y === currentCell.indexes.y + 1 &&
            !cell.isAlive) {

            cell.isAvailable = true;
            cell.$element.addClass('available-cell');

            // console.log( 'cell.$element = ' + cell.$element);
        }

        if (cell.indexes.x === currentCell.indexes.x &&
            cell.indexes.y === currentCell.indexes.y - 1 &&
            !cell.isAlive) {

            cell.isAvailable = true;
            cell.$element.addClass('available-cell');
        }

        if (cell.indexes.x === currentCell.indexes.x + 1 &&
            cell.indexes.y === currentCell.indexes.y &&
            !cell.isAlive) {

            cell.isAvailable = true;
            cell.$element.addClass('available-cell');
        }

        if (cell.indexes.x === currentCell.indexes.x - 1 &&
            cell.indexes.y === currentCell.indexes.y &&
            !cell.isAlive) {

            cell.isAvailable = true;
            cell.$element.addClass('available-cell');
        }
    }
}

function getCurrentCell() {
    for ( let cell of board.cells ) {
        if ( cell.isCurrent === true ) {
            return cell;
        }
    }
}

function moveCell( targetCell ) {
    let currentCell = getCurrentCell();

    targetCell.isAlive = true;
    targetCell.color = currentCell.color;
    targetCell.$element.removeClass( 'gray' );
    targetCell.$element.addClass( currentCell.color );

    currentCell.isAlive = false;
    currentCell.color = 'gray';
    currentCell.$element.removeClass( 'white black' );
    currentCell.$element.addClass( 'gray' );

    board.$cells.removeClass( 'available-cell' );
    for ( let cell of board.cells ) {
        cell.isAvailable = false;
        cell.isCurrent = false;
    }
}

// function getCellByIndexes( indexes ) {
//     for ( let cell of board.cells ) {
//         if ( cell.indexes.x === indexes.x && cell.indexes.y === indexes.y ) {
//             return cell;
//         }
//     }
// }