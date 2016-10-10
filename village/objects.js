
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
	this.X = (cellX * 25) + 12;
	this.Y = (cellY * 25) + 12;
	this.CellX = cellX;
	this.CellY = cellY;
	this.DrawX = (cellX * 25) - Math.floor((tiles[this.ImageID].width / 2) - 12);
	this.DrawY = (cellY * 25) + (25 - tiles[this.ImageID].height);
}