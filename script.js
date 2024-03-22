
const api = "https://api.unsplash.com/photos/?client_id=SzzpRhyUcLvG7TCGcyZCQs0nQrQKCxiTPB-8twUCKNc";
const accessKey = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";
const page = 1;
let results = [];
async function getImage(){
    const searchval = document.getElementById('searchInput');
    const research = searchval.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${research}&client_id=${accessKey}`
    const data = await fetch(url);
    const searchData = await data.json(); // Await the response JSON
    results.push(searchData);
    let Output = results.length > 0 ? results[results.length - 1].results : [];
    console.log(Output);
    populateImage(Output);
}

function populateImage(Output){
    const imgCont = document.getElementById('imageContainer');
    imgCont.innerHTML = '';
    Output.forEach(val=>{
        const eachCont = document.createElement('div');
        eachCont.className = "m-2 p-2 w-[250px] h-[300px] relative rounded-xl overflow-hidden shadow-lg hover:cursor-pointer transition ease-in-out delay-250 hover:-translate-y-1 hover:scale-105";

        const img = document.createElement('img');
        img.src = val.urls.regular;
        img.className = "rounded-lg w-full h-full";
        img.alt = `Photo`;

        eachCont.appendChild(img);

        const desc = document.createElement('div');
        desc.className = "absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 w-full z-10 h-20 flex items-center justify-center";
        const p = document.createElement('p');
        p.className = "text-white text-center";
        p.textContent = val.alt_description;
        desc.appendChild(p);

        eachCont.appendChild(desc);

        imgCont.appendChild(eachCont);
    })
}
getImage();