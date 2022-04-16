<?php

	//Размер клеточки
	$grid = 16;

	//Размер поля
	$width = 70 * $grid;
	$height = 60 * $grid;
?>
<script>

	// Массив изображений
	var map_img = new Array();

	map_img[0] = new Image();
	map_img[0].src = 'image/whater.jpg';

	map_img[1] = new Image();
	map_img[1].src = 'image/sand.jpg';

	map_img[2] = new Image();
	map_img[2].src = 'image/gray.jpg';

	// Размер одной клеточки на поле
	var grid = <?php echo $grid ?>;

	// Размер поля, задается в data.php
	var width = <?php echo $width ?>;
	var height = <?php echo $height ?>;

	// свойства карты
	var grid_mod = <?php echo $_GET['grid_mod'] ?>;
	var beach_mod = <?php echo $_GET['beach_mod'] ?>;
	var mod = <?php echo $_GET['mod'] ?>;
	var level_mod = <?php echo $_GET['level_mod'] ?>;
	/*
		0 - Материк
			13 - огромный
			12 - большой
			11 - средний
			10 - остров
		1 - Озера с островани
			13 - огромный
			12 - идеальный
			11 - малая пангея
			10 - острова
		2 - Пангея
			16 - огромный озерный континент
			15 - озерный континент
			14 - малые континенты
			13 - острова
			12 - редкие острова
		3 - Пангея+
			14 - Большой
			13 - Идеальный
			12 - Компактный
			11 - Дуельный
		4 - Без озёр
			20 - Огромный
			19 - Большой
			17 - Средний
			16 - Маленький
			15 - Компактный
			14 - Дуельный

	 */

	// Изменения параметра в размер клеточки 1 -> 10
	function gridder(g){
		return grid * g;
	}

	// Количество клеточек в данной длине 10 -> 1
	function ungridder(g){
		return g / grid;
	}

	// Отрисовка карты
	function ShowMap(he,wi){
		for (var y = 0; y < he; y++) {
		  	for (var x = 0; x < wi; x++) {
		  		context.drawImage(map_img[arr[y][x]],gridder(x),gridder(y), grid-grid_mod, grid-grid_mod);
		  	}
	  	}
	}


</script>
