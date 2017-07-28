





function Point(x,y) {
	this.X = x;
	this.Y = y;
}




function Tile(imageId, explored, spriteId) {

    this.ImageID = imageId;
    this.SpriteID = -1;
    this.Mask = -1;
    this.Explored = true;

    this.Solid = [11, 12,1].indexOf(imageId) != -1;


    if (spriteId)
        this.SpriteID = spriteId;

    if (explored != undefined)
        this.Explored = explored;

    
	
	

}



function Sprite(imageId, x, y) {
	this.ImageID = imageId;
	this.X = x;
	this.Y = y;
	this.DrawX = x;
	this.DrawY = y;

}

