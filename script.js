// Поле, на котором всё будет происходить, — тоже как бы переменная
var canvas = document.getElementById('game');

var context = canvas.getContext('2d');
// Размер одной клеточки на поле — 10 пикселей
var grid = 10;
var width = 100* grid;
var height = 80* grid;


switch(mod){

	case 0:
		var beach=level_mod;
		var whater=beach-beach_mod;
		var x_map = 0.33;
		var x_ter = 3;
		break;

	case 1:
		var beach=level_mod;
		var whater=beach-beach_mod;
		var x_map = 0.5;
		var x_ter = 2;
		break;
	case 2:
		var beach=level_mod;
		var whater=beach-beach_mod;
		var x_map = 0.75;
		var x_ter = 1.5;
		break;

	case 3:
		var beach=level_mod;
		var whater=beach-beach_mod;
		var x_map = 0.25;
		var x_ter = 4;
		break;

	case 4:
		var beach=level_mod;
		var whater=beach-beach_mod;
		var x_map = 0.2;
		var x_ter = 6.5;
		break;
}


function gridder(g){
	return grid * g;
}

function ungridder(g){
	return g / grid;
}

var arr = new Array(height);

//context.fillStyle = '#11520B';

for (var y = 0; y < height; y++) {
	arr[y] = new Array(width);

  	for (var x = 0; x < width; x++) {
	    var nx = x/width;
	    var ny = y/height;
	    //console.log(nx);
	    //var a = Math.floor(((Math.random())+(nx))*255);
	    arr[y][x] = (Math.floor(((Math.random())*x_map+(Math.max(nx,ny,0.1-nx,0.1-ny))*x_ter)*100));
	    //var a = noise(nx, ny);
	    //value[y][x] = noise(nx, ny);
	    //context.fillStyle = 'rgb(' + a + ',' + a + ',' + a + ')';
	    //context.fillRect(gridder(y), gridder(x), grid, grid);
  	}
}


for (var iu = 0; iu<3; iu++){

	for (var y = 1; y < height-1; y++) {
	  	for (var x = 1; x < width-1; x++) {
		 	arr[y][x] = (/*arr[y-1][x-1]+arr[y-1][x+1]+arr[y+1][x-1]+arr[y+1][x+1]+*/arr[y-1][x]+arr[y][x+1]+arr[y][x-1]+arr[y+1][x])/5;
	  	}
	}



	for (var y = 1; y < height-1; y++) {
	  	for (var x = 1; x < width-1; x++) {
	  		if(arr[y-1][x] > whater && arr[y][x+1] > whater && arr[y][x-1] > whater && arr[y+1][x] > whater && arr[y][x] <= whater)
		 	arr[y][x] = Math.floor((arr[y-1][x] + arr[y][x+1] + arr[y][x-1] + arr[y+1][x])/4)+2;
	  	}
	}
	for (var y = 1; y < height-1; y++) {
	  	for (var x = 1; x < width-1; x++) {
	  		let kol_whater=0
	  		if(arr[y-1][x] <= whater) kol_whater++;
	  		if(arr[y][x+1] <= whater) kol_whater++;
	  		if(arr[y][x-1] <= whater) kol_whater++;
	  		if(arr[y+1][x] <= whater) kol_whater++;

	  		if(kol_whater >= 3) arr[y][x] = 3;
	  	}
	}

	for (var y = 1; y < height-1; y++) {
	  	for (var x = 1; x < width-1; x++) {
	  		if(arr[y-1][x] > whater && arr[y][x+1] > whater && arr[y][x-1] > whater && arr[y+1][x] > whater && arr[y][x] <= whater)
		 	arr[y][x] = Math.floor((arr[y-1][x] + arr[y][x+1] + arr[y][x-1] + arr[y+1][x])/4)+1;
	  	}
	}
}

var he = ungridder(height);
var wi = ungridder(width);

for (var y = 0; y < he; y++) {
	//console.log(y);

  	for (var x = 0; x < wi; x++) {
  		if(arr[y][x]>beach || (x == 0 || y == 0 || x+1 == wi || y+1 == he))
  			context.fillStyle = '#59f';
  		else if(arr[y][x]>whater)
  			context.fillStyle = '#F3B100';
  		else
  			context.fillStyle = '#080';
  		// var a = arr[y][x];
	   //  context.fillStyle = 'rgb(' + a + ',' + a + ',' + a + ')';
	    context.fillRect(gridder(x),gridder(y), grid, grid);
  	}
}
