<?php
       //размер клетки
       $grid = 16;
       //размер поля
       $width_g = 80;
       $height_g = 55;

       $width = $width_g * $grid;
       $height =  $height_g * $grid;

       $mod_arr = array(
         0 => 'Стандарт',
         1 => 'Материк',
         2 => 'Острова',
       );
       $drop_pond_arr = array(
         0 => 'Не активен',
         1 => 'Убрать водоёмы',
       );
        $drop_island_arr = array(
         0 => 'Не активен',
         1 => 'Убрать острова',
       );
       $multiplication_arr = array(
         '9.5' => 'Размер 1',
         '10' => 'Размер 2',
         '10.2' => 'Размер 3',
         '10.5' => 'Размер 4',
         '11' => 'Размер 5',
       );
        $texture_arr = array(
           0 => 'Без текстур',
           1 => 'С текстурами',
       );




?>
<script>


  //размер клетки
  var grid = <?php echo $grid; ?>;
  //размер поля
  var width_g = <?php echo $width_g; ?>;
  var height_g = <?php echo $height_g; ?>;
  var width = <?php echo $width; ?>;
  var height = <?php echo $height; ?>;

  var image_arr = new Array();
  image_arr['g'] = new Image();
  image_arr['g'].src = 'image/grass1.png';

  image_arr['w'] = new Image();
  image_arr['w'].src = 'image/water.jpg';


  //const image_arr = new Map([
          //['g',  '/image/ground.png'],
          //['w',  '/image/water.png'],
      // ]);

  function gridder(g){
  	return g * grid;
  }
  function ungridder(g){
  	return Math.ceil(g / grid);
  }

  //отрисовка карты


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

  //Возращение позиций клетки экрана
  function getCursorPosition(canvas,event){
        const rect = canvas.getBoundingClientRect();
        const x = ungridder((event.clientX - rect.left)/scale);
        const y = ungridder((event.clientY - rect.top)/scale);
        console.log("x:" + x + " y:" + y);
        //context.fillStyle = "black";
        //context.fillRect(gridder(x-1),gridder(y-1),grid,grid);
  }
</script>