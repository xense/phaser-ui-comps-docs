Using [Abode Animate](https://www.adobe.com/ru/products/animate.html) to build UI for [Phaser 3](http://phaser.io/)
------

First steps

* Create an Animate document of type **HTML5 Canvas** or **ActionScript**.

* Create folder in the document library, where you will keep all your bitmaps.

 
*Later, when you export your UI, all images will be exported with same paths as they were in the library, 
so you can easily get them to texture atlases.*  

*Also, it will be useful to create subfolders in the bitmaps folder, 
if you want to create some separate texture atlases*

* Create your UI movieclip symbol and set *linkage name* to it.
 
*JSFL script exports all library items, that have linkage name to JSON files with that name*

* OK, now you are ready to build your UI components, windows and whatever.