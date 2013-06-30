// ==UserScript==
// @name        Instant Championselect
// @namespace   sean
// @include     *championselect.net/champ/*
// @version     1
// ==/UserScript==

// @include     *lolcounter.com/champ/*

function replaceAll(source, replace, replaceWith) {
	var data = source;
	while(data.indexOf(replace) != -1) {
		data = data.replace(replace,replaceWith);
	}
	return data;
}
function removeAllChildNodes(parent) {
	if (parent.hasChildNodes()) {
		while (parent.childNodes.length >= 1) {
			parent.removeChild(parent.firstChild);
		}
	}
}
function initiateChampionselectSearch() {
	document.title = "Championselect - Search";

	// get script and only take the champList.results
	var scripts = document.getElementsByTagName('script');
	var data = "";
	for(var i = 0; i < scripts.length; i++) {
		if (scripts[i].innerHTML.indexOf("champList") != -1) {
			data = (scripts[i].innerHTML.substring(scripts[i].innerHTML.indexOf("[{")+2,scripts[i].innerHTML.indexOf("}]")));
		}
	}


	scripts = null;
	data = replaceAll(data, "\\u0027", "'");
	var champs = data.split("},{");
	data = null;
	var champList = {};
	champList.results = [];
	for(var i = 0; i < champs.length; i++) {
		var name = champs[i].substring(champs[i].indexOf('"name":"')+'"name":"'.length,champs[i].indexOf('","id":"'));
		var id = champs[i].substring(champs[i].indexOf('"id":"')+'"id":"'.length,champs[i].indexOf('","champ_image":"'));
		var image = champs[i].substring(champs[i].indexOf('"champ_image":"')+'"champ_image":"'.length,champs[i].indexOf('","champ_title":"'));
		var title = champs[i].substring(champs[i].indexOf('"champ_title":"')+'"champ_title":"'.length,champs[i].length-1);
		var champ = {"name":name,"id":id,"champ_image":image,"champ_title":title};
		champList.results[i] = champ;
	}
	champList.total = champList.results.length;
	champs = null;

	// get searchstring from adress and search in the list of champions
	var searchstring = window.location.pathname.substring('/champ/'.length);
	var results = [];
	for(var i = 0; i < champList.total; i++) {
		if (champList.results[i].name.toLowerCase().indexOf(searchstring.toLowerCase()) != -1) {
			results[results.length] = champList.results[i];
		}
	}

	// get the main content area
	var content = document.getElementById('content');
	//if(content == null) content = document.getElementById('content-wrap'); // for lolcounter.com

	if (results.length == 0) {
		// remove the 404-Error-Messages
		removeAllChildNodes(content);
		
		var newP = document.createElement("p");
		newP.appendChild(document.createTextNode("no Results found for: "+searchstring));
		var newH2 = document.createElement("h2");
		newH2.appendChild(document.createTextNode("Oh,"));
		
		content.appendChild(newH2);
		content.appendChild(newP);
		
		newP = null;
		newH2 = null;
	} else if (results.length == 1) {
		if(window.location != "http://www.championselect.net/champ/" + results[0].id) {
			// remove the 404-Error-Messages
			removeAllChildNodes(content);
		
			var newP = document.createElement("p");
			newP.appendChild(document.createTextNode("redirecting to:"));
			var newH2 = document.createElement("h2");
			newH2.appendChild(document.createTextNode(results[0].name));
			var newImg = document.createElement("img");
			newImg.src = "http://www.championselect.net/images/CS_Champ_Icons_Resized/"+results[0].champ_image;
			var newTable = document.createElement("table");
			var tr = document.createElement("tr");
			var td1 = document.createElement("td");
			var td2 = document.createElement("td");
			td2.width = 200;
			td2.align = "center";
			newTable.style.backgroundColor = "#EEE";
			
			td1.appendChild(newImg);
			td2.appendChild(newP);
			td2.appendChild(newH2);
			tr.appendChild(td1);
			tr.appendChild(td2);
			newTable.appendChild(tr);
			content.appendChild(newTable);
			
			// instantly go to the site
			window.location = "http://www.championselect.net/champ/"+results[0].id;
		}
	} else {
		// remove the 404-Error-Messages
		removeAllChildNodes(content);

		// show the search results
		var contentDiv = document.createElement("table");
		var j = 1;
		var newRow = document.createElement("tr");
		for (var i = 0; i < results.length; i++) {
			var newDiv = document.createElement("td");
			newDiv.width = 300;
			newDiv.innerHTML = '<div class="col1"><img src="http://www.championselect.net/images/CS_Champ_Icons_Resized/'+results[i].champ_image+'"/></div><div class="col2"><p class="champName">'+results[i].name+'</p><p>'+results[i].champ_title+'</p></div><p>';
			newDiv.style.cursor = 'pointer';
			newDiv.onclick = function(id) {
				return function() {
					window.location = "http://www.championselect.net/champ/"+id;
				}
			}(results[i].id);
			newDiv.onmouseover = function() {
				this.style.backgroundColor = "#EEE";
			};
			newDiv.onmouseout = function() {
				this.style.backgroundColor = '';
			};
			newRow.appendChild(newDiv)
			if (j >= 3) {
				contentDiv.appendChild(newRow);
				newRow = document.createElement("tr");
				j = 0;
			}
			j++;
		}
		j = null;

		contentDiv.appendChild(newRow);
		content.appendChild(contentDiv);
		newRow = null;
		contentDiv = null;
	}
	// EOF:
	content = null;
	results = null;
	searchstring = null;
	champList = null;

}


// MAIN:
if($('#content').find('.error').length) {
	initiateChampionselectSearch();
}