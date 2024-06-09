let xValues=["2015","2016","2017","2018","2019"]
let yValues=[1202022,1393204,1651674,1651990,1644764]

new Chart("lineChart",{
    type:"line",
    data:{
        labels:xValues,
        datasets:[{
            data:yValues
        }]
    }
});