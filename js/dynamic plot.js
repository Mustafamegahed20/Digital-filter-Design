
// openfile = () =>{

//     const x = document.getElementById("inputGroupFile02");

//     x.addEventListener("click", function () {
//             const fr = new FileReader();
//             fr.onloadend = e => {
//                 let r = fr.result.split("\n").map(e => {
//                     return e.split(",");
//                 });
//                 console.log(r);
//             };
//             fr.readAsText(x.files[0]);
//             console.log(fr)
//         });
// }
 


realtime1 = () => {

        Plotly.d3.csv("https://raw.githubusercontent.com/Ahmed-Hossam-Aldeen/DSP-SignalViewer/main/sin.csv", function(err, rows){
                    
            function unpack(rows, key) {
            return rows.map(function(row) { return row[key]; });
            }
            
            var frames = []
            var x = unpack(rows, 'x')
            var y = unpack(rows, 'y')
            
            var n = 1000;
            for (var i = 0; i < n; i++) { 
                frames[i] = {data: [{x: [], y: []}]}
                frames[i].data[0].x = x.slice(0, i+1);
                frames[i].data[0].y = y.slice(0, i+1);
            }
            
            Plotly.newPlot('myDiv', [{
                x: frames[1].data[0].x,
                y: frames[1].data[0].y,
                fill: 'false',
                type: 'scatter',
                mode: 'lines',
                line: {color: 'blue'}
            }], {
                
                xaxis: {
                
                range: [
                        frames[999].data[0].x[0], 
                    frames[999].data[0].x[999]
                ],
                showgrid: true,
                showline: true,
                showticklabels: true,
                zeroline: true
                },
                yaxis: {
                range: [
                    -10, 
                    10      ],
                showgrid: true,
                showline: true,
                showticklabels: true,
                zeroline: true
                },
                annotations: [{
                showarrow: false,
                text: "",
                font: {
                    family: 'Gravitas One',
                    size: 48,
                    color: 'rgb(236, 231, 231)'
                },
                xref: 'paper',
                yref: 'paper',
                x: 0.5,
                y: 0.5
                }, {
                showarrow: false,
                text: "",
                font: {
                    family: 'Gravitas One',
                    size: 16,
                    color: 'rgb(236, 231, 231)'
                },
                xref: 'paper',
                yref: 'paper',
                x: 0.5,
                y: 0.35
                }]
            }).then(function() {
                Plotly.animate('myDiv', frames, {
                transition: {
                    duration: 0
                },
                frame: {
                    duration: document.getElementById("myRange").value,
                    redraw: false
                }
            });
            });
            
            }) 
    }



realtime2 = () => {

        Plotly.d3.csv("https://raw.githubusercontent.com/Ahmed-Hossam-Aldeen/DSP-SignalViewer/main/sin2.csv", function(err, rows){
                    
            function unpack(rows, key) {
            return rows.map(function(row) { return row[key]; });
            }
            
            var frames = []
            var x = unpack(rows, 'x')
            var y = unpack(rows, 'y')
            
            var n = 1000;
            for (var i = 0; i < n; i++) { 
                frames[i] = {data: [{x: [], y: []}]}
                frames[i].data[0].x = x.slice(0, i+1);
                frames[i].data[0].y = y.slice(0, i+1);
            }
            
            Plotly.newPlot('myDiv2', [{
                x: frames[1].data[0].x,
                y: frames[1].data[0].y,
                fill: 'false',
                type: 'scatter',
                mode: 'lines',
                line: {color: 'red'}
            }], {
                
                xaxis: {
                
                range: [
                        frames[999].data[0].x[0], 
                    frames[999].data[0].x[999]
                ],
                showgrid: true,
                showline: true,
                showticklabels: true,
                zeroline: true
                },
                yaxis: {
                range: [
                    -10, 
                    10      ],
                showgrid: true,
                showline: true,
                showticklabels: true,
                zeroline: true
                },
                annotations: [{
                showarrow: false,
                text: "",
                font: {
                    family: 'Gravitas One',
                    size: 48,
                    color: 'rgb(236, 231, 231)'
                },
                xref: 'paper',
                yref: 'paper',
                x: 0.5,
                y: 0.5
                }, {
                showarrow: false,
                text: "",
                font: {
                    family: 'Gravitas One',
                    size: 16,
                    color: 'rgb(236, 231, 231)'
                },
                xref: 'paper',
                yref: 'paper',
                x: 0.5,
                y: 0.35
                }]
            }).then(function() {
                Plotly.animate('myDiv2', frames, {
                transition: {
                    duration: 0
                },
                frame: {
                    duration:document.getElementById("myRange").value,
                    redraw: false
                }
            });
            });
            
            }) 
    }

