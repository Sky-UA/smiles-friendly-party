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

function getUnitByElement( $unit ) {
    for ( let unit of units ) {
        if ( unit.$element.is( $unit ) ) {
            return unit;
        }
    }
}