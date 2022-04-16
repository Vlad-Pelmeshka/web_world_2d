<?php include "data.php"; ?>
<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="style.css">
	<title>Canvas</title>
</head>
<body>
	<div class="canva_block">
		<canvas id="map" width="<?php echo $width; ?>" height="<?php echo $height; ?>"></canvas>
	</div>
	<div class="form">
		<form method="get">

             <select name="mod">
             	<?php
             	foreach ($mod_arr as $key => $value) {
             		echo '<option value="' . $key . '" ';
             		echo ($_GET['mod'] == $key) ? 'selected' : '';
             		echo '>' . $value . '</option>';
             	}
             	 ?>
             </select>
             <select name="drop_island">
             	<?php
             	foreach ($drop_island_arr as $key => $value) {
             		echo '<option value="' . $key . '" ';
             		echo ($_GET['drop_island'] == $key) ? 'selected' : '';
             		echo '>' . $value . '</option>';
             	}
             	 ?>
             </select>
             <select name="drop_pond">
             	<?php
             	foreach ($drop_pond_arr as $key => $value) {
             		echo '<option value="' . $key . '" ';
             		echo ($_GET['drop_pond'] == $key) ? 'selected' : '';
             		echo '>' . $value . '</option>';
             	}
             	 ?>
             </select>
             <select name="multiplication">
             	<?php
             	foreach ($multiplication_arr as $key => $value) {
             		echo '<option value="' . $key . '" ';
             		echo ($_GET['multiplication'] == $key) ? 'selected' : '';
             		echo '>' . $value . '</option>';
             	}
             	 ?>
             </select>
             <select name="texture">
                <?php
                foreach ($texture_arr as $key => $value) {
                    echo '<option value="' . $key . '" ';
                    echo ($_GET['texture'] == $key) ? 'selected' : '';
                    echo '>' . $value . '</option>';
                }
                 ?>
             </select>

             <input type="submit" value="Применить!">
		</form>
	</div>
	<!--
	<div class="mod_list">
		<a href="index.php?mod=0">Стандарт</a>
		<a href="index.php?mod=1">Более водный</a>
	</div>
-->

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script>
    	var mod=<?php
    	 echo (isset($_GET['mod']) ?  $_GET['mod'] : 0);
    	  ?>;
    	var drop_island=<?php
    	 echo (isset($_GET['drop_island']) ?  $_GET['drop_island'] : 0);
    	  ?>;
    	var drop_pond=<?php
    	 echo (isset($_GET['drop_pond']) ?  $_GET['drop_pond'] : 0);
    	  ?>;
    	  var multiplication=<?php
    	 echo (isset($_GET['multiplication']) ?  $_GET['multiplication'] : 10);
    	  ?>;
           var texture=<?php
         echo (isset($_GET['texture']) ?  $_GET['texture'] : 0);
          ?>;
    </script>
    <script src="GenerateMap.js"></script>
	<script src="script.js"></script>
	<script>
		canvas.addEventListener('mousedown', function(e){
			getCursorPosition(canvas,e);
		});
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

map.attachEvent("onmousewheel", handler);

}

}




var scale = 1;




addOnWheel(map, function(e) {




var delta = e.deltaY || e.detail || e.wheelDelta;




// отмасштабируем при помощи CSS

if (delta < 0) scale += 0.05;

else scale -= 0.05;




map.style.transform = map.style.WebkitTransform = map.style.MsTransform = 'scale(' + scale + ')';




// отменим прокрутку

e.preventDefault();

});
	</script>
</body>
</html>