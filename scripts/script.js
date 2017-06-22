var lineChartData = {
	//X坐标数据
	labels : ["2时","4时","6时","8时","10时","12时","14时","16时","18时","20时","22时","24时"],
	datasets : [
		{	
			//统计表的背景颜色
			fillColor : "rgba(100,30,30,0.5)",
			//统计表画笔颜色
			strokeColor : "rgba(100,30,30, 1)",
			//点的颜色
			pointColor : "rgba(155, 39, 39, 1);",
			//点边框的颜色
			pointStrokeColor : "#fff",
			//鼠标触发时点的颜色
			pointHighlightFill : "#fff",
			//鼠标触发时点边框的颜色
			pointHighlightStroke : "rgba(220,220,220,1)",
			//Y坐标数据
			data : [1,2,3,4,5,5,6,7,8,8,4,3]
		},
		{	
			//统计表的背景颜色
			fillColor : "rgba(65,190,128,0.5)",
			//统计表画笔颜色
			strokeColor : "rgba(65,190,128, 1)",
			//点的颜色
			pointColor : "rgba(155, 39, 39, 1);",
			//点边框的颜色
			pointStrokeColor : "#fff",
			//鼠标触发时点的颜色
			pointHighlightFill : "#fff",
			//鼠标触发时点边框的颜色
			pointHighlightStroke : "rgba(65,190,128,1)",
			//Y坐标数据
			data : [3,5,2,4,3,1,2,5,7,7,5,1]
		},
		{
			fillColor : "rgba(20,160,20,0.3)",
			strokeColor : "rgba(20,160,20, 1)",
			pointColor : "rgba(23, 126, 23, 1)",
			pointStrokeColor : "#fff",
			pointHighlightFill : "#fff",
			pointHighlightStroke : "rgba(151,187,205,1)",
			data : [2,2,1,4,2,4,5,7,8,8,4,3]
		}
	]

}

window.onload = function(){
	var ctx = document.getElementById("canvas").getContext("2d");
	window.myLine = new Chart(ctx).Line(lineChartData, {
		responsive: true
	});
}