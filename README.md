# web_world_2d
Create 2d js world map

Создание 2D игровой карты для клеточного мира.
Creating a 2D game card for the cellular world.

Генерация принимает 3 параметра. Посредством контроля карты было сокращено до двух параметров, а именно - модификация карты и её размер.
от этого зависят передаваеммые коэффициенты. 
На данном этапе первый коэффициент отвечает за случайность появления точки на карте, второй - за отдалённость от края карты. 
Второе достигается путём деления позиции точки на ширину поля и умножения на соответствующий коэффициент

Чем больше увиличивается второй параметр и уменьшается первый соответственно - тем плотнее становятся континенты и наоборот - больше островов и разрывов

Всё что больше параметра whater - вода.
Иначе всё что больше beach - берег. 
Остальное - Трава

! Берег такого же уровня как и вода, когда отключён соответствующий параметр
