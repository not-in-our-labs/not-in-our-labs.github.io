const  MCF_F_H = 
  {data:
   {2019:  [622,1763],
   2020: [629,1751],
   2021: [630,1733],
   2022: [597,1683],
   2023: [583,1650],
   2024: [578,1638]},
   last:"2024",
   text: "MCF"};
 
const  PU_F_H = 
  {data:
   {2019:   [192,790],
    2020: [193,787],
    2021: [194,802],
    2022: [213,854],
    2023:  [220,870],
    2024: [237,887]},
   last:"2024",
   text: "PU"};
 

const CR_CNRS_F_H = 
  {data:
   {2019:  [30,150],
    2024: [32,128]},
   last:"2024",
   visible:false,      
   text: "CR CNRS"};


const  DR_CNRS_F_H = 
  {data:
   {2019:  [26,97],
    2024: [36,113]},
   last:"2024",
   visible:false,      
   text: "DR CNRS"};


const  CR_INRIA_F_H = 
  {data:
   {2023: [80,363]},
  prefix_data:
   [{x:new Date("2021"), y:22},
    {x:new Date("2022"), y:19}
   ],     
   last:"2023",
   visible:false,
   text: "CR INRIA (and equivalent)"};


const  DR_INRIA_F_H = 
  {data:
    {2023: [66,250]},
   prefix_data:
   [{x:new Date("2021"), y:17},
    {x:new Date("2022"), y:17}
   ],   
   last:"2023",
   visible:false,   
   text: "DR INRIA (and equivalent)"};


// const  CS_thesis_F_H = 
//   {data:
//    {2019:  [],
//    2020: [],
//    2021: [],
//    2022: [],
//    2023: [],
//    2024: []},
//    last:"2024",
//    text: ""};


const  Qualif_F_H = 
  {data:
   {2021: [116,284],
    2022: [99,207],
    2023: [98,236],
    2024: [140,322],
    2025: [148,327],
    2026: [152,375],    
   },
   last:"2026",
   text: "Qualified to apply for MCF in sec 27"};

const CS_chart =
{
      title:{
      text: "Proportion of women in Computer Science French academics (section 27)"  
      },
        axisX:{      
            valueFormatString: "YYYY" ,
            labelAngle: -50
        },
        axisY:{      
            title: "Percentage of women"
        },
    legend: {
	horizontalAlign: "center",	
        cursor: "pointer",
        itemclick: function (e) {
            //console.log("legend click: " + e.dataPointIndex);
            //console.log(e);
            if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                e.dataSeries.visible = false;
            } else {
                e.dataSeries.visible = true;
            }
	    
            e.chart.render();
        }
    }, 
    height: 700,
      data: [
	  make_data(MCF_F_H),
	  make_data(PU_F_H),
	  make_data(sum_data(MCF_F_H,PU_F_H,"MCF and PU")),
	  make_data(Qualif_F_H),	  	  
	  make_data(CR_CNRS_F_H),
	  make_data(DR_CNRS_F_H),
	  make_data(CR_INRIA_F_H),
	  make_data(DR_INRIA_F_H),
	  { type: "line", showInLegend: true, 		
	    legendText: "(click on their legend to hide/unhide a serie)",
	    visible: false,
	    legendMarkerColor: "#FFF",
	    color: "#FFF",	    	    
		dataPoints: [{ x: new Date(2023, 0, 1), y: null }]
	      }
      ]
    }
