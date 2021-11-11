const collapsedSymbol = "&rarr;";
const explicitCollapsedSymbol = "→";
const expandedSymbol = "&darr;";
const explicitExpandedSymbol = "↓";

function flipMasterInformation(){
    let dot = document.getElementById("master-dot");
    let content = document.getElementById("edu-entry-master");
    _flipDot(dot);
    _toggleContentVisibility(content);
}

function flipBachelorInformation(){
    let dot = document.getElementById("bachelor-dot");
    let content = document.getElementById("edu-entry-bachelor");
    _flipDot(dot);
    _toggleContentVisibility(content);
}

function flipAbiturInformation(){
    let dot = document.getElementById("abitur-dot");
    let content = document.getElementById("edu-entry-abitur");
    _flipDot(dot);
    _toggleContentVisibility(content);
}

function _flipDot(dot){
    if(dot.innerHTML === collapsedSymbol || dot.innerHTML === explicitCollapsedSymbol){
        dot.innerHTML = expandedSymbol;
    }else if(dot.innerHTML === expandedSymbol || dot.innerHTML === explicitExpandedSymbol){
        dot.innerHTML = collapsedSymbol;
    }
}

function _toggleContentVisibility(contentDiv){
    if(contentDiv.style.display === "none"){
        contentDiv.style.display = "inline";
    }else if(contentDiv.style.display === "inline"){
        contentDiv.style.display = "none";
    }
}