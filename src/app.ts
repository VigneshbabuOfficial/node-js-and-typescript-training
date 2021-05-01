const geocode = require("./utils/globalDetails");
const geocodeSingle = require("./utils/globalSingleDetails");
const url = "https://jsonplaceholder.typicode.com/posts";

if (!url) {
  console.log("Please provide an address");
} else {
  console.log("calling from geocode api");
  geocode(url, (error: any, data: any) => {
    console.log("calling from geocode api");
    let id = data[0]["id"];
    console.log("final Id", id);
    geocodeSingle(`${url}/${id}`, (error: any, data: any) => {
      console.log("geocodeSingle", data);
    });
  });
}
