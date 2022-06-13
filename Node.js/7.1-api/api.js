import got from "got";
import axios from "axios";
import https from "https";

const url = "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15";
// const request = https
//   .request(url, (response) => {
//     let data = "";
//     response.on("data", (chunk) => {
//       data += chunk.toString();
//     });
//     response.on("end", () => {
//       const body = JSON.parse(data);
//       console.log(body);
//     });
//   })
//   .on("error", (error) => {
//     console.log(error);
//   });

// request.end();

// axios
//   .get(url)
//   .then((result) => {
//     console.log(result.data);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

got
  .get(url, {
    responseType: "json",
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error.message);
  });
