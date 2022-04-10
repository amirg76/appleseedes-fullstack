let country_arg;
function countryToLiveIn(language, isIsland, population, country) {
  country_arg = country;
  if (language === "English" && isIsland == -false && population < 50)
    return true;
  else return false;
}

const checkSarah = countryToLiveIn("English", false, 49, "England");
checkSarah
  ? console.log(`You should live in ${country_arg}`)
  : console.log(`${country_arg} does not meet your criteria`);
