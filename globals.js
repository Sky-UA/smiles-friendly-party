let board = {
    $element: $( '#board' ),
    rows: 15,
    columns: 7,

    // rows: 7,
    // columns: 3,
    cells: [],
    cellSize: undefined,
    $cells: $( '.cell' ),
    currentTeamColor: 'white'
};

class Cell {
    constructor(
        $element
    ) {
        this.color = '';
        this.indexes = { x: undefined, y: undefined };
        this.isAlive = false;
        this.isAvailable = false;
        this.isCurrent = false;
        this.isMooved = false;
        this.isDying = false;
        this.isReadyToNewBorn = false;
        this.$element = $element;
    }
}