function DisplayObject() {
  this.root = null;
  this.stage = null;
  this.name = null;
  this.parent = null;
  this.mask = null;
  this.visible = true;
  this.x = 0;
  this.y = 0;
  this.z = 0;
  this.scaleX = 0;
  this.scaleY = 0;
  this.scaleZ = 0;
  this.mouseX = 0;
  this.mouseY = 0;
  this.rotation = 0;
  this.rotationX = 0;
  this.rotationY = 0;
  this.rotationZ = 0;
  this.alpha = 1;
  this.width = 0;
  this.height = 0;
  this.cacheAsBitmap = false;
  this.opaqueBackground = false;
  this.scrollRect = null;
  this.filters = [];
  this.blendMode = null;
  this.transform = null;
  this.scale9Grid = null;
  this.loaderInfo = null;
  this.accessibilityProperties = null;
}

var p = DisplayObject.prototype = new EventDispatcher;
p.globalToLocal = function (point) { notImplemented(); };
p.localToGlobal = function (point) { notImplemented(); };
p.getBounds = function (targetCoordinateSpace) { notImplemented(); };
p.getRect = function (targetCoordinateSpace) { notImplemented(); };
p._hitTest = function (use_xy, x, y, useShape, hitTestObject) { notImplemented(); };
p.globalToLocal3D = function (point) { notImplemented(); };
p.local3DToGlobal = function (point3d) { notImplemented(); };

natives.DisplayObjectClass = function (scope, instance, baseClass) {
  var c = new Class("DisplayObject", DisplayObject, Class.passthroughCallable(DisplayObject));
  c.baseClass = baseClass;
  c.nativeMethods = p;
  c.makeSimpleNativeAccessors("get", ["root",
                                      "stage",
                                      "name",
                                      "parent",
                                      "mask",
                                      "visible",
                                      "x",
                                      "y",
                                      "z",
                                      "scaleX",
                                      "scaleY",
                                      "ScaleZ",
                                      "mouseX",
                                      "mouseY",
                                      "rotation",
                                      "rotationX",
                                      "rotationY",
                                      "rotationZ",
                                      "alpha",
                                      "width",
                                      "height",
                                      "cacheAsBitmap",
                                      "opaqueBackground",
                                      "scrollRect",
                                      "filters",
                                      "blendMode",
                                      "transform",
                                      "scale9Grid",
                                      "loaderInfo",
                                      "accessibilityProperties"]);
  c.makeSimpleNativeAccessors("set", ["name",
                                      "mask",
                                      "visible",
                                      "x",
                                      "y",
                                      "z",
                                      "scaleX",
                                      "scaleY",
                                      "scaleZ",
                                      "rotation",
                                      "rotationX",
                                      "rotationY",
                                      "rotationZ",
                                      "alpha",
                                      "width",
                                      "height",
                                      "cacheAsBitmap",
                                      "opaqueBackground",
                                      "scrollRect",
                                      "filters",
                                      "blendMode",
                                      "transform",
                                      "scale9Grid",
                                      "accessibilityProperties",
                                      "blendShader"]);
  return c;
};
