var canvas = document.getElementById('map'); // объявляем обьект полотно
var context = canvas.getContext('2d'); // указываем тип полотна
GenerateMap();


  function ShowMap(hi,wi,arr){
    for(let y = 0; y < hi; y++){
      for(let x = 0; x < wi; x++){
        if(texture != 0)
        context.drawImage(image_arr[arr[y][x]],gridder(y),gridder(x),grid,grid);
        else{
           switch(arr[y][x]){
         case 'g':
         context.fillStyle = "darkgreen";
         break;
         case 'w':
         context.fillStyle = "rgb(71,133,200)";
         break;
}

        //context.fillStyle = "rgb(" + arr[y][x] +"," + arr[y][x] +"," + arr[y][x] + ")";
         context.fillRect(gridder(y),gridder(x),grid,grid);
        }
        /*

         */
      }
    }
  }
