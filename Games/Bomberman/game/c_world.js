class World {
  constructor(blockSize, sizePixel) {
    this.blockSize = blockSize;
    this.sizePixel = sizePixel;
    this.sizeBlock = sizePixel / blockSize;
    this.map = this.createMap();
  }
  createMap() {
    let mapArray = [];
    for (var xi = 0; xi < this.sizeBlock; xi++) {
      mapArray[xi] = [];
      for (var yi = 0; yi < this.sizeBlock; yi++) {
        if (this.isOdd(xi, yi)) { /*INDESTRUCTIBLE ALL ARE AT ODD X & ODD Y*/
          mapArray[xi][yi] = e_blockShape.INDESTRUCTIBLE;
        }
        else {  /*ALL OTHER BLOCKS ARE DESTRUCTIBLE*/
          mapArray[xi][yi] = e_blockShape.DESTRUCTIBLE;
        }
      }
    } /*STARTBLOCKS FOR PLAYER1 & PLAYER2 GET EMPTY*/
    mapArray[0][0] = e_blockShape.EMPTY;
    mapArray[1][0] = e_blockShape.EMPTY;
    mapArray[0][1] = e_blockShape.EMPTY;
    mapArray[this.sizeBlock - 1][this.sizeBlock - 2] = e_blockShape.EMPTY;
    mapArray[this.sizeBlock - 2][this.sizeBlock - 1] = e_blockShape.EMPTY;
    mapArray[this.sizeBlock - 1][this.sizeBlock - 1] = e_blockShape.EMPTY;
    return mapArray;
  }
  isOdd(x, y) {
    return ((x % 2) != 0 && (y % 2) != 0)
  }
  isSolid(x, y) {
    if (x < 0) { return true; }
    if (x > 8) { return true; }
    if (y < 0) { return true;  }
    if (y > 8) { return true;  }
    if (this.map[x][y] == e_blockShape.EMPTY) {
      return false;
    }
    else {
      return true;
    }
  }
}
