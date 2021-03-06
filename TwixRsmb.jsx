{
app.beginUndoGroup("Twixtor-Comp");

var curItem = app.project.activeItem;
var selectedLayer = curItem.selectedLayers[0];
var nameLayer = selectedLayer.name;
var sourceFPS = curItem.frameRate;
var sourceDur = curItem.frameDuration;
var inLayer = selectedLayer.inPoint;
var outLayer = selectedLayer.outPoint;

var indexLayer = [selectedLayer.index];

var effect = selectedLayer.Effects.addProperty("Twixtor Pro");
effect.property("Input: Frame Rate").setValue(11.88);
effect.property("Image Prep").setValue(2);
effect.property("Frame Interp").setValue(3);
effect.property("Warping").setValue(1);
effect.property("Use GPU").setValue(3);
effect.property("Speed %").setValueAtTime(inLayer,100);

var preComp = curItem.layers.precompose(indexLayer,"Twix_"+nameLayer,true);
var preCompLayer = curItem.selectedLayers[0];
preCompLayer.inPoint = inLayer;
preCompLayer.outPoint = outLayer;

var effect = preCompLayer.Effects.addProperty("RSMB Pro");
effect.property("Draw Geom").setValue(2);
effect.property("Main_BG: Blur Amt").setValue(1);
effect.property("Main_BG: Sensitivity").setValue(100);

preCompLayer.timeRemapEnabled = true;
preCompLayer.timeRemap.setValueAtTime(inLayer,inLayer);
preCompLayer.timeRemap.setValueAtTime(outLayer-sourceDur,outLayer-sourceDur);
app.endUndoGroup();

}
