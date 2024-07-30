let board = {
    $element: $( '#board' ),
    rows: 15,
    columns: 7,
    cells: [],
    cellSize: undefined,
    $cells: $( '.cell' )
};

class Cell {
    constructor(
        $element
    ) {
        this.$element = $element;
        this.indexes = { x: undefined, y: undefined };
        this.color = '';
        this.isAlive = false;
        this.isAvailable = false;
        this.isCurrent = false;
    }
}