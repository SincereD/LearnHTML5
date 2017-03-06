var Composs = function(id, defaultDegree) {

	var defaultValue = defaultDegree;
	var composs = document.getElementById(id);
	var isAnimating = false;
	var timer;

	var currentValue = 0;
	var targetValue = 0;
	var flag = 1;
	var animationInterval = 1;

	return {
		/*===================Public Method=============================*/

		/*===================Change Composs Shown State================*/
		showComposs: function(shown) {

			if (shown) {

				composs.style.display = "inline";
			} else {

				composs.style.display = "none";
			}
		},

		/*===================Rotate Composs To a Degree================*/
		rotateByDegree: function(degree) {

			targetValue = currentValue + degree;

			this.initFlag();

			timer = setInterval(this.rotate, animationInterval);
		},

		/*===================Rotate Composs By a Degree================*/
		rotateToDegree: function(degree) {

			targetValue = degree;

			this.initFlag();

			timer = setInterval(this.rotate, animationInterval);
		},

		initFlag: function() {

			if (targetValue >= currentValue) {
				flag = 1;
			} else {
				flag = -1;
			}
		},

		/*=======================Rotate================================*/
		rotate: function() {

			if (Math.abs(targetValue - currentValue) < 0.5) {
				clearInterval(timer);

				isAnimating = false;
				return;
			}

			isAnimating = true;
			currentValue += 1.3 * flag;

			composs.style.transform = "rotate(" + currentValue + "deg)";
		},

		/*===================Set Default Value=========================*/
		setDefaultDegree: function(degree) {

			defaultValue = degree;
			targetValue = degree;
			timer = setInterval(this.rotate, animationInterval);
		},

		/*===================Composs Click CallBack====================*/
		compossClicked: function() {

			//地图重置回调函数
			//测试代码 这里要修改

			if (isAnimating) {
				return;
			}

			console.log("clicked");
			this.rotateToDegree(defaultValue);
		},

		/*===================Update Composs Location ======================*/
		updateCompossLocation: function(x, y) {

			composs.style.left = x + "px";
			composs.style.top = y + "px";
			console.log(x);
		}
	};
};

var composs = Composs("composs", 200);

function compossClick() {

	composs.compossClicked();
	composs.updateCompossLocation(80, 200);
	composs.showComposs(true);
}

function rotateTen() {

	composs.rotateByDegree(10);
}

function rototaToSixty() {
	composs.rotateToDegree(60);
}