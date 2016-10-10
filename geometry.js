var EPSILON = 0.000001;

function Triangle(v1, v2, v3, col) {
	this.Vertex1 = v1;
	this.Vertex2 = v2;
	this.Vertex3 = v3;
	var edge1 = this.Vertex2.subtract(this.Vertex1);
	var edge2 = this.Vertex3.subtract(this.Vertex1);
	this.Normal = edge2.cross(edge1).unit();
	this.Color = col;
	this.LightIntensity = 0;
	this.Type = 0;
	this.Reflectivity = 0;
	this.Opacity = 1.0;
	this.IndexOfRefraction = 1.0;
}

Triangle.prototype = {
	UpdateGlobalDot: function(lightDir) {
		this.GlobalDot = this.Normal.dot(lightDir);
	}
};

function Sphere(center, radius, col, light) {
	this.Center = center;
	this.Radius = radius;
	this.Color = col;
	this.LightIntensity = light;
	this.Type = 1;
	this.Reflectivity = 0;
	this.Opacity = 1.0;
	this.IndexOfRefraction = 1.0;
}

function Ray(vPos, vDir) {
	this.Position = vPos;
	this.Direction = vDir;
}

Ray.prototype = {
	Intersects: function(obj) {
		if (obj.Type==0)
			return this.IntersectsTri(obj);
		else
			return this.IntersectsSphere(obj);
	},
	IntersectsTri: function (tri) {
		this.edge1 = tri.Vertex3.subtract(tri.Vertex2);
		this.edge2 = tri.Vertex1.subtract(tri.Vertex2);
		this.directionCrossEdge2 = this.Direction.cross(this.edge2);
		this.det = this.edge1.dot(this.directionCrossEdge2);
		if (this.det < EPSILON && this.det > -EPSILON) {
			return null;
		}

		this.invDet = 1.0 / this.det;
		this.distVector = this.Position.subtract(tri.Vertex2);

		this.triU = this.distVector.dot(this.directionCrossEdge2) * this.invDet;
		if (this.triU < 0 || this.triU > 1) {
			return null;
		}

		this.distCrossEdge1 = this.distVector.cross(this.edge1);

		this.triV = this.Direction.dot(this.distCrossEdge1) * this.invDet;

		if (this.triV < 0 || this.triU + this.triV > 1) {
			return null;
		}
		var t = this.edge2.dot(this.distCrossEdge1) * this.invDet;
		return t < 0 ? null : t;
	},
	IntersectsSphere: function (sphere) {
		var offset = this.Position.subtract(sphere.Center);
		var a = this.Direction.dot(this.Direction);
		var b = 2 * this.Direction.dot(offset);
		var c = offset.dot(offset) - sphere.Radius * sphere.Radius;
		var discriminant = b * b - 4 * a * c;

		if (discriminant <= 0) {
			return null;
		}

		var t = (-b - Math.sqrt(discriminant)) / (2 * a);
		return t<0?null:t;

	}
};