function sum_data (obj1,obj2,name) {
     
    const data1=obj1["data"];
    const data2=obj2["data"];
    var data={}
    for (const property in data1 ) {
	data[property] = [data1[property][0]+data2[property][0],data1[property][1]+data2[property][1]]
    }

   var visible = true;	 
   if ("visible" in obj1)
     {	 
	 visible = obj1["visible"];
     }{};

    
    return {
	data: data,
	last:obj1["last"],
	text:name,
	visible:visible,
    };

}    


function make_data (obj) {
  var list = [];

   if ("prefix_data" in obj)
     {	 
	list=list.concat(obj["prefix_data"]);
     }{};
     
  const data=obj["data"];
  for (const property in data ) {
    vals = data[property];
    percent = Math.floor((vals[0] / (vals[0]+vals[1])) * 10000)/100;   
	if (obj["last"]==property) {
	    list.push({x:parseInt(property), y:percent, indexLabel:"࣭     #"+vals[0].toString()} );
	}
	else
	{
	    list.push({x:parseInt(property), y:percent} );	
	}
  };

   var visible = true;	 
   if ("visible" in obj)
     {	 
	 visible = obj["visible"];
     }{};
     
    
   const d=  {        
       type: "line",       
       lineThickness:4,
       indexLabelFontSize: 12,       
       showInLegend: true, 		
       legendText: obj["text"],
       visible:visible,
       dataPoints: list       
   };
    
    return d;
  }
 
