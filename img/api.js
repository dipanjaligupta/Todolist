/*let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    console.log(country);
    getColleges(country);
});
/*let country = "india"
async function getColleges(country){
    try{
        let res = await axios.get(url+country);
        console.log(res);
    }catch(e){
        console.log("error",e);
    }
}*/
 let url = "http://universities.hipolabs.com/search?name=";
        let btn = document.querySelector("button");

        btn.addEventListener("click", async () => {
            let country = document.querySelector("input").value;
           let colArr = await getColleges(country);
           console.log(colArr);
           show(colArr)
        });
function show(colArr){
    let list = document.querySelector("#list");
    list.innerText = "";
    for(col of colArr){
        /*console.log(col.name);*/
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}
        async function getColleges(country){
            try{
                console.log("Calling API with:", url + country);
                let res = await axios.get(url + country);
                return res.data;
            } catch(e){
                console.log("Error:", e);
                return [];
            }
        }