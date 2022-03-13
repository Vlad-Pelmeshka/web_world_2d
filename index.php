<?php include "data.php";

if(!(isset($_GET['beach_mod'])) || !(isset($_GET['mod'])) || !(isset($_GET['level_mod'])) || !(isset($_GET['grid_mod']))){
	echo "<script>location.replace('/index.php?beach_mod=0&grid_mod=0&mod=0&level_mod=12');</script>";
}

 ?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>

	<link rel="stylesheet" href="style.css">
</head>
<body>
	<div class="block">
		<div class="canvas_block">
			<canvas id="game" width="<?php echo $width ?>" height="<?php echo $height ?>"></canvas>
		</div>
		<form action="">
			<?php

			$grid_mod_arr = array('Убрать сетку','Добавить сетку');
			$beach_mod_arr = array('Убрать песок','Добавить песок');
			$mod_arr = array(
				0 => 'Материк',
				1 => 'Озера с островани',
				2 => 'Пангея',
				3 => 'Пангея+',
				4 => 'Без озёр');
			$level_mod = array(
				0 => array(
					13 => 'огромный',
					12 => 'большой',
					11 => 'средний',
					10 => 'остров',
				),
				1 => array(
					13 => 'огромный',
					12 => 'идеальный',
					11 => 'малая пангея',
					10 => 'острова',
				),
				2 => array(
					16 => 'огромный озерный континент',
					15 => 'озерный континент',
					14 => 'малые континенты',
					13 => 'острова',
					12 => 'редкие острова',
				),
				3 => array(
					14 => 'Большой',
					13 => 'Идеальный',
					12 => 'Компактный',
					11 => 'Дуельный',
				),
				4 => array(
					20 => 'Огромный',
					19 => 'Большой',
					17 => 'Средний',
					16 => 'Маленький',
					15 => 'Компактный',
					14 => 'Дуельный',
				)
			);

			?>
			<select name="grid_mod" >
				<?php foreach ($grid_mod_arr as $key => $value){
					echo '<option value="' . $key . '"';
					echo ($_GET['grid_mod'] == $key) ? ' selected' : '';
					echo '>' . $value . '</option>';
				} ?>
			</select>
			<select name="beach_mod" >
				<?php foreach ($beach_mod_arr as $key => $value){
					echo '<option value="' . $key . '"';
					echo ($_GET['beach_mod'] == $key) ? ' selected' : '';
					echo '>' . $value . '</option>';
				} ?>
			</select>
			<select name="mod" >
				<?php foreach ($mod_arr as $key => $value){
					echo '<option value="' . $key . '"';
					echo (isset($_GET['mod']) && $_GET['mod'] == $key) ? ' selected' : '';
					echo '>' . $value . '</option>';
				} ?>
			</select>
			<select name="level_mod" >
				<?php foreach ($level_mod[$_GET['mod']] as $key => $value){
					echo '<option value="' . $key . '"';
					echo (isset($_GET['level_mod']) && $_GET['level_mod'] == $key) ? ' selected' : '';
					echo '>' . $value . '</option>';
				} ?>
			</select>

			<input type="submit" value="Сменить">
		</form>
	</div>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
	<script src="script.js"></script>
	<script>
	    function addOnWheel(elem, handler) {
	      if (elem.addEventListener) {
	        if ('onwheel' in document) {
	          // IE9+, FF17+
	          elem.addEventListener("wheel", handler);
	        } else if ('onmousewheel' in document) {
	          // устаревший вариант события
	          elem.addEventListener("mousewheel", handler);
	        } else {
	          // 3.5 <= Firefox < 17, более старое событие DOMMouseScroll пропустим
	          elem.addEventListener("MozMousePixelScroll", handler);
	        }
	      } else { // IE8-
	        game.attachEvent("onmousewheel", handler);
	      }
	    }

	    var scale = 1;

	    addOnWheel(game, function(e) {

	      var delta = e.deltaY || e.detail || e.wheelDelta;

	      // отмасштабируем при помощи CSS
	      if (delta > 0) scale += 0.05;
	      else scale -= 0.05;

	      game.style.transform = game.style.WebkitTransform = game.style.MsTransform = 'scale(' + scale + ')';

	      // отменим прокрутку
	      e.preventDefault();
	    });

  </script>
</body>
</html>