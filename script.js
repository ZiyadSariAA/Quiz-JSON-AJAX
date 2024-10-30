const makeList  = document.getElementById("makeList");
let selectedMake = makeList .value;

makeList .addEventListener("change", () => {
    selectedMake = makeList .value;
    fetchModels(selectedMake);
});
function fetchModels() {
    // API example reference: https://vpic.nhtsa.dot.gov/api/Home/Index/LanguageExamples
    // Fetching model list for the chosen make
    fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/${selectedMake}?format=json`)
        .then(response => response.json())
        .then(data => {
            renderModelList(data.Results);
        })
        .catch(err => {
            console.error("Model fetch error:", err);
        });
}

function renderModelList(models) {
    const modelListContainer = document.getElementById("modelList");
    modelListContainer.innerHTML = "";
    for (const carModel of models) {
        const item = document.createElement("li");
        item.innerText = carModel.Model_Name;
        modelListContainer.appendChild(item);
        console.log(carModel.Model_Name);
    }
}

