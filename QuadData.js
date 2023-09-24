'use strict'

export class QuadData {
    constructor(data, left, right, top, bottom) {
        this._data = data;

        this._xi = left;
        this._xf = right;
        this._yi = top;
        this._yf = bottom;
    }

    // get the data contained in this space
    get data() { return this._data }

    // get the horizonal, initial bounds coordinate
    get xi() { return this._xi; }

    // get the horizonal, final bounds coordinate
    get xf() { return this._xf; }

    // get the vertical, initial bounds coordinate
    get yi() { return this._yi; }

    // get the vertical, final bounds coordinate
    get yf() { return this._yf; }

    // get the width of coordinates spanned by the data (cache result)
    get width() {
        return this._width = this._width || this._xf - this._xi;
    }

    // get the height of coordinates spanned by the data (cache result)
    get height() {
        return this._height = this._height || this._yf - this._yi;
    }
}
