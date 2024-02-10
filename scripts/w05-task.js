const templesElement = document.getElementById("temples");
let templeList = [];

const displayTemples = (temples) => {
    temples.forEach(temple => {
        const article = document.createElement("article");
        
        const h3 = document.createElement("h3");
        h3.textContent = temple.templeName;
        
        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.location;
        
        article.appendChild(h3);
        article.appendChild(img);
        
        templesElement.appendChild(article);
    });
};

const getTemples = async () => {
    try {
        const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
        templeList = await response.json();
        displayTemples(templeList);
    } catch (error) {
        console.error("Error fetching temples:", error);
    }
};

const reset = () => {
    templesElement.innerHTML = "";
};

const filterTemples = (temples) => {
    reset();
    
    const filter = document.getElementById("filtered").value;
    
    switch (filter) {
        case "utah":
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;
        case "nonutah":
            displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter(temple => new Date(temple.dedicatedDate) < new Date(1950, 0, 1)));
            break;
        case "all":
        default:
            displayTemples(temples);
            break;
    }
};

document.getElementById("filtered").addEventListener("change", () => filterTemples(templeList));

getTemples();
