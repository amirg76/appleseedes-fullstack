const newReleases = [
  {
    id: 70111470,
    title: "Die Hard",
    boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 654356453,
    title: "Bad Boys",
    boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
  {
    id: 65432445,
    title: "The Chamber",
    boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 675465,
    title: "Fracture",
    boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
];

//  ---------------------------------------

// 1.
function releases(array) {
  const newArr = [];
  array.forEach(function (e) {
    let obj = {};
    obj.id = e.id;
    obj.title = e.title;
    newArr.push(obj);
  });
  return newArr;
}

const releasesIdMovie = releases(newReleases);
console.log(releasesIdMovie);

// 2.
function releases1(array) {
  const newArr = array.map(function (e) {
    let obj = {};
    obj.id = e.id;
    obj.title = e.title;
    return obj;
  });
  return newArr;
}

const releasesIdMovie1 = releases1(newReleases);
console.log(releasesIdMovie1);
