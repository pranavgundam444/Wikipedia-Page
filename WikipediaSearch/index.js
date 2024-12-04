let searchInputEl = document.getElementById("input");
let searchResultsEl = document.getElementById("searchResults");


function displayResults(searchResults){
    let {title, link, description} = searchResults;
    console.log(description);

    let anchorContainerEl = document.createElement("div");
    anchorContainerEl.classList.add("anchorContainer");
    searchResultsEl.appendChild(anchorContainerEl);

    let anchorTitleEl = document.createElement("a");
    anchorTitleEl.textContent = title;
    anchorTitleEl.href = link;
    anchorTitleEl.target = "_blank";
    anchorContainerEl.appendChild(anchorTitleEl);

    let titleBreakEl = document.createElement("br");
    anchorContainerEl.appendChild(titleBreakEl);

    let titleUrlEl = document.createElement("a");
    titleUrlEl.classList.add("link-description")
    titleUrlEl.href = link;
    titleUrlEl.target = "_blank";
    titleUrlEl.textContent = link;
    anchorContainerEl.appendChild(titleUrlEl);

    let urlBreakEl = document.createElement("br");
    anchorContainerEl.appendChild(urlBreakEl);


    let descriptionEl = document.createElement("p");
    descriptionEl.classList.add("link-description");
    descriptionEl.textContent = description;
    titleUrlEl.appendChild(descriptionEl);
}

function wikipediaSearchResults(event){
    if (event.key === "Enter"){
        let searchInput = searchInputEl.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
        let options = {
            method: "GET"
        };
        fetch(url, options)
            .then(function(response){
                return response.json()
            })
            .then(function(jsonData){
                let {search_results} = jsonData;
                for (eachSearch of search_results) {
                    displayResults(eachSearch)
                }
                
            })
    }
}

searchInputEl.addEventListener("keydown", wikipediaSearchResults);