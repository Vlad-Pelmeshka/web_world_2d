// Поле, на котором всё будет происходить, — тоже как бы переменная
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var img_whater = new Image();
img_whater.src = 'image/whater.jpg';
var img_gray = new Image();
img_gray.src = 'image/gray.jpg';

var img_sand = new Image();
img_sand.src = 'image/sand.jpg';

// В зависимости от мода выставляем параметры
switch(mod){

	case 0:
		var whater=level_mod;
		var x_map = 0.33;
		var x_ter = 3;
		break;

	case 1:
		var whater=level_mod;
		var x_map = 0.5;
		var x_ter = 2;
		break;
	case 2:
		var whater=level_mod;
		var x_map = 0.75;
		var x_ter = 1.5;
		break;

	case 3:
		var whater=level_mod;
		var x_map = 0.25;
		var x_ter = 4;
		break;

	case 4:
		var whater=level_mod;
		var x_map = 0.2;
		var x_ter = 6.5;
		break;
}
var beach=whater-beach_mod;

// изменения параметра в размер клеточки 1 -> 10
function gridder(g){
	return grid * g;
}

// количество клеточек в данной длине 10 -> 1
function ungridder(g){
	return g / grid;
}

// Матрица данных
var arr = new Array(height);

for (var y = 0; y < height; y++) {
	arr[y] = new Array(width);

  	for (var x = 0; x < width; x++) {
	    var nx = x/width;
	    var ny = y/height;

	    // Генерация первоначальной части карты с установленными индексами
	    arr[y][x] = (Math.floor(((Math.random())*x_map+(Math.max(nx,ny,0.1-nx,0.1-ny))*x_ter)*100));
  	}
}

// Тройной проход обработки карты
for (var iu = 0; iu<3; iu++){

	// Сглаживание карты
	for (var y = 1; y < height-1; y++) {
	  	for (var x = 1; x < width-1; x++) {
		 	arr[y][x] = (arr[y-1][x]+arr[y][x+1]+arr[y][x-1]+arr[y+1][x])/5;
	  	}
	}

	// Убрать точечные острова
	for (var y = 1; y < height-1; y++) {
	  	for (var x = 1; x < width-1; x++) {
	  		if(arr[y-1][x] > whater && arr[y][x+1] > whater && arr[y][x-1] > whater && arr[y+1][x] > whater && arr[y][x] <= whater)
		 	arr[y][x] = Math.floor((arr[y-1][x] + arr[y][x+1] + arr[y][x-1] + arr[y+1][x])/4)+2;
		 	//arr[y][x] = 1;
	  	}
	}

	// Убрать точечные водоёмы
	for (var y = 1; y < height-1; y++) {
	  	for (var x = 1; x < width-1; x++) {
	  		if(arr[y-1][x] <= whater && arr[y][x+1] <= whater && arr[y][x-1] <= whater && arr[y+1][x] <= whater && arr[y][x] > whater)
		 	arr[y][x] = Math.floor((arr[y-1][x] + arr[y][x+1] + arr[y][x-1] + arr[y+1][x])/4);
	  	}
	}

}

console.log(whater);
console.log(beach);

// Отрисовка карты
var he = ungridder(height);
var wi = ungridder(width);

for (var y = 0; y < he; y++) {
	//console.log(y);

  	for (var x = 0; x < wi; x++) {
  		if(arr[y][x]>whater || (x == 0 || y == 0 || x+1 == wi || y+1 == he)){
  			//context.fillStyle = '#F3B100';
	    	context.drawImage(img_whater,gridder(x),gridder(y), grid-grid_mod, grid-grid_mod);
  		}
  		else if(arr[y][x]>beach ){
	    	context.drawImage(img_sand,gridder(x),gridder(y), grid-grid_mod, grid-grid_mod);
  			//context.fillStyle = '#59f';
  		}
  		else{
  			//context.fillStyle = '#080';
	    	context.drawImage(img_gray,gridder(x),gridder(y), grid-grid_mod, grid-grid_mod);
  		}
  		// var a = arr[y][x];
	   //  context.fillStyle = 'rgb(' + a + ',' + a + ',' + a + ')';
  	}
}
