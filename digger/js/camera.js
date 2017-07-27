function Camera(viewport, worldSize, tileSize) {

    this.ViewportSize = viewport;
    this.ViewportHalf = new Point(viewport.X / 2, viewport.Y / 2);
    this.WorldSize = worldSize;
    this.TileSize = tileSize;

    this.WorldPixelSize = new Point(worldSize.X * tileSize, worldSize.Y * tileSize);

    this.Dragging = false;

    this.ZoomLevel = 1;
    this.LastMousePos = new Point(0, 0);
    this.Center = new Point(viewport.X / 2, viewport.Y / 2);

    this.CenterLabel = {};
    this.MouseLabel = {};
    this.BoundingLabel = {};

    this.BoundingBoxMin = function () {
        return new Point(
            this.Center.X - (this.ViewportHalf.X / this.ZoomLevel),
            this.Center.Y - (this.ViewportHalf.Y / this.ZoomLevel)
        );
    }
    this.BoundingBoxMax = function () {
        return new Point(
            this.Center.X + (this.ViewportHalf.X / this.ZoomLevel),
            this.Center.Y + (this.ViewportHalf.Y / this.ZoomLevel)
        );
    }
    
    
    this.OnMouseMove = function (e) {
        if (this.LastMousePos != undefined && this.Dragging) {

            this.Center.X += (this.LastMousePos.X - e.offsetX) / this.ZoomLevel;
            this.Center.Y += (this.LastMousePos.Y - e.offsetY) / this.ZoomLevel;

            this.ConstrainCamera();

            $(this.CenterLabel).html('{0}, {1}'.format(this.Center.X, this.Center.Y));
        }
          
        this.LastMousePos = new Point(e.offsetX, e.offsetY);

        
        $(this.MouseLabel).html('{0}, {1}'.format(this.LastMousePos.X, this.LastMousePos.Y));
        $(this.BoundingLabel).html('[{0}, {1}], [{2}, {3}]'.format(this.BoundingBoxMin().X, this.BoundingBoxMin().Y, this.BoundingBoxMax().X, this.BoundingBoxMax().Y));
    };


    this.OnZoom = function (e) {
        if (e.originalEvent.wheelDelta < 0) { //wheel down

            if (this.ZoomLevel > 0.1 && this.WorldPixelSize.X*this.ZoomLevel>this.ViewportSize.X)
                this.ZoomLevel -= 0.1;
        }
        else { //wheel up

            this.ZoomLevel += 0.1;
        }
        this.ConstrainCamera();

        this.ZoomLevel = Math.round(this.ZoomLevel * 10) / 10;



    };
    

    this.ConstrainCamera = function () {

        var cL = false, cR = false, cT = false, cB = false;

        if (this.BoundingBoxMin().X <= 0)
            cL = true;
        if (this.BoundingBoxMax().X >= this.WorldPixelSize.X)
            cR = true;

        if (cL && cR)
            this.Center.X = this.WorldPixelSize.X / 2;
        else if (cL)
            this.Center.X = this.ViewportHalf.X / this.ZoomLevel;
        else if (cR)
            this.Center.X = this.WorldPixelSize.X - (this.ViewportHalf.X / this.ZoomLevel);

        if (this.BoundingBoxMin().Y <= 0)
            cT = true;
        if (this.BoundingBoxMax().Y >= this.WorldPixelSize.Y)
            cB = true;

        if (cT && cB)
            this.Center.Y = this.WorldPixelSize.Y / 2;
        else if (cT)
            this.Center.Y = this.ViewportHalf.Y / this.ZoomLevel;
        else if (cB)
            this.Center.Y = this.WorldPixelSize.Y - (this.ViewportHalf.Y / this.ZoomLevel);

    }
   
}