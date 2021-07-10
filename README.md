# HISP TEASER 2021 

HISP TANZANIA Interview Question on Saturday July 10
## Data Json Data

```json



{ 
"headers": [ 
{ 
"id": "dx", 
"name": "Data" 
}, 
{ 
"id": "ou", 
"name": "Place" 
}, 
{ 
"id": "value", 
"name": "Value" 
} 
], 
"metaData": { 
"names": { 
"hTUspcBc4Yn": "HIV Prevalence", 
"EzE8xZ31zfC": "Malaria Prevalence", 
"E31SemmmFGb": "TB Prevalence", 
"dx": "Data", 
"ou": "Place", 
"R7TPl8q81Ft": "Insect District", 
"xGojHNSrFAj": "Bird District" 
}, 
"dimensions": { 
"dx": ["EzE8xZ31zfC", "hTUspcBc4Yn", "E31SemmmFGb"], "ou": ["xGojHNSrFAj", "R7TPl8q81Ft"] 
} 
}, 
"rows": [ 
["EzE8xZ31zfC", "R7TPl8q81Ft", "47.0"], 
["hTUspcBc4Yn", "R7TPl8q81Ft", "50.6"], 
["EzE8xZ31zfC", "xGojHNSrFAj", "40.0"], 
["E31SemmmFGb", "xGojHNSrFAj", "74.8"], 
["hTUspcBc4Yn", "xGojHNSrFAj", "77.0"], 
["E31SemmmFGb", "R7TPl8q81Ft", "47.0"] 
] 
}




```

Tips: 
- Headers: Describes what is arranged in the rows eg in first row ["EzE8xZ31zfC", "R7TPl8q81Ft", "47.0"] points to [dx,ou,value] - metaData: Presents two details; 
- Names: Contains readable names to all identifiers in the object, 
- Dimensions: Describes the grouping of related items. But can be useful when you want to arrange items in rows or columns in the table. 
- Rows: Contains the actual data we need to present in our table cells. Think of a table cell as a combination of dx and ou where value is the last item in the row array. Eg in first row ["EzE8xZ31zfC", "R7TPl8q81Ft", "47.0"], dx:EzE8xZ31zfC, 
ou:R7TPl8q81Ft yield to 47.0.


## Tools 
```bash

npm 
reactjs

```
## How to start ? 
```js
git clone {repo-url}

cd {cloned project}

npm install 
```

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

