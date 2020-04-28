$(document).ready(function () {

	var ctx1 = $("#pie-chartcanvas-1");
   
	var data1 = {
		labels :   ["100-96%", "95-91%", "90-86%", "85-81%", "80-76%", ">75%"],
		datasets : [
			{
				label : "Functions and procedures quiz results 2019",
				data :   [12, 
				16, 
				5, 
				4, 
				3, 
				2],
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
			text : "Functions and procedures quiz results 2019",
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
