var DIRECTION = {
    Left: 1,
    Right: 2
}

function Digger(x, y) {
    this.X = x;
    this.Y = y;
    this.Direction = DIRECTION.Right;
    this.Velocity = new Point(0, 0);
    this.Size = new Point(28, 28);
    this.SizeHalf = new Point(this.Size.X / 2, this.Size.Y / 2);

    this.DrawSize = new Point(32, 32);

    this.DrawSizeHalf = new Point(this.DrawSize.X / 2, this.DrawSize.Y / 2);

    this.Acceleration = new Point(0.1, 0.1);
    this.BrakingPower = 0.6;
    this.Falling = false;

    this.TopSpeed = {
        Lateral: 8.0,
        Up: 4.0,
        Down: -64
    };
    this.DigSpeed = 16.0;

    this.Digging = false;

    this.DigTarget = new Point(0, 0);


    this.Update = function () {
        if (!this.Digging) {
            if (Math.abs(this.Velocity.X) > Math.abs(this.TopSpeed.Lateral))
                this.TopSpeed.X = Math.sign(this.Velocity.X) * this.TopSpeed.X;

            if (this.Velocity.Y > this.TopSpeed.Up)
                this.Velocity.Y = this.TopSpeed.Y;
            else if (this.Velocity.Y < this.TopSpeed.Down)
                this.Velocity.Y = this.TopSpeed.Down;


            this.X += this.Velocity.X;
            this.Y += this.Velocity.Y;

            if (this.Velocity.X > 0)
                this.Direction = DIRECTION.Right;
            else if (this.Velocity.X < 0)
                this.Direction = DIRECTION.Left;
        }
    }

    this.ImageID = function () {

        if (this.Direction == DIRECTION.Left)
            return 30;
        else if (this.Direction == DIRECTION.Right)
            return 31;
    }

    this.BoundingBoxMin = function () {
        return new Point(
            this.X - this.SizeHalf.X,
            this.Y - this.SizeHalf.Y
        );
    }
    this.BoundingBoxMax = function () {
        return new Point(
            this.X + this.SizeHalf.X,
            this.Y + this.SizeHalf.Y
        );
    }
}