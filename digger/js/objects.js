





function Point(x,y) {
	this.X = x;
	this.Y = y;
}

function Tile(imageId, x, y) {
	this.X = x;
	this.Y = y;

	this.ImageID = imageId;

	this.Mask = -1;
	this.BackgroundImageID = -1;

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

