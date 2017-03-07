
var game_file_list = [
    //以下为自动修改，请勿修改
    //----auto game_file_list start----
	"libs/modules/egret/egret.js",
	"libs/modules/egret/egret.native.js",
	"libs/modules/game/game.js",
	"libs/modules/res/res.js",
	"libs/modules/eui/eui.js",
	"bin-debug/Models/Person/Mary/BaseMary.js",
	"bin-debug/LoadingUI.js",
	"bin-debug/Common/BaseEvent.js",
	"bin-debug/Common/GlobalDispatch.js",
	"bin-debug/Common/keyEvent.js",
	"bin-debug/Common/LoadConfJson.js",
	"bin-debug/Common/TextureBitmap.js",
	"bin-debug/Common/ThemeAdapter.js",
	"bin-debug/Controller/PersonControll.js",
	"bin-debug/Common/AssetAdapter.js",
	"bin-debug/Main.js",
	"bin-debug/Models/Map/Brick/Brick.js",
	"bin-debug/Models/Map/Brick/BrickKernel.js",
	"bin-debug/Models/Map/MapKernel.js",
	"bin-debug/Assembly/Assembly.js",
	"bin-debug/Models/Person/Mary/BitMary.js",
	"bin-debug/Models/Person/Mary/IMary.js",
	"bin-debug/Models/Person/PersonKernel.js",
	"bin-debug/Views/ControlPanel.js",
	//----auto game_file_list end----
];

var window = this;

egret_native.setSearchPaths([""]);

egret_native.requireFiles = function () {
    for (var key in game_file_list) {
        var src = game_file_list[key];
        require(src);
    }
};

egret_native.egretInit = function () {
    if(egret_native.featureEnable) {
        //控制一些优化方案是否开启
        egret_native.featureEnable({
            
        });
    }
    egret_native.requireFiles();
    //egret.dom为空实现
    egret.dom = {};
    egret.dom.drawAsCanvas = function () {
    };
};

egret_native.egretStart = function () {
    var option = {
        //以下为自动修改，请勿修改
        //----auto option start----
		entryClassName: "Main",
		frameRate: 30,
		scaleMode: "fixedWidth",
		contentWidth: 960,
		contentHeight: 800,
		showPaintRect: false,
		showFPS: true,
		fpsStyles: "x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9",
		showLog: true,
		logFilter: "",
		maxTouches: 2,
		textureScaleFactor: 1
		//----auto option end----
    };

    egret.native.NativePlayer.option = option;
    egret.runEgret();
    egret_native.Label.createLabel("/system/fonts/DroidSansFallback.ttf", 20, "", 0);
    egret_native.EGTView.preSetOffScreenBufferEnable(true);
};