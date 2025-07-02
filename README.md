# puc-widget

# How to Build

## Install dependencies
npm install

## Build 
npm run build

## How to Test Locally
Use serve to preview locally:

npm install -g serve
serve .

Then open:
http://localhost:3000/testWidget.html

## How to Embed
Embed the widget in any HTML page like this:

<div id="puc-widget"></div>
<script
  src="https://domain.com/dist/embedScript.js"
  data-container-id="puc-widget"
  data-title="Trends"
  data-link="https://trends.com"
  data-height="220px"
></script>
