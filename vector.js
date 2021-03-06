function Vector(x, y, z) {
	this.x = x;
	this.y = y;
	this.z = z;
}


Vector.prototype = {
	negative: function() {
		return new Vector(-this.x, -this.y, -this.z);
	},
	add: function(v) {
		return new Vector(this.x + v.x, this.y + v.y, this.z + v.z);
	},
	addNum: function(v) {
		return new Vector(this.x + v, this.y + v, this.z + v);
	},
	subtract: function(v) {
		return new Vector(this.x - v.x, this.y - v.y, this.z - v.z);
	},
	subtractNum: function(v) {
		return new Vector(this.x - v, this.y - v, this.z - v);
	},
	multiply: function(v) {
		return new Vector(this.x * v.x, this.y * v.y, this.z * v.z);
	},
	multiplyNum: function (v) {
		return new Vector(this.x * v, this.y * v, this.z * v);
	},
	//divide: function(v) {
	//	if (v instanceof Vector) return new Vector(this.x / v.x, this.y / v.y, this.z / v.z);
	//	else return new Vector(this.x / v, this.y / v, this.z / v);
	//},
	//equals: function(v) {
	//	return this.x == v.x && this.y == v.y && this.z == v.z;
	//},
	dot: function(v) {
		return this.x * v.x + this.y * v.y + this.z * v.z;
	},
	cross: function(v) {
		return new Vector(
		  this.y * v.z - this.z * v.y,
		  this.z * v.x - this.x * v.z,
		  this.x * v.y - this.y * v.x
		);
	},
	length: function() {
		return Math.sqrt(this.dot(this));
	},
	unit: function () {
		var v = this.length();
		return new Vector(this.x / v, this.y / v, this.z / v)
		//return this.divide(this.length());
	},
	//min: function() {
	//	return Math.min(Math.min(this.x, this.y), this.z);
	//},
	//max: function() {
	//	return Math.max(Math.max(this.x, this.y), this.z);
	//},
	toAngles: function() {
		return {
			theta: Math.atan2(this.z, this.x),
			phi: Math.asin(this.y / this.length())
		};
	},
	//angleTo: function(a) {
	//	return Math.acos(this.dot(a) / (this.length() * a.length()));
	//},
	//toArray: function(n) {
	//	return [this.x, this.y, this.z].slice(0, n || 3);
	//},
	//clone: function() {
	//	return new Vector(this.x, this.y, this.z);
	//},
	left: function() {
		return _UP.cross(this.negative()).unit();

	},
	up: function() {
		return this.negative().cross(this.left()).unit();
	},
	reflect: function(b) {
		var d = this.dot(b);
		return this.subtract(b.multiplyNum(2).multiplyNum(d)).unit();
	},
	//init: function(x, y, z) {
	//	this.x = x; this.y = y; this.z = z;
	//	return this;
	//}
};

var _UP = new Vector(0, 1, 0);
