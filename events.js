function onCellClick( event ) {

    let $cell = $( this );
    let cell = getCellByElement( $cell );

    if ( (!cell.isMooved && cell.color === 'white' && board.currentTeamColor === 'white')
         || (!cell.isMooved && cell.color === 'black' && board.currentTeamColor === 'black') ) {
        showAvailableCells( cell );
    }

    // if ( cell.color === 'gray' && cell.isAvailable === true ) {
    if ( cell.isAvailable === true ) {
        moveCell( cell );        
        markReadyToNewBornCells();
        markDyingCells();
        passTurn();
    }
}