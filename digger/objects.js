
///Gets a random int between min and max, inclusive
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}



function Create2DArray(rows) {
	var arr = [];
	for (var i = 0; i < rows; i++)
		arr[i] = [];
	return arr;
}	




function Point(x,y) {
	this.X = x;
	this.Y = y;
}

function Sprite(imageId, cellX, cellY) {
	this.ImageID = imageId;
    this.X = (cellX * tileSize) + 16;
    this.Y = (cellY * tileSize) + 16;
	this.CellX = cellX;
    this.CellY = cellY;
    this.tileSize = tileSize;
   // SetDrawPos();
    this.DrawX = (cellX * tileSize);// - Math.floor((tiles[this.ImageID].width / 2) - 16);
    this.DrawY = (cellY * tileSize);// + (tileSize - tiles[this.ImageID].height);

    this.SetDrawPos = function () {
        this.X = (this.CellX * tileSize) + 16;
        this.Y = (this.CellY * tileSize) + 16;
        this.DrawX = (this.CellX * tileSize);// - Math.floor((tiles[this.ImageID].width / 2) - 16);
        this.DrawY = (this.CellY * tileSize);// + (tileSize - tiles[this.ImageID].height);
    }
}

