// Assign a constant variable to the url
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
let data1

// Read the data using D3
d3.json(url).then(data => {
    data1 = data;
     // Populate dropdown menu with sample names
     data.names.forEach(name => {
         d3.select("#selDataset").append("option").text(name);
     });
     // Initialise the dashboard
     let firstSample = data.names[0];
     buildBarChart(firstSample);
     buildBubbleChart(firstSample);
     displayMetadata(firstSample);
     // Show a default data point initially when loading the dashboard
     optionChanged(firstSample);
 });
    
    // Display Metadata
    function displayMetadata(sample) {
        let metadata = data1.metadata.filter(meta => meta.id == sample)[0];
        let panel = d3.select("#sample-metadata");
        panel.html(""); // Clear existing metadata

        Object.entries(metadata).forEach(([key, value]) => {
            panel.append("h6").text(`${key}: ${value}`);
        });
    }

    // Update function when a new sample is selected
    function optionChanged(newSample) {
        buildBarChart(newSample);
        buildBubbleChart(newSample);
        buildGaugeChart(newSample);
        displayMetadata(newSample);

        console.log(newSample);
    }

 
    // Bar Chart
    function buildBarChart(sample) {
        let sampleData = data1.samples.filter(s => s.id === sample)[0];
        let yValues = sampleData.otu_ids.slice(0, 10).map(otu => `OTU ${otu}`).reverse();
        let xValues = sampleData.sample_values.slice(0, 10).reverse();
        let hoverText = sampleData.otu_labels.slice(0, 10).reverse();

        let trace = {
            y: yValues,
            x: xValues,
            text: hoverText,
            type: "bar",
            orientation: "h"
        };

        let layout = {
            title: "Top 10 OTUs"
        };

        Plotly.newPlot("bar", [trace], layout);
    }

    // Bubble Chart
    function buildBubbleChart(sample) {
        let sampleData = data1.samples.filter(s => s.id === sample)[0];

        let trace = {
            x: sampleData.otu_ids,
            y: sampleData.sample_values,
            text: sampleData.otu_labels,
            mode: "markers",
            marker: {
                size: sampleData.sample_values,
                color: sampleData.otu_ids,
                colorscale: "Earth"
            }
        };

        let layout = {
            title: "Bubble Chart for Each Sample",
            xaxis: { title: "OTU ID" }
        };

        Plotly.newPlot("bubble", [trace], layout);
    }

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
    console.log(data);
  });
  // Initialize the dashboard at start up
  function init() {
      // Use D3 to select the dropdown menu
      let dropdownMenu = d3.select("#selDataset");
      // Use D3 to get sample names and populate the drop-down selector
      d3.json(url).then((data) => {
          // Set a variable for the sample names
          let names = data.names;
          // Add  samples to dropdown menu
          names.forEach((id) => {
              // Log the value of id for each iteration of the loop
              console.log(id);
              dropdownMenu.append("option")
              .text(id)
              .property("value",id);
            
          });

          // Set the first sample from the list
          let sample_one = names[0];
          // Log the value of sample_one
          console.log(sample_one);
          // Build the initial plots
          buildGaugeChart(sample_one);
          dropdownMenu.on("change", function(){

          })
      });
  };
  // Function that builds the gauge chart
  function buildGaugeChart(sample) {
      // Use D3 to retrieve all of the data
      d3.json(url).then((data) => {
          // Retrieve all metadata
          let metadata = data1.metadata;
          // Filter based on the value of the sample
          let value = metadata.filter(result => result.id == sample);
          // Log the array of metadata objects after they have been filtered
          console.log(value)
          // Get the first index from the array
          let valueData = value[0];
          // Use Object.entries to get the key/value pairs and place in the demographics box
          let washFrequency = Object.values(valueData)[6];
          // Set up the trace for the gauge chart
          let trace2 = {
              value: washFrequency,
              domain: {x: [0,1], y: [0,1]},
              title: {
                  text: "<b>Belly Button Washing Frequency</b><br>Scrubs per Week",
                  font: {color: "black", size: 16}
              },
              type: "indicator",
              mode: "gauge+number",
              gauge: {
                  axis: {range: [0,10], tickmode: "linear", tick0: 2, dtick: 2},
                  bar: {color: "black"},
                  steps: [
                      {range: [0, 1], color: "rgba(255, 255, 255, 0)"},
                      {range: [1, 2], color: "rgba(232, 226, 202, .5)"},
                      {range: [2, 3], color: "rgba(210, 206, 145, .5)"},
                      {range: [3, 4], color:  "rgba(202, 209, 95, .5)"},
                      {range: [4, 5], color:  "rgba(184, 205, 68, .5)"},
                      {range: [5, 6], color: "rgba(170, 202, 42, .5)"},
                      {range: [6, 7], color: "rgba(142, 178, 35 , .5)"},
                      {range: [7, 8], color:  "rgba(110, 154, 22, .5)"},
                      {range: [8, 9], color: "rgba(50, 143, 10, 0.5)"},
                      {range: [9, 10], color: "rgba(14, 127, 0, .5)"},
                  ]
              }
          };
          // Set up the Layout
          let layout = {
              width: 400,
              height: 400,
              margin: {t: 0, b:0}
          };
          // Call Plotly to plot the gauge chart
          Plotly.newPlot("gauge", [trace2], layout)
      });
  };
  // Call the initialise function
  init();
    



    
 

        