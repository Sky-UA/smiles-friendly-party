function onCellClick( event ) {

    let $cell = $( this );
    let cell = getCellByElement( $cell );

    if ( cell.color === 'white' || cell.color === 'black' ) {
        // cell.isCurrent = true;
        showAvailableCells( cell );
    }

    if ( cell.color === 'gray' || cell.isAvailable === true ) {
        moveCell( cell );
    }
}