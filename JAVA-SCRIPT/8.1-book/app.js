const book = {
  author: "amir",
  name_of_book: "js css html",
  subject: "computers",
  release: 1996,
};
function bookDescription(book) {
  return `The book ${book.name_of_book} was written by ${book.author} in the year ${book.release}`;
}
console.log(bookDescription(book));
