let result = null;

function closeButton() {
  document.body.style.overflow = "";
  let element = document.querySelector(".overlay");
  element.classList.add("fadeoutAnimation");
  setTimeout(250);
  element.remove();
}

function causeDetails(id) {
  // details on hover of card maybe
}

function createCard(result, container) {
  const card = document.createElement("div");
  card.classList.add("causeCards");

  card.innerHTML = `
          <div class="card-img">
            <img src="${result.coverImageUrl || 'https://sites.duke.edu/dek23/wp-content/themes/koji/assets/images/default-fallback-image.png'}" alt="">
          </div>
          <div class="card-meta">
            <h2>${result.name}</h2>
            <p>${result.description}</p>
            <button class="btn" onclick="location.href='${result.websiteUrl}'">Visit Website</button>
          </div>
  `;

  container.appendChild(card);
}

async function Overlay(search) {
  document.body.style.overflow = "hidden";
  const container = document.createElement("section");
  container.classList.add("overlay")

  const containerInner = document.createElement("div");
  containerInner.classList.add("overlayInner");

  container.innerHTML = `
    <div>
        <div class="overlayHeading">
            <h3>Category</h3>
            <h1>${search.charAt(0).toUpperCase() + search.slice(1)}</h1>
        </div>
        <div class="close-button" onclick="closeButton()"> </div>
    </div>
  `;

  container.appendChild(containerInner);

  document.querySelector("main").appendChild(container);
  // for (let i = 0; i < 6; i++) {
  //   container.innerHTML += `
  //     <div class="causeCards-temp">
  //       <div class="card-img temp-img" style="height: 200px;"></div>
  //       <div class="card-meta">
  //         <div class="title-temp"></div>
  //         <div class="desc-temp"></div>
  //         <div class="skeleton-btn"></div>
  //       </div>
  //     </div>
  //   `;
  // }

  result = await fetch("https://partners.every.org/v0.2/browse/" + search + "?apiKey=pk_live_d02d3174b8dc078eae2c8f23e365ddcb");
  const data = await result.json();

  if (!data) {
    console.error("api returned null");
    Overlay(search);
  }
  console.log(result);


  for (let i of data.nonprofits) {
    console.log(i.coverImageUrl);
    console.log(i.name);
    console.log(i.description);

    createCard(i, containerInner);
  }

}

//--------------------------------------------------------------------------------//
function addCategories() {
  const categories = ["api-led", "adoption", "afghanistan", "animals", "art", "athletics", "autism", "black-led", "buddhism", "cancer", "cats", "christianity", "climate", "conservation", "coronavirus", "culture", "dance", "disabilities", "disease", "dogs", "education", "environment", "filmandtv", "food-security", "freepress", "gender-equality", "health", "hinduism", "housing", "humans", "hurricane-ian", "immigrants", "indigenous-led", "indigenous-peoples", "islam", "judaism", "justice", "latine-led", "legal", "lgbt", "libraries", "mental-health", "museums", "music", "oceans", "parks", "poverty", "racial-justice", "radio", "refugees", "religion", "research", "science", "seniors", "space", "theater", "transgender", "ukraine", "veterans", "votingrights", "water", "wildfires", "wildlife", "women-led", "womens-health", "youth"];

  const container = document.querySelector(".causes-grid-all");
  for (let i of categories) {
    let button = document.createElement("button");
    button.classList.add("category", i);
    button.textContent = i;
    button.addEventListener("click", () => Overlay(i));
    container.appendChild(button);
  }
}

addCategories();