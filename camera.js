
function Camera(vPos, vDir, viewport) {
	this.Position = vPos;
	this.Direction = vDir;
	this.Viewport = viewport;

	this.aspect_ratio = viewport.X / viewport.Y;

	this.image_plane_height = (Math.PI / 2) / this.aspect_ratio;// 2 * Math.tan((Math.PI / 4) / 2.0);
	this.image_plane_width = Math.PI / 2;// this.image_plane_height * this.aspect_ratio;
	
	this.Update(this.Position, this.Direction);
}

Camera.prototype = {
	Update: function (vPos, vDir) {
		this.Position = vPos;
		this.Direction = vDir;

		this.n = this.Direction.multiplyNum(-1).unit();
		this.u = _UP.cross(this.n).unit();
		this.v = this.n.cross(this.u).unit();

		this.image_plane_center = this.Position.subtract(this.n);

		this.image_plane_start = this.image_plane_center.add(this.u.multiplyNum(this.image_plane_width / 2.0)).subtract(this.v.multiplyNum(this.image_plane_height / 2.0));

		this.pixel_width = this.image_plane_width / this.Viewport.X;
		this.pixel_height = this.image_plane_height / this.Viewport.Y;
	},
	GetRay: function (x, y) {
		var pos = this.Position;
		var dir = this.image_plane_start.subtract(this.u.multiplyNum(this.pixel_width * x)).add(this.v.multiplyNum(this.pixel_height * y)).subtract(this.Position);
		return new Ray(pos, dir.unit());
	}
};