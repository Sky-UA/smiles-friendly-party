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

function getCellNeighboursCount( cell ) {
    let neighboursCounter = 0

    // for ( let cell of board.cells ) {
    //     if (!cell.isAlive) continue;

        let neighbourN = getCellByIndexes({x: cell.indexes.x, y: cell.indexes.y - 1});
        let neighbourNE = getCellByIndexes({x: cell.indexes.x + 1, y: cell.indexes.y - 1});
        let neighbourE = getCellByIndexes({x: cell.indexes.x + 1, y: cell.indexes.y});
        let neighbourSE = getCellByIndexes({x: cell.indexes.x + 1, y: cell.indexes.y + 1});
        let neighbourS = getCellByIndexes({x: cell.indexes.x, y: cell.indexes.y + 1});
        let neighbourSW = getCellByIndexes({x: cell.indexes.x - 1, y: cell.indexes.y + 1});
        let neighbourW = getCellByIndexes({x: cell.indexes.x - 1, y: cell.indexes.y});
        let neighbourNW = getCellByIndexes({x: cell.indexes.x - 1, y: cell.indexes.y - 1});

        if (neighbourN) {
            if (neighbourN.isAlive) {
                neighboursCounter++;
            }
        }
        if (neighbourNE) {
            if (neighbourNE.isAlive) {
                neighboursCounter++;
            }
        }
        if (neighbourE) {
            if (neighbourE.isAlive) {
                neighboursCounter++;
            }
        }
        if (neighbourSE) {
            if (neighbourSE.isAlive) {
                neighboursCounter++;
            }
        }
        if (neighbourS) {
            if (neighbourS.isAlive) {
                neighboursCounter++;
            }
        }
        if (neighbourSW) {
            if (neighbourSW.isAlive) {
                neighboursCounter++;
            }
        }
        if (neighbourW) {
            if (neighbourW.isAlive) {
                neighboursCounter++;
            }
        }
        if (neighbourNW) {
            if (neighbourNW.isAlive) {
                neighboursCounter++;
            }
        }

        // neighboursCounter = 0;
    // }

    return neighboursCounter;
}

function calculateColorOfNewBornCell( cell ) {
    let whiteNeighboursCounter = 0;
    let blackNeighboursCounter = 0;

    let neighbourN = getCellByIndexes({x: cell.indexes.x, y: cell.indexes.y - 1});
    let neighbourNE = getCellByIndexes({x: cell.indexes.x + 1, y: cell.indexes.y - 1});
    let neighbourE = getCellByIndexes({x: cell.indexes.x + 1, y: cell.indexes.y});
    let neighbourSE = getCellByIndexes({x: cell.indexes.x + 1, y: cell.indexes.y + 1});
    let neighbourS = getCellByIndexes({x: cell.indexes.x, y: cell.indexes.y + 1});
    let neighbourSW = getCellByIndexes({x: cell.indexes.x - 1, y: cell.indexes.y + 1});
    let neighbourW = getCellByIndexes({x: cell.indexes.x - 1, y: cell.indexes.y});
    let neighbourNW = getCellByIndexes({x: cell.indexes.x - 1, y: cell.indexes.y - 1});

    if (neighbourN) {
        if (neighbourN.isAlive) {
            if (neighbourN.color === 'white') {
                whiteNeighboursCounter++;
            }
            if (neighbourN.color === 'black') {
                blackNeighboursCounter++;
            }
        }
    }
    if (neighbourNE) {
        if (neighbourNE.isAlive) {
            if (neighbourNE.color === 'white') {
                whiteNeighboursCounter++;
            }
            if (neighbourNE.color === 'black') {
                blackNeighboursCounter++;
            }
        }
    }
    if (neighbourE) {
        if (neighbourE.isAlive) {
            if (neighbourE.color === 'white') {
                whiteNeighboursCounter++;
            }
            if (neighbourE.color === 'black') {
                blackNeighboursCounter++;
            }
        }
    }
    if (neighbourSE) {
        if (neighbourSE.isAlive) {
            if (neighbourSE.color === 'white') {
                whiteNeighboursCounter++;
            }
            if (neighbourSE.color === 'black') {
                blackNeighboursCounter++;
            }
        }
    }
    if (neighbourS) {
        if (neighbourS.isAlive) {
            if (neighbourS.color === 'white') {
                whiteNeighboursCounter++;
            }
            if (neighbourS.color === 'black') {
                blackNeighboursCounter++;
            }
        }
    }
    if (neighbourSW) {
        if (neighbourSW.isAlive) {
            if (neighbourSW.color === 'white') {
                whiteNeighboursCounter++;
            }
            if (neighbourSW.color === 'black') {
                blackNeighboursCounter++;
            }
        }
    }
    if (neighbourW) {
        if (neighbourW.isAlive) {
            if (neighbourW.color === 'white') {
                whiteNeighboursCounter++;
            }
            if (neighbourW.color === 'black') {
                blackNeighboursCounter++;
            }
        }
    }
    if (neighbourNW) {
        if (neighbourNW.isAlive) {
            if (neighbourNW.color === 'white') {
                whiteNeighboursCounter++;
            }
            if (neighbourNW.color === 'black') {
                blackNeighboursCounter++;
            }
        }
    }

    if ( whiteNeighboursCounter > blackNeighboursCounter) {
        return 'white';
    }
    if ( blackNeighboursCounter > whiteNeighboursCounter) {
        return 'black';
    }
}

