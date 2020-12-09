function drawChart() {
	const jsonTable = JSON.parse($("#resultTable").val())
    
    var tempdata = new google.visualization.DataTable();
	tempdata.addColumn('datetime', 'DATE')
	tempdata.addColumn('number', 'PRICE')

	tempdata.addRows(jsonTable.length)
	for (let i = 0; i < jsonTable.length; i++) {
		const dt = new Date(jsonTable[i].time.slice(0,jsonTable[i].time.indexOf('(')))
		tempdata.setCell(i, 0, new Date(dt.getFullYear(),dt.getMonth(),dt.getDate(),dt.getHours()))
		tempdata.setCell(i, 1, parseInt(jsonTable[i].price))
	}
	

    //월별로 데이터를 묶어서 계산
    let today = new Date();
	var data = google.visualization.data.group(tempdata, [0], [{ 'column': 1, 'aggregation': google.visualization.data.sum, 'type': 'number' }])

    var options = {
		title: '일간 시간별 주문건수 (단위: 만원)',
		titleTextStyle: { fontSize: 15 },
		chartArea: { 'width': '80%', 'height': '80%' },
		height: 400,
		width: 450,
		legend: { position: 'none' },
		hAxis: { format: 'hh시' ,
        minValue : new Date(today.getFullYear(), today.getMonth(), today.getDate(), 10, 00, 00),
        viewWindow: { min: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 10, 00, 00)}
        },
        vAxis: { format: '#만원' },

    };
    

	//tooltip date format 맞춤
	var date_formatter = new google.visualization.DateFormat({
		pattern: "MM월 dd일 hh시"
	});

	//tooltip 매출액 format 맞춤
	date_formatter.format(data, 0)
	var won_formatter = new google.visualization.NumberFormat({
		pattern: "#원"
	});
	won_formatter.format(data, 1)
	var view = new google.visualization.DataView(data);
	view.setColumns([0, {
		type: 'number',
		label: data.getColumnLabel(1),
		calc: function (dt, row) {
			return { v: dt.getValue(row, 1) / 10000, f: dt.getFormattedValue(row, 1) };
		}
    }]);

	var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
	chart.draw(view, options);
    }

$(document).ready(function () {
	google.charts.load('current', { packages: ['corechart'] });
	google.charts.setOnLoadCallback(drawChart);
})