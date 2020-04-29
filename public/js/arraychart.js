$(document).ready(function () {

	var ctx1 = $("#pie-chartcanvas-1");
   
	var data1 = {
		labels :   ["Grades: 100-96%", "Grades: 95-91%", "Grades: 90-86%", "Grades: 85-81%", "Grades: 80-76%", "Grades: >75%"],
		datasets : [
			{
				label : "Arrays quiz results 2019",
				data :   [13, 
				11, 
				8, 
				7, 
				3, 
				1],
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
			text : "Arrays quiz results 2019",
			fontSize : 18,
			fontColor : "#111"
		},
		legend : {
			display : true,
			position : "right"
		}
	};

	var chart1 = new Chart( ctx1, {
		type : "pie",
		data : data1,
		options : options1
	});


});
