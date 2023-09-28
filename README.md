# belly-button-challenge
Data Bootcamp Module 14 Challenge

<img width="400" height="400" src="https://img.wattpad.com/cover/327140707-200-k821010.jpg" alt="">

## Deployment
* Here is the link to the Dashboard:    https://EvaB5050.github.io/belly-button-challenge/

## Background
This assignment was to build an interactive dashboard to explore the Belly Button Biodiversity dataset which catalogues the microbes that colonise human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Instructions

1. Use the D3 library to read in `samples.json` from the URL `https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json`.  

<br>

2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

  *  Use `sample_values` as the values for the bar chart.

  *  Use `otu_ids` as the labels for the bar chart.

  *  Use `otu_labels` as the hovertext for the chart.  

<br>


3. Create a bubble chart that displays each sample.

  * Use `otu_ids` for the x values.

  * Use `sample_values` for the y values.

  * Use `sample_values` for the marker size.

  * Use `otu_ids` for the marker colors.

  * Use `otu_labels` for the text values.  
  
<br>


4. Display the sample metadata, i.e., an individual's demographic information.  

<br>


5. Display each key-value pair from the metadata JSON object somewhere on the page.  

<br>



6. Update all the plots when a new sample is selected and create a layout for the dashboard.  

<br>


7. Adapt a Gauge Chart to plot the weekly washing frequency of the individual.

  * Update the chart whenever a new sample is selected.  

<br>


8. Deploy to GitHub Pages.  

<br>

## References
Hulcr, J. et al. (2012) A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable. Retrieved from:
 http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/