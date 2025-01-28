// Main Var
let theInput = document.querySelector(".get-repos input");
let getButton = document.querySelector(".get-button");
let reposData = document.querySelector(".show-data");

getButton.onclick = function(){
    getRepos();
};

// Get Repos Function

function getRepos() {
    
    if(theInput.value == ""){   // If Value is Empty

        reposData.innerHTML = "<span> Please Write Github Username.</span>";

    }  else {

        fetch(`https://api.github.com/users/${theInput.value}/repos`)

        .then((res)=>res.json())
        
        .then((repos)=>{
            // Empty The Container
            reposData.innerHTML = "";
            
            // Loop On Repos
            repos.forEach(repo => {

                //Create Main div
                let mainDiv = document.createElement('div');

                // Create Repo Text Node
                let repoName = document.createTextNode(repo.name);

                //Append The Text To main Div

                mainDiv.appendChild(repoName);

                //Create Repo URL Anchor
                let theURL = document.createElement('a');

                // Create Repo URL Text
                let theUrlText = document.createTextNode("Visit");

                // Append the Text to Url
                theURL.appendChild(theUrlText);

                // Add the href 
                theURL.href = `https://github.com/${theInput.value}/${repo.name}`;

                // Set Attr Blank
                theURL.setAttribute('target','_blank');

                //Append Url a to MainDiv
                mainDiv.appendChild(theURL);

                // Create Stars Count span
                let starsSpan = document.createElement('span');
                
                // Create The stars count Text
                let starsText = document.createTextNode(`Stars ${repo.stargazers_count}`);

                // Add stars Count to Stars span
                starsSpan.appendChild(starsText);

                // Append stars span to main div
                mainDiv.appendChild(starsSpan);

                // Add class on main div
                mainDiv.className ='repo-box';

                // Append the MainDiv To Container
                reposData.appendChild(mainDiv);
                
                


            });
            
        });

    };
};