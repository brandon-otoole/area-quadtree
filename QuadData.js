'use strict'

export class QuadData {
    constructor(data, left, right, top, bottom) {
        this._data = data;
        this._bounds = [left, right, top, bottom];
    }

    // get the data contained in this space
    get data() { return this._data }

    // get the horizonal, initial bounds coordinate
    get xi() { return this._bounds[0]; }

    // get the horizonal, final bounds coordinate
    get xf() { return this._bounds[1]; }

    // get the vertical, initial bounds coordinate
    get yi() { return this._bounds[2]; }

    // get the vertical, final bounds coordinate
    get yf() { return this._bounds[3]; }

    // get the width of coordinates spanned by the data (cache result)
    get width() {
        return this._width = this._width || this._bounds[1] - this._bounds[0];
    }

    // get the height of coordinates spanned by the data (cache result)
    get height() {
        return this._height = this._height || this._bounds[3] - this._bounds[2];
    }
}
