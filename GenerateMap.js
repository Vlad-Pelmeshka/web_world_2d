function GenerateMap(){

   let rand;
   let edge;
   let level_water = 5;

   switch(mod){
      case 0:
         rand = 0.1;
         edge = 0.55;
         break;
      case 1:
         rand = 0.15;
         edge = 0.55;
         break;
      case 2:
         rand = 0.22;
         edge = 0.45;
         break;
       }

   let arr = new Array(width_g);

   for(let y = 0; y <width_g; y++){
   	   arr[y] = new Array(height_g);

   	   for(let x =0; x < height_g; x++){

   	   	  let pos_grid_x= x/height_g;
   	   	  let pos_grid_y= y/width_g;

   	   	  arr[y][x] = Math.round((Math.random() * rand+ Math.max(pos_grid_y,pos_grid_x,1-pos_grid_y,1-pos_grid_x) * edge) * multiplication);
   	   }
   }
   //Сглаживание воды
for(let y = 1; y < width_g - 1; y++){
    for(let x = 1; x < height_g - 1; x++){
      if(arr[y][x]<level_water) // Если мы на земле
      {
          let kol_water=0;  //количество соседних водных клеток
          // Записываем количество соседних водных клеток
          if(arr[y-1][x]>=level_water) kol_water++;
          if(arr[y+1][x]>=level_water) kol_water++;
          if(arr[y][x-1]>=level_water) kol_water++;
          if(arr[y][x+1]>=level_water) kol_water++;

          if(kol_water>=3){ // 3 из 4 сторон омывает вода
            arr[y][x]= level_water; // становится водой
          }
      }
 }
}

   //Сглаживание земли
for(let y = 1; y < width_g - 1; y++){
    for(let x = 1; x < height_g - 1; x++){
      if(arr[y][x]>=level_water) // Если мы на воде
      {
          let kol_ground=0;  //количество соседних земных клеток
          // Записываем количество соседних земных клеток
          if(arr[y-1][x]<level_water) kol_ground++;
          if(arr[y+1][x]<level_water) kol_ground++;
          if(arr[y][x-1]<level_water) kol_ground++;
          if(arr[y][x+1]<level_water) kol_ground++;

          if(kol_ground>=3){ // 3 из 4 сторон пересекает землю
            arr[y][x]= level_water-1; // становится землёй
          }
      }
 }
}

      //убрать некрасивые островка
      if(drop_island != 0)
        for(let y = 1; y < width_g - 1; y++)
          for(let x = 1; x < height_g - 1; x++)
            if(arr[y-1][x]>=level_water && arr[y+1][x]>=level_water && arr[y][x-1]>=level_water && arr[y][x+1]>=level_water)
                arr[y][x] = Math.ceil((arr[y][x+1]+arr[y][x-1]+arr[y+1][x]+arr[y-1][x])/4);


      //убрать некрасивые водоёмы
      if(drop_pond != 0)
        for(let y = 1; y < width_g - 1; y++)
          for(let x = 1; x < height_g - 1; x++)
            if(arr[y-1][x]<level_water && arr[y+1][x]<level_water && arr[y][x-1]<level_water && arr[y][x+1]<level_water)
                      arr[y][x] = Math.floor((arr[y][x+1]+arr[y][x-1]+arr[y+1][x]+arr[y-1][x])/4);
//Убрать островки по краям карты
 for(let y = 0; y < width_g; y++){
    arr[y][0] = level_water;
    arr[y][height_g-1] = level_water;
 }
 for(let x = 0; x < height_g; x++){
    arr[0][x] = level_water;
    arr[width_g-1][x] = level_water;
 }

//Карта
  for(let y = 0; y < width_g; y++){
    for(let x = 0; x < height_g; x++){
     if(arr[y][x] < level_water){
      arr[y][x] = 'g';
     }else{
      arr[y][x] = 'w';
     }
 }
}

   //arr[10][20] = 200;

    ShowMap(width_g,height_g,arr);
}
