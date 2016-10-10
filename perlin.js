var PerlinNoise = {
	cos: [1,0.99992,0.99968,0.99928,0.99873,0.99801,0.99714,0.9961,0.99491,0.99356,0.99205,0.99038,0.98856,0.98658,0.98444,0.98215,0.97969,0.97709,0.97432,0.9714,0.96833,0.9651,0.96172,0.95819,0.9545,0.95067,
			0.94668,0.94254,0.93825,0.93381,0.92922,0.92448,0.9196,0.91457,0.90939,0.90407,0.89861,0.893,0.88725,0.88136,0.87533,0.86916,0.86285,0.85641,0.84983,0.84311,0.83626,0.82927,0.82216,0.81491,0.80753,
			0.80003,0.79239,0.78463,0.77675,0.76874,0.76061,0.75236,0.74399,0.7355,0.72689,0.71817,0.70933,0.70038,0.69132,0.68215,0.67287,0.66349,0.65399,0.6444,0.6347,0.6249,0.615,0.605,0.59491,0.58472,
			0.57444,0.56406,0.5536,0.54305,0.53241,0.52169,0.51089,0.5,0.48903,0.47799,0.46687,0.45568,0.44441,0.43307,0.42167,0.41019,0.39865,0.38705,0.37539,0.36366,0.35188,0.34004,0.32815,0.31621,0.30421,
			0.29217,0.28008,0.26795,0.25577,0.24355,0.2313,0.21901,0.20668,0.19432,0.18193,0.1695,0.15706,0.14459,0.13209,0.11957,0.10704,0.09449,0.08192,0.06934,0.05675,0.04414,0.03154,0.01892,0.00631,-0.00631,
			-0.01892,-0.03154,-0.04414,-0.05675,-0.06934,-0.08192,-0.09449,-0.10704,-0.11957,-0.13209,-0.14459,-0.15706,-0.1695,-0.18193,-0.19432,-0.20668,-0.21901,-0.2313,-0.24355,-0.25577,-0.26795,-0.28008,-0.29217,-0.30421,-0.31621,
			-0.32815,-0.34004,-0.35188,-0.36366,-0.37539,-0.38705,-0.39865,-0.41019,-0.42167,-0.43307,-0.44441,-0.45568,-0.46687,-0.47799,-0.48903,-0.5,-0.51089,-0.52169,-0.53241,-0.54305,-0.5536,-0.56406,-0.57444,-0.58472,-0.59491,
			-0.605,-0.615,-0.6249,-0.6347,-0.6444,-0.65399,-0.66349,-0.67287,-0.68215,-0.69132,-0.70038,-0.70933,-0.71817,-0.72689,-0.7355,-0.74399,-0.75236,-0.76061,-0.76874,-0.77675,-0.78463,-0.79239,-0.80003,-0.80753,-0.81491,
			-0.82216,-0.82927,-0.83626,-0.84311,-0.84983,-0.85641,-0.86285,-0.86916,-0.87533,-0.88136,-0.88725,-0.893,-0.89861,-0.90407,-0.90939,-0.91457,-0.9196,-0.92448,-0.92922,-0.93381,-0.93825,-0.94254,-0.94668,-0.95067,-0.9545,
			-0.95819,-0.96172,-0.9651,-0.96833,-0.9714,-0.97432,-0.97709,-0.97969,-0.98215,-0.98444,-0.98658,-0.98856,-0.99038,-0.99205,-0.99356,-0.99491,-0.9961,-0.99714,-0.99801,-0.99873,-0.99928,-0.99968,-0.99992,-1],
	CosineInterpolate: function(v1, v2, x) {
		var f = (1.0 - this.cos[Math.floor(x*this.cos.length)]) * 0.5;
		return v1 * (1.0 - f)+(v2*f);
	},
	GetNoiseMap: function (width, height, baseFreq, persistence, maxOctaves, seed) {
		var map = [], //output map
			noise = [], //iteration noise map
			freq = baseFreq, //iteration frequency of noise cells
			count = 0, //number of iterations
			amplitude = 0.5, //variability per iteration
			maxHeight = 0.0, //bound for normalization
			minHeight = maxOctaves, //bound for normalization
			tall = width > height ? width : height, //tallest dimension
			i, x, y, mod, xnoise, ynoise, xoffset, yoffset, interp1, interp2; //temps
		this.RNG.seed = seed;

		//initialize map
		for (y = 0; y < height; y++) {
			var arr = [];
			for (x = 0; x < width; x++)
				arr[x] = 0;
			map[y] = arr;
		}

		while ((freq / 2) <= tall && count < maxOctaves) {
			//generate noise map for this iteration
			noise = [];
			for (i = 0; i <= freq; i++)
				noise[i] = [];
			for (x = 0; x <= freq; x++) {

				for (y = 0; y <= freq; y++) {
					noise[y][x] = (this.RNG.next() * (amplitude * 2.0)) + amplitude;
				}
			}
			mod = tall / freq;

			//generate output based on this iteration's noise map
			for (y = 0; y < height; y++) {
				ynoise = Math.floor(y / mod);
				yoffset = (y % mod) / mod;
				for (x = 0; x < width; x++) {
					xnoise = Math.floor(x / mod);
					xoffset = (x % mod) / mod;

					interp1 = this.CosineInterpolate(noise[ynoise][xnoise], noise[ynoise][xnoise + 1], xoffset);
					interp2 = this.CosineInterpolate(noise[ynoise + 1][xnoise], noise[ynoise + 1][xnoise + 1], xoffset);
					map[y][x] += this.CosineInterpolate(interp1, interp2, yoffset);
				}
			}

			amplitude *= persistence;
			count++;
			freq *= 2;
		}

		//find min and max values
		map.map(function (i) {
			i.map(function (j) {
				if (j > maxHeight) maxHeight = j;
				if (j < minHeight) minHeight = j;
			});
		});

		//normalize to 0.0-1.0
		map = map.map(function (i) {
			return i.map(function (j) {
				return ((j - minHeight) / (maxHeight - minHeight));
			});

		});

		return map;
	},
	GetNoiseMap3D:  function(_x, _y, _z, baseFreq, persistence, maxOctaves, seed) {
		var map = [], //output map
			noise = [], //iteration noise map
			freq = baseFreq, //iteration frequency of noise cells
			count = 0, //number of iterations
			amplitude = 0.5, //variability per iteration
			maxHeight = 0.0, //bound for normalization
			minHeight = maxOctaves, //bound for normalization
			tall = Math.max(_x, _y, _z), //tallest dimension
			i, x, y,z, mod, xnoise, ynoise, znoise, xoffset, yoffset, zoffset, xinterp1, xinterp2, xinterp3, xinterp4, yinterp1, yinterp2; //temps
		this.RNG.seed = seed;


		for (var i = 0; i < _x; i++) {
			var arrY = [];
			for (var j = 0; j < _y; j++) {
				arrY[j] = [];
				for (var k = 0; k < _z; k++) {
					arrY[j][k] = 0;
				}
			}
			map[i] = arrY;
		}

		while ((freq / 2) <= tall && count < maxOctaves) {
			//generate noise map for this iteration
			noise = [];
			for (i = 0; i <= freq; i++) {
				var arrY = [];
				for (var j = 0; j <= freq; j++) {
					arrY[j] = [];
				}
				noise[i] = arrY;

			}

			for (x = 0; x <= freq; x++) {

				for (y = 0; y <= freq; y++) {
					for (z = 0; z <= freq; z++) {
						noise[x][y][z] = (this.RNG.next() * (amplitude * 2.0)) + amplitude;
					}
				}
			}
			mod = tall / freq;

			//console.log(noise);

			//generate output based on this iteration's noise map
			for (x = 0; x < _x; x++) {
				xnoise = Math.floor(x / mod);
				xoffset = (x % mod) / mod;

				for (y = 0; y < _y; y++) {
					ynoise = Math.floor(y / mod);
					yoffset = (y % mod) / mod;

					for (z = 0; z < _z; z++) {
						znoise = Math.floor(z / mod);
						zoffset = (z % mod) / mod;

						xinterp1 = this.CosineInterpolate(noise[xnoise][ynoise][znoise], noise[xnoise + 1][ynoise][znoise], xoffset);
						xinterp2 = this.CosineInterpolate(noise[xnoise][ynoise + 1][znoise], noise[xnoise + 1][ynoise + 1][znoise], xoffset);
						xinterp3 = this.CosineInterpolate(noise[xnoise][ynoise][znoise + 1], noise[xnoise + 1][ynoise][znoise + 1], xoffset);
						xinterp4 = this.CosineInterpolate(noise[xnoise][ynoise + 1][znoise + 1], noise[xnoise + 1][ynoise + 1][znoise + 1], xoffset);

						yinterp1 = this.CosineInterpolate(xinterp1, xinterp2, yoffset);
						yinterp2 = this.CosineInterpolate(xinterp3, xinterp4, yoffset);

						map[x][y][z] += this.CosineInterpolate(yinterp1, yinterp2, zoffset);
					}

					//interp1 = this.CosineInterpolate(noise[ynoise][xnoise], noise[ynoise][xnoise + 1], xoffset);
					//interp2 = this.CosineInterpolate(noise[ynoise + 1][xnoise], noise[ynoise + 1][xnoise + 1], xoffset);
					//map[y][x] += this.CosineInterpolate(interp1, interp2, yoffset);

				}
			}

			amplitude *= persistence;
			count++;
			freq *= 2;

		}

		console.log(map);

		//find min and max values
		map.map(function (i) {
			i.map(function (j) {
				j.map(function (k) {
					if (k > maxHeight) maxHeight = k;
					if (k < minHeight) minHeight = k;
				});
			});
		});

		//normalize to 0.0-1.0
		map = map.map(function (i) {
			return i.map(function (j) {
				return j.map(function (k) {
					return ((k - minHeight) / (maxHeight - minHeight));
				});
			});

		});

		return map;
	},
	GetNoiseMap4D:  function(size, baseFreq, persistence, maxOctaves, seed) {
		var map = [], //output map
			noise = [], //iteration noise map
			freq = baseFreq, //iteration frequency of noise cells
			count = 0, //number of iterations
			amplitude = 0.5, //variability per iteration
			maxHeight = 0.0, //bound for normalization
			minHeight = maxOctaves, //bound for normalization
			tall = size, //tallest dimension
			i, x, y, z, w, mod, xnoise, ynoise, znoise, xoffset, yoffset, zoffset, xinterp1, xinterp2, xinterp3, xinterp4, yinterp1, yinterp2; //temps
		this.RNG.seed = seed;


		for (var i = 0; i < size; i++) {
			var arrY = [];
			for (var j = 0; j < size; j++) {
				arrY[j] = [];
				for (var k = 0; k < size; k++) {
					
				}
			}
			map[i] = arrY;
		}

		while ((freq / 2) <= tall && count < maxOctaves) {
			//generate noise map for this iteration
			noise = [];
			for (i = 0; i <= freq; i++) {
				var arrY = [];
				for (var j = 0; j <= freq; j++) {
					arrY[j] = [];
				}
				noise[i] = arrY;

			}

			for (x = 0; x <= freq; x++) {

				for (y = 0; y <= freq; y++) {
					for (z = 0; z <= freq; z++) {
						noise[x][y][z] = (this.RNG.next() * (amplitude * 2.0)) + amplitude;
					}
				}
			}
			mod = tall / freq;

			//console.log(noise);

			//generate output based on this iteration's noise map
			for (x = 0; x < _x; x++) {
				xnoise = Math.floor(x / mod);
				xoffset = (x % mod) / mod;

				for (y = 0; y < _y; y++) {
					ynoise = Math.floor(y / mod);
					yoffset = (y % mod) / mod;

					for (z = 0; z < _z; z++) {
						znoise = Math.floor(z / mod);
						zoffset = (z % mod) / mod;

						xinterp1 = this.CosineInterpolate(noise[xnoise][ynoise][znoise], noise[xnoise + 1][ynoise][znoise], xoffset);
						xinterp2 = this.CosineInterpolate(noise[xnoise][ynoise + 1][znoise], noise[xnoise + 1][ynoise + 1][znoise], xoffset);
						xinterp3 = this.CosineInterpolate(noise[xnoise][ynoise][znoise + 1], noise[xnoise + 1][ynoise][znoise + 1], xoffset);
						xinterp4 = this.CosineInterpolate(noise[xnoise][ynoise + 1][znoise + 1], noise[xnoise + 1][ynoise + 1][znoise + 1], xoffset);

						yinterp1 = this.CosineInterpolate(xinterp1, xinterp2, yoffset);
						yinterp2 = this.CosineInterpolate(xinterp3, xinterp4, yoffset);

						map[x][y][z] += this.CosineInterpolate(yinterp1, yinterp2, zoffset);
					}

					//interp1 = this.CosineInterpolate(noise[ynoise][xnoise], noise[ynoise][xnoise + 1], xoffset);
					//interp2 = this.CosineInterpolate(noise[ynoise + 1][xnoise], noise[ynoise + 1][xnoise + 1], xoffset);
					//map[y][x] += this.CosineInterpolate(interp1, interp2, yoffset);

				}
			}

			amplitude *= persistence;
			count++;
			freq *= 2;

		}

		console.log(map);

		//find min and max values
		map.map(function (i) {
			i.map(function (j) {
				j.map(function (k) {
					k.map(function (l) {
						if (l > maxHeight) maxHeight = l;
						if (l < minHeight) minHeight = l;
					});
				});
			});
		});

		//normalize to 0.0-1.0
		map = map.map(function (i) {
			return i.map(function (j) {
				return j.map(function (k) {
					return k.map(function (l) {
						return ((l - minHeight) / (maxHeight - minHeight));
					});
				});
			});

		});

		return map;

	},
	RNG: {
		m_w: 123456789,
		m_z: 987654321,
		mask: 0xffffffff,
		set seed(i) {
			this.m_w= i;
			this.m_z= 987654321;
		},
		next: function() {
			this.m_z = (36969 * (this.m_z & 65535) + (this.m_z >> 16)) & this.mask;
		    this.m_w = (18000 * (this.m_w & 65535) + (this.m_w >> 16)) & this.mask;
		    var result = ((this.m_z << 16) + this.m_w) & this.mask;
		    result /= 4294967296;
		    return result + 0.5;
		}
	}

};