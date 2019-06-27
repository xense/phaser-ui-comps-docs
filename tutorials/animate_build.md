<h3>Using [Abode Animate](https://www.adobe.com/ru/products/animate.html) 
to build UI for [Phaser 3](http://phaser.io/)<h3>


<h3>First steps</h3>

* Create an Animate document of type **HTML5 Canvas** or **ActionScript**.

* Create folder in the document library, where you will keep all your bitmaps.
 
Later, when you export your UI, all images will be exported with same 
paths as they were in the library, so you can easily get them to texture atlases.  

Also, it will be useful to create subfolders in the bitmaps folder, 
if you want to create some separate texture atlases

* Create your UI movieclip symbol and set *linkage name* to it, i.e. `my_window`
 
JSFL script exports all library items, that have linkage name 
to JSON files with that name

* OK, now you are ready to build your UI components, windows and whatever.


<h3>Main rules</h3>

<h4>Available types for export</h4>

* **`component`**

Component is a container, that will be exported to it's own `ComponentClip` instance.

In Animate document, every **movieclip** instance is exported as `component`, except for instances, 
named as zones (`HIT_ZONE`, `DIMENSIONS`, or name with `DIMENSIONS_` prefix).

Components can have children of any type, including other components.

Components can have states. You can create several frames on movieclip timeline, 
and create a layer with name `STATE_IDS`, this layer must have empty keyframes with names, 
that will be exported as state names. 

More about states further


* **`image`**

Image bitmap will be exported as png.
  
In `ComponentClip` it will be created as simple Phaser Image GameObject

All bitmaps are exported to the same path, as in the document library. 
Use this to organize your bitmaps for packing to atlases.

**It's important** to save relative frames structure when creating atlases.  


* **`text`**

In `ComponentClip` will be created as Phaser Text GameObject

Text properties that are exported: 
- - fontFamily
- - fontSize
- - color
- - bold
- - italic
- - text
- - align

Also **Shadow filter** can be applied. 
Note, that shadow strength is not applicable in phaser text, so set to 50% to see how it will nearly look.

**Glow Filter** can be used as text stroke. Note, that blurX parameter is used as stroke thickness. 
So in Animate set glow strength to 1000%, to see how stroke will nearly look. 




* **`zone`**

Zones have two main purposes: Interaction and dimensions. 

Any `movieclip`, which instance is named as `HIT_ZONE`, `DIMENSIONS`, or name starts with `DIMENSIONS_`,
will be exported as zone, and its inner content will not be parsed.

For example UIButton clip must have a movieclip inside, named as `HIT_ZONE`. 
It will be used as button interaction zone.

And in UIScrollBar there must be a `DIMENSIONS` zone movieclip, it's bounds will represent scroll thumb drag bounds.  

Zones can not be scaled between states. `scaleX` and `scaleY` are ignored, `width` and `height` used instead

* **`polygon`**

Initially polygons was planned to be used only for masking, but you can also draw some primitives, if you want.

In the document polygon is a simple shape. 
It can have only line edges (no curves) and only solid-color fill.

As far as animate shapes on each frame are different instances, 
you cannot change instance params as position, scale and alpha among states.

To use polygon as a mask, simply create a masking layer with a shape and place layers that should be masked, 
under the mask layer. 

**Important!** Masking works only in root component clip, as far as nested components are placed in containers, 
and Phaser Containers do not support masking inside. But you can easily mask any container in the root.

* **`tileSprite`**

If you create a shape and fill it with a bitmap, it will be exported as tileSprite.
Shape can be a **rectangle only**, and cannot be rotated. (You can rotate its container, if you need).

Similar to the polygon, tileSprite can not be changed among states.


<h4>States</h4>

Switching component's states helps to show/hide it's children, change its' positions, rotation, scale and alpha.
Also components and text fields can have instance-unique keys to get them via UIComponentPrototype, 
and in different states keys may me applied to different instances, so when state is switched, new instances are 
applied to UIComponentPrototype automatically. 
Therefore, for example, you can create two different text fields in separate layers and give them one key. 
In the UIComponentPrototype you can set text value for that key only once, and this value will be applied 
to the current active textfield on evety state switching. Same is true for the child components. When state switches, 
all child components reapply its' clips by key.

<h4>Layers and element instances</h4>

The main rule you need to follow is **One instance - one layer**. Before exporting, script scans layers. 
If some layer contains more than one element, it will be ignored, and a warning will be shown in Animate console.

First reason of this rule is that element may change its common params (position, scale, rotation and alpha)
within keyframes (states). So for one layer only one element will be created, 
and state configs will keep only common params for them.

Well, if you component needs states, its movieclip must have a layer with name `STATE_IDS`. 
Layer must have an empty keyframe at each movieclip timeline frame. Give a name for each keyframe on this layer, 
this will be state ids. Take care of them to be unique inside a clip.

On other layers you can create keyframes to change elements' common params. 
If you need to hide an element in current state - just remove it from the current keyframe.


<h4>Hope that helps</h4>
If you still have questions about building components in Animate or any ideas to add to this doc, 
feel free to write me <anton.bystrov@gmail.com>. 