var canvasPos=function(){$("#new").css('max-height',$(window).height()-192);$("#new").css('margin-top',-$("#new").height()/2-4);$("#new").css('margin-left',-$("#new").width()/2);}
function showFilters(){saveCheckPoint();$(".setting").each(function(){$(this).hide();});$(".theme").each(function(){$(this).hide();});$("#filters").show();$('.setting').perfectScrollbar('update');$("#title").text("Filters");$("#new").swipe("enable");$('#undo').show();$("#check").hide();}
function showPackage(){test=$("#package-icon").hasClass("active");if(test===false)
saveCheckPoint();$("#package").toggle();$('.theme').perfectScrollbar('update');$("#title").text("Package");$(".list-item").on("mouseenter",function(){$(this).addClass("active");});$(".list-item").on("mouseleave",function(){$(this).removeClass("active");});}
function showSettings(){saveCheckPoint();$(".setting").each(function(){$(this).hide();});$(".theme").each(function(){$(this).hide();});$("#settings").show();$("#title").text("Settings");$("#back").hide();$('.setting').perfectScrollbar('update');$("#new").swipe("disable");initTempCanvas();$('#undo').show();$("#check").hide();}
function showCSettings(){saveCheckPoint();$(".setting").each(function(){$(this).hide();});$(".theme").each(function(){$(this).hide();});$("#c-settings").show();$("#title").text("Camera");$("#c-back").hide();$('.setting').perfectScrollbar('update');$("#new").swipe("disable");}
function showSaturation(){$(".setting").each(function(){$(this).hide();});$("#saturation").show();$('.setting').perfectScrollbar('update');$("#title").text("Saturation");}
function showEffects(){$(".setting").each(function(){$(this).hide();});$("#effects").show();$("#back").show();$('.setting').perfectScrollbar('update');$("#title").text("Effects");}
function showBrightness(){$(".setting").each(function(){$(this).hide();});$("#brightness").show();$('.setting').perfectScrollbar('update');$("#title").text("Brightness");}
function showContrast(){$(".setting").each(function(){$(this).hide();});$("#contrast").show();$('.setting').perfectScrollbar('update');$("#title").text("Contrast");}
function showVignette(){$(".setting").each(function(){$(this).hide();});$("#vignette").show();$("#title").text("Vignette");}
function showBlur(){$(".setting").each(function(){$(this).hide();});$("#blur").show();$("#title").text("Blur");}
function showFlip(){$(".setting").each(function(){$(this).hide();});$("#flip").show();$("#title").text("Flip");}
function showRotation(){$(".setting").each(function(){$(this).hide();});$("#rotation").show();$("#title").text("Rotation");$('#undo').hide();}
function showCrop(){$(".setting").each(function(){$(this).hide();});$("#crop").show();$("#back").show();$('.setting').perfectScrollbar('update');$('#undo').hide();$("#title").text("Crop");}
function showSharpen(){$(".setting").each(function(){$(this).hide();});$("#sharpen").show();$("#title").text("Sharpen");}
function showFrames(){$(".setting").each(function(){$(this).hide();});$("#frames").show();$('.setting').perfectScrollbar('update');$("#title").text("Frames");$("#back").show();}
function showSpecial(){$(".setting").each(function(){$(this).hide();});$("#special").show();$('.setting').perfectScrollbar('update');$("#title").text("Special");$("#back").show();}
function showFrameBlur(){$(".setting").each(function(){$(this).hide();});$("#frame-blur").show();$("#title").text("Frame Blur");}
function showRgb(){$(".setting").each(function(){$(this).hide();});$("#rgb").show();$(".tab-footer a").css({"width":"20%","display":"table-cell","text-align":"center"});$("#check").show();$("#title").text("RGB");}
function showNoise(){$(".setting").each(function(){$(this).hide();});$("#noise").show();$("#title").text("Noise");}
function showEditor(){$(".interaction").show();$("#undo").show();$("#check").show();$("#export-btn").show();$("#refresh-btn").show();$("#camera-btn").show();$("#gallery-btn").show();$("#take").hide();$(".back").show();$("#c-back").hide();$("#back").hide();$("#filters").removeClass("toright");$("#filters-icon").trigger("click");}