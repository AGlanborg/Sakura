# Sakura

Sakura is a fully offline, local, web-based database application intedend to be used for **Software Asset Management (SAM)** specialists' during daily work.

The goal with this product is to give an alternative tool to spreadsheet applictions that many in the industry currently use for SAM.

## Launching

### First time setup

First **Download** the project, then install the excluded content with **Node.js** using the following command in the root directory of the downloaded content with any console

```bash
 npm install
```
### Run the program

In the root directory run the following command and then open the **localhost** port displayed in the console in any browser

```bash
 npm run dev
```

*Or* run the following command to open the localhost port in your primary browser

```bash
 npm run dev -- --open
```

## Know issues

The Download button, that is supposed to download the selected rows in a csv file, does not work

The Graph tab is empty

Half the text is in English and the other half is in Swedish

## Future plans

Make the Download button download selected rows in a csv-file format

Graph will include
 - Yearly summeries
 - Forecasts

More colour options

Complete Swedish and English versions

A executable file for Windows users to click on to launch the program immediately
