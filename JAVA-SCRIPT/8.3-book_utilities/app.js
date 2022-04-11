// .1
const book1 = {
  name: "my book 1",
  author: "bob",
  year: 1996,
};
const book2 = {
  name: "my book 2",
  author: "mini",
  year: 2000,
};
// .2
const bookUtils = {};
// .3
bookUtils.getFirstPublished = function (book1, book2) {
  return book1.year < book2.year ? book1.year : book2.year;
};

console.log(bookUtils.getFirstPublished(book1, book2));
console.log(bookUtils);
// .4
bookUtils.setNewEdition = function (book, editionYear) {
  book.latestEdition = editionYear;
};
bookUtils.setNewEdition(book1, 1990);
bookUtils.setNewEdition(book2, 1988);
console.log(bookUtils);
console.log(book1);
console.log(book2);
// 5.
bookUtils.setLanguage = function (book, language) {
  book.language = language;
};
bookUtils.setLanguage(book1, "english");
bookUtils.setLanguage(book2, "hebrew");
console.log(bookUtils);
console.log(book1);
console.log(book2);
// 6.
bookUtils.setTranslation = function (book, language, translator) {
  book.translation = { translator, language };
};
bookUtils.setTranslation(book1, "english", "hindi");
bookUtils.setTranslation(book2, "hebrew", "francis");
console.log(bookUtils);
console.log(book1);
console.log(book2);
// 7.
bookUtils.setPublisher = function (book, name, location) {
  book.publisher = { name, location };
};
bookUtils.setPublisher(book1, "yosi", "bat-yam");
bookUtils.setPublisher(book2, "eli", "haifa");
console.log(bookUtils);
console.log(book1);
console.log(book2);
// 8.
bookUtils.isSamePublisher = function (book1, book2) {
  return book1.publisher.name === book2.publisher.name &&
    book1.publisher.location === book2.publisher.location
    ? true
    : false;
};
console.log(bookUtils.isSamePublisher(book1, book2));

console.log(bookUtils);
