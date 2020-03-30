$(document).ready(function () {

	var ctx1 = $("#pie-chartcanvas-1");
    var ctx2 = $("#pie-chartcanvas-2");
    var ctx3 = $("#pie-chartcanvas-3");

	var data1 = {
		labels : ["100-96%", "95-91%", "90-86%", "85-81%", "80-76%", ">75%"],
		datasets : [
			{
				label : "Average grades for array test 2018",
				data : [13, 
                11, 
                8, 
                7, 
                3, 
                1], 
				backgroundColor : [
                    "#5FA38F",
                    "#63AC7D",
                    "#7BB261",
                    "#A0B53F",
                    "#CCB119",
                    "#FFA600"

                ],
                borderColor : [
                    "#CDA776",
                    "#989898",
                    "#CB252B",
                    "#E39371",
					"#1D7A46",
					"#CDA776"
                ],
                borderWidth : [1, 1, 1, 1, 1]
			}
		]
	};

	var data2 = {
		labels :   ["100-96%", "95-91%", "90-86%", "85-81%", "80-76%", ">75%"],
		datasets : [
			{
				label : "Average grades for functions test 2018",
				data :   [12, 
				16, 
				5, 
				4, 
				3, 
				2],
				backgroundColor : [
					"#5FA38F",
                    "#63AC7D",
                    "#7BB261",
                    "#A0B53F",
                    "#CCB119",
                    "#FFA600"
                   
                   
                ],
                borderColor : [
					"#CDA776",
                    "#989898",
                    "#CB252B",
                    "#E39371",
					"#1D7A46",
					"#CDA776"
                ],
                borderWidth : [1, 1, 1, 1, 1]
			}
		]
    };
    
    
	var data3 = {
		labels : ["100-96%", "95-91%", "90-86%", "85-81%", "80-76%", ">75%"],
		datasets:	[	
			{
				label : "Average grades for variables test 2018",
				data : [16, 13, 7, 5, 4, 1], 
				backgroundColor : [
                    "#5FA38F",
                    "#63AC7D",
                    "#7BB261",
                    "#A0B53F",
                    "#CCB119",
                    "#FFA600"
                ],
                borderColor : [
					"#CDA776",
                    "#989898",
                    "#CB252B",
                    "#E39371",
					"#1D7A46",
					"#CDA776"
                ],
                borderWidth : [1, 1, 1, 1, 1]
			}
		]
	};

	var options1 = {
		title : {
			display : true,
			position : "top",
			text : "Arrays homework 2018",
			fontSize : 18,
			fontColor : "#111"
		},
		legend : {
			display : true,
			position : "bottom"
		}
	};
	var options2 = {
		title : {
			display : true,
			position : "top",
			text : "Functions homework 2018",
			fontSize : 18,
			fontColor : "#111"
		},
		legend : {
			display : true,
			position : "bottom"
		}
	};
	var options3= {
		title : {
			display : true,
			position : "top",
			text : "Variables homework 2018",
			fontSize : 18,
			fontColor : "#111"
		},
		legend : {
			display : true,
			position : "bottom"
		}
	};


	var chart1 = new Chart( ctx1, {
		type : "pie",
		data : data1,
		options : options1
	});

	var chart2 = new Chart( ctx2, {
		type : "pie",
		data : data2,
		options : options2
    });
    
    var chart3 = new Chart( ctx3, {
		type : "pie",
		data : data3,
		options : options3
	});

});
