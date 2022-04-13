var library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

function bookCanRead(libary) {
  const bookTrue = libary.filter((book) => {
    return book.readingStatus;
  });
  bookTrue.forEach((e) => {
    console.log(e.author, e.title, e.readingStatus);
  });
}
bookCanRead(library);
