$(document).ready(function () {

	var ctx1 = $("#pie-chartcanvas-1");
   
	var jsonfile = {
		"title": "Array quiz results 2019", 
		"jsonarray": [
		{
		   "grades": "Grades: 100-96%",
		   "results": 16
		}, {
		   "grades": "Grades: 95-91%",
		   "results": 13
		}, 
		 {
		   "grades": "Grades: 90-86%",
		   "results": 7
		},{  
		 	"grades": "Grades: 85-81%",
		   "results": 5
		}, 
		 {
		   "grades": "Grades: 80-76%",
		   "results": 4
		}, 
		 {
		   "grades": "Grades: >75",
		   "results": 1
		}
	 ]
	 };
	 
	 var title = jsonfile.jsonarray.map(function(e) {
		return e.title;
	 });

	 var labels = jsonfile.jsonarray.map(function(e) {
		return e.grades;
	 });
	 var data = jsonfile.jsonarray.map(function(e) {
		return e.results;
	 });;



	var data1 = {
		labels : labels,
		datasets:	[	
			{
				label : title,
				data : data, 
				backgroundColor : [
					"#7CDDDD",
                    "#007ED6",
                    "#52D726",
                    "#FFEC00",
                    "#FF73000",
                    "#FF0000"

                ],
                borderColor : [
					"#7CDDDD",
                    "#007ED6",
                    "#52D726",
                    "#FFEC00",
                    "#FF73000",
                    "#FF0000"

                ],
                borderWidth : [1, 1, 1, 1, 1]
			}
		]
	};

	var options1 = {
		title : {
			display : true,
			position : "top",
			text : "", 
			fontSize : 40,
			fontColor : "#111"
		},
		legend : {
			display : true,
			position : "right", 
			fontSize: 18
		}
	};


	var chart1 = new Chart( ctx1, {
		type : "pie",
		data : data1,
		options : options1
	});


});
