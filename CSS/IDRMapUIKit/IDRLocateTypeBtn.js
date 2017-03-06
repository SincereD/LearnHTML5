var LocateBtn = function(id) {

	var locateBtn = document.getElementById(id);

	let failImage = "././image/定位_正常.png";
	let successImage = "././image/定位_成功.png";
	let followImage = "././image/定位_跟随.png";

	if (typeof LocationState == "undefined") {
		var LocationState = {　　　　　　　　　　　
			LOCATE_FAIL: 0,
			LOCATE_SUCCESS: 1,
			LOCATE_FOLLOW: 2　　　
		};
	}

	return {
		/*===================Public Method=============================*/

		/*===================Change Btn State==========================*/
		changeBtnState: function(state) {

			var currentImage;

			if (state == LocationState.LOCATE_FAIL) {
				currentImage = failImage;
			} else if (state == LocationState.LOCATE_SUCCESS) {
				currentImage = successImage;
			} else if (state == LocationState.LOCATE_FOLLOW) {
				currentImage = followImage;
			} else {
				console.log("error");
			}

			locateBtn.style.backgroundImage = "url(" + currentImage + ")"
		},

		/*===================Btn Click CallBack========================*/
		onBtnClick: function() {

			//地图定位回调函数
			//测试代码 这里要修改

			console.log("clicked");

			this.changeBtnState(2);
		},

		/*===================Update Btn Location ======================*/
		updateBtnLocation: function(x, y) {

			locateBtn.style.left = x + "px";
			locateBtn.style.top = y + "px";
			console.log(x);
		},

		/*==================Update Btn Shown State =====================*/
		updateBtnShownState: function(shown) {

			if (shown) {

				locateBtn.style.display = "inline";
			} else {

				locateBtn.style.display = "none";
			}
		}
	};
};

var locateBtn = LocateBtn("btn");

function onBtnClick() {

	locateBtn.onBtnClick();
	locateBtn.updateBtnLocation(50, 50);
	locateBtn.updateBtnShownState(true);
}