import https from "https";
https
  .get(
    "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15",
    (response) => {
      let data = "";
      response.on("data", (chunk) => {
        data += chunk;
      });
      response.on("end", () => {
        const body = JSON.parse(data);
        console.log(body);
      });
    }
  )
  .on("error", (error) => {
    console.log(error);
  });
