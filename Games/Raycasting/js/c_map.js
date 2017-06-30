class Map {
  constructor(level, blockSize, mapSize) {
    this.level = this.getLevel(level, mapSize);
    this.blockSize = blockSize;
    this.mapSize = mapSize;
  }
  getLevel(level, mapSize) {
    let map = [];
    switch (level) {
      case 1:
        for (var xi = 0; xi < mapSize; xi++) {
          map[xi] = [];
          for (var yi = 0; yi < mapSize; yi++) {
            if ((xi == 0 || xi == mapSize - 1) || (yi == 0 || yi == mapSize - 1)) {
              map[xi][yi] = e_Block.SOLID;
            }
            else {
              map[xi][yi] = e_Block.EMPTY;
            }
          }
        }
        map[3][3] = e_Block.SOLID;
        map[6][6] = e_Block.SOLID;
        map[3][6] = e_Block.SOLID;
        map[6][3] = e_Block.SOLID;
        return map;
        break;
        case 2:
          for (var xi = 0; xi < mapSize; xi++) {
            map[xi] = [];
            for (var yi = 0; yi < mapSize; yi++) {
              if ((xi == 0 || xi == mapSize - 1) || (yi == 0 || yi == mapSize - 1)) {
                map[xi][yi] = e_Block.SOLID;
              }
              else {
                map[xi][yi] = e_Block.EMPTY;
              }
            }
          }
          map[2][2] = e_Block.SOLID;
          map[2][3] = e_Block.SOLID;
          map[2][4] = e_Block.SOLID;
          map[2][5] = e_Block.SOLID;

          map[2][7] = e_Block.SOLID;
          map[3][7] = e_Block.SOLID;
          map[4][7] = e_Block.SOLID;
          map[5][7] = e_Block.SOLID;

          map[4][2] = e_Block.SOLID;
          map[5][2] = e_Block.SOLID;
          map[6][2] = e_Block.SOLID;
          map[7][2] = e_Block.SOLID;

          map[7][7] = e_Block.SOLID;
          map[7][6] = e_Block.SOLID;
          map[7][4] = e_Block.SOLID;
          map[7][5] = e_Block.SOLID;
          return map;
          break;
    }
  }
}
