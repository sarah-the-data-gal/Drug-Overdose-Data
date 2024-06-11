function makeChart(){
    let xValues=["2015","2016","2017","2018","2019"]
    let yValues=[1202022,1393204,1651674,1651990,1644764]
    
    new Chart("lineChart",{
        type:"line",
        data:{
            labels:xValues,
            datasets:[{
                data:yValues,
                label:"Death Count",
                backgroundColor:"pink",
                fill:false
                //Utils.transparentize(
            }]
        },
        options:{
            responsive:true,
            plugins:{
                title:{
                    display:true,
                    text:"Drug Related Deaths 2015-2019"
                }
            }
            //scales:{
                //y:{
                    //min:0,
                    //max:20000
                //}
            //}
        }
    });
}
makeChart();