function markDyingCells() {
    for ( let cell of board.cells ) {
        if (!cell.isAlive) continue;

        let neighboursCounter = getCellNeighboursCount( cell );

        if ( neighboursCounter < 2 || neighboursCounter > 3 ) {
            cell.isDying = true;
            cell.$element.addClass( 'dying-cell' );
        } else {
            cell.isDying = false;
            cell.$element.removeClass( 'dying-cell' );
        }
    }
}

function markReadyToNewBornCells() {
    for ( let cell of board.cells ) {
        if (cell.isAlive) {
            cell.isReadyToNewBorn = false;
            cell.$element.removeClass( 'ready-to-new-born-white-cell ready-to-new-born-black-cell' );
            continue;
        }

        let neighboursCounter = getCellNeighboursCount( cell );

        if ( neighboursCounter === 3 ) {
            cell.isReadyToNewBorn = true;
            let colorOfNewBornCell = calculateColorOfNewBornCell( cell );

            if (colorOfNewBornCell === 'white') {
                cell.$element.addClass( 'ready-to-new-born-white-cell' );
            }
            if (colorOfNewBornCell === 'black') {
                cell.$element.addClass( 'ready-to-new-born-black-cell' );
            }
        } else {
            cell.isReadyToNewBorn = false;
            cell.$element.removeClass( 'ready-to-new-born-white-cell ready-to-new-born-black-cell' );
        }
    }

}

function removeDyingCells() {
    for (let cell of board.cells) {
        if (cell.isDying) {
            cell.color = 'gray';
            cell.isAlive = false;
            cell.isDying = false;
            cell.$element.removeClass( 'white black dying-cell' );
            cell.$element.addClass( 'gray' );
        }
    }
}

function addNewBornCells() {
    for (let cell of board.cells) {
        if (cell.isReadyToNewBorn) {
            let colorOfNewBornCell = calculateColorOfNewBornCell( cell );
            cell.color = colorOfNewBornCell;
            cell.isAlive = true;
            cell.isDying = false;
            cell.$element.removeClass( 'ready-to-new-born-white-cell ready-to-new-born-black-cell' );
            cell.$element.addClass( colorOfNewBornCell );
        }
    }
}

function passTurn() {

    // TODO: проверить, что если остались лишь смайлики которым некуда ходить, то передавать ход автоматически следуйщей команде!!!

    let isAllCellsMooved = true;

    for ( let cell of board.cells ) {
        if (cell.color !== 'gray') {
            if (!cell.isMooved) {
                isAllCellsMooved = false;
                break;
           }
        }
    }

    if (isAllCellsMooved) {
        board.$cells.removeClass( 'mooved-cell' );
        for ( let cell of board.cells ) {
            cell.isMooved = false;
        }
        
        markReadyToNewBornCells();
        markDyingCells();

        addNewBornCells();
        removeDyingCells();
        
        markReadyToNewBornCells();
        markDyingCells();

        let isAnyWhiteCellAlive = false;

        for ( let cell of board.cells ) {
            if (cell.isAlive) {
                isAnyWhiteCellAlive = true;
                break;
            }
        }

        if (isAnyWhiteCellAlive) {
            board.currentTeamColor = 'white';
        }
    } else {
        if ( board.currentTeamColor === 'white' ) {
            board.currentTeamColor = 'black';
        } else {
            board.currentTeamColor = 'white';
        }
    }
}

