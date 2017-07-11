function Camera(viewport) {

    this.ViewportSize = viewport;
    this.Dragging = false;

    this.ZoomLevel = 1;
    this.lastMousePos = new Point(0, 0);

    
    this.OnMouseMove = function (e) {
        if (this.lastMousePos != undefined && this.Dragging) {

            origin = new Point(origin.X + (e.pageX - this.lastMousePos.X), origin.Y + (e.pageY - this.lastMousePos.Y));


            //dragVelocity = new Point(e.pageX - this.lastMousePos.X, e.pageY - this.lastMousePos.Y);
            //ConstrainCamera();

            $('#lblOrigin').html('{0}, {1}'.format(origin.X, origin.Y));
        }
        this.lastMousePos = new Point(e.pageX, e.pageY);
    };


    this.OnZoom = function (e) {
        if (e.originalEvent.wheelDelta < 0) { //wheel down

            if (this.ZoomLevel > 0.1)
                this.ZoomLevel -= 0.1;
        }
        else { //wheel up

            this.ZoomLevel += 0.1;
        }

        this.ZoomLevel = Math.round(this.ZoomLevel * 10) / 10;



    };

   
}