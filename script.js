// Поле, на котором всё будет происходить, — тоже как бы переменная
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

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
let beach=whater-beach_mod;

// Матрица данных
let arr = new Array(height);

for (let y = 0; y < height; y++) {
	arr[y] = new Array(width);

  	for (let x = 0; x < width; x++) {
	    let nx = x/width*grid/10;
	    let ny = y/height*grid/10;

	    // Генерация первоначальной части карты с установленными индексами
	    arr[y][x] = (Math.floor(((Math.random())*x_map+(Math.max(nx,ny,0.1-nx,0.1-ny))*x_ter)*100));
  	}
}

// Тройной проход обработки карты
for (let iu = 0; iu<3; iu++){

	// Сглаживание карты
	for (let y = 1; y < height-1; y++) {
	  	for (let x = 1; x < width-1; x++) {
		 	arr[y][x] = (arr[y-1][x]+arr[y][x+1]+arr[y][x-1]+arr[y+1][x])/5;
	  	}
	}

	// Убрать точечные острова
	for (let y = 1; y < height-1; y++) {
	  	for (let x = 1; x < width-1; x++) {
	  		if(arr[y-1][x] > whater && arr[y][x+1] > whater && arr[y][x-1] > whater && arr[y+1][x] > whater && arr[y][x] <= whater)
		 	arr[y][x] = Math.floor((arr[y-1][x] + arr[y][x+1] + arr[y][x-1] + arr[y+1][x])/4)+2;
		 	//arr[y][x] = 1;
	  	}
	}

	// Убрать точечные водоёмы
	for (let y = 1; y < height-1; y++) {
	  	for (let x = 1; x < width-1; x++) {
	  		if(arr[y-1][x] <= whater && arr[y][x+1] <= whater && arr[y][x-1] <= whater && arr[y+1][x] <= whater && arr[y][x] > whater)
		 	arr[y][x] = Math.floor((arr[y-1][x] + arr[y][x+1] + arr[y][x-1] + arr[y+1][x])/4);
	  	}
	}

}

// Отрисовка карты
let he = ungridder(height);
let wi = ungridder(width);

for (let y = 0; y < he; y++) {
	//console.log(y);

  	for (let x = 0; x < wi; x++) {
  		if(arr[y][x]>whater || (x == 0 || y == 0 || x+1 == wi || y+1 == he)){
  			arr[y][x]=0; // whater
  		}
  		else if(arr[y][x]>beach ){
  			arr[y][x]=1; // beach
  		}
  		else {
  			arr[y][x]=2; // gray
  		}


  	}
}

ShowMap(he,wi);
