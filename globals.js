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
        $element,
        color
    ) {
        this.$element = $element;
        this.color;
        this.isAlive = false;
        // this.isAvailable = false;
    }
}