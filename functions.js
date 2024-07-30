function getCellByElement( $cell ) {
    for ( let cell of board.cells ) {
        if ( cell.$element.is( $cell ) ) {
            return cell;
        }
    }
}

function getCellByIndexes( indexes ) {
    for ( let cell of board.cells ) {
        if ( cell.indexes.x === indexes.x && cell.indexes.y === indexes.y ) {
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

    console.log( 'currentTeamColor = ' + board.currentTeamColor );
    console.log( 'currentCell.color = ' + currentCell.color );
    console.log( 'currentCell.indexes.x = ' + currentCell.indexes.x + ', currentCell.indexes.y = ' + currentCell.indexes.y );

    for ( let cell of board.cells ) {
        if (cell.indexes.x === currentCell.indexes.x &&
            cell.indexes.y === currentCell.indexes.y + 1 &&
            !cell.isAlive) {

            cell.isAvailable = true;
            cell.$element.addClass('available-cell');

            console.log( 'cell.$element = ' + cell.$element);
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
    currentCell.isDying = false;
    currentCell.$element.removeClass( 'dying-cell' );

    board.$cells.removeClass( 'available-cell' );
    for ( let cell of board.cells ) {
        cell.isAvailable = false;
        cell.isCurrent = false;
    }

    targetCell.isMooved = true;
    targetCell.$element.addClass( 'mooved-cell' );

    // for ( let cell of board.cells ) {
    //     console.log( cell.color );
    // }
}

function markDyingCells() {
    let neighboursCounter = 0
    for ( let cell of board.cells ) {
        if ( !cell.isAlive ) continue;

        let neighbourN = getCellByIndexes( { x: cell.indexes.x, y: cell.indexes.y-1 } );
        let neighbourNE = getCellByIndexes( { x: cell.indexes.x+1, y: cell.indexes.y-1 } );
        let neighbourE = getCellByIndexes( { x: cell.indexes.x+1, y: cell.indexes.y } );
        let neighbourSE = getCellByIndexes( { x: cell.indexes.x+1, y: cell.indexes.y+1 } );
        let neighbourS = getCellByIndexes( { x: cell.indexes.x, y: cell.indexes.y+1 } );
        let neighbourSW = getCellByIndexes( { x: cell.indexes.x-1, y: cell.indexes.y+1 } );
        let neighbourW = getCellByIndexes( { x: cell.indexes.x-1, y: cell.indexes.y } );
        let neighbourNW = getCellByIndexes( { x: cell.indexes.x-1, y: cell.indexes.y-1 } );

        if ( neighbourN ) {
            if ( neighbourN.isAlive ) {
                neighboursCounter++;
            }
        }
        if ( neighbourNE ) {
            if ( neighbourNE.isAlive ) {
                neighboursCounter++;
            }
        }
        if ( neighbourE ) {
            if ( neighbourE.isAlive ) {
                neighboursCounter++;
            }
        }
        if ( neighbourSE ) {
            if ( neighbourSE.isAlive ) {
                neighboursCounter++;
            }
        }
        if ( neighbourS ) {
            if ( neighbourS.isAlive ) {
                neighboursCounter++;
            }
        }
        if ( neighbourSW ) {
            if ( neighbourSW.isAlive ) {
                neighboursCounter++;
            }
        }
        if ( neighbourW ) {
            if ( neighbourW.isAlive ) {
                neighboursCounter++;
            }
        }
        if ( neighbourNW ) {
            if ( neighbourNW.isAlive ) {
                neighboursCounter++;
            }
        }

        if ( neighboursCounter < 2 || neighboursCounter > 3 ) {
            cell.isDying = true;
            cell.$element.addClass( 'dying-cell' );
        } else {
            cell.isDying = false;
            cell.$element.removeClass( 'dying-cell' );
        }

        neighboursCounter = 0;
    }
}

function passTurn() {
    if ( board.currentTeamColor === 'white' ) {
        board.currentTeamColor = 'black';
    } else {
        board.currentTeamColor = 'white';
    }
}

