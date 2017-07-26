





function Point(x,y) {
	this.X = x;
	this.Y = y;
}




function Tile(imageId, x, y) {
	this.X = x;
	this.Y = y;

	this.ImageID = imageId;

	this.Mask = -1;
	

}



function Sprite(imageId, cellX, cellY) {
	this.ImageID = imageId;
	this.X = (cellX * tileSize) + 16;
	this.Y = (cellY * tileSize) + 16;
	this.CellX = cellX;
	this.CellY = cellY;

}

