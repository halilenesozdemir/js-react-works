const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: ["fantasy", "high-fantasy", "adventure", "fiction", "novels", "literature"],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: ["science fiction", "humor", "speculative fiction", "short stories", "fantasy"],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getAllBooks() {
  return data;
}

// const allBooks = getAllBooks();
// console.log(allBooks);

// function getBookById(id) {
//   return data.find((book) => book.id === id);
// }

// const value = getBookById(3);
// console.log(value);

// 3

// function getTotalPages() {
//   return data.reduce((sum, book) => sum + book.pages, 0);
// }

// const allPages = getTotalPages();
// console.log(allPages);

// 4

// function getBooksByAuthor(author) {
//   return data.filter((book) => book.author.toLowerCase().includes(author.toLowerCase()));
// }

// const JRR = getBooksByAuthor("J. R. R. Tolkien");
// console.log(JRR);

//5

// function getAverageGoodreadsRating() {
//   const { totalRating, count } = data.reduce(
//     (acc, book) => {
//       acc.totalRating += book?.reviews?.goodreads?.rating;
//       acc.count += 1;
//       return acc;
//     },
//     { totalRating: 0, count: 0 }
//   );
//   const avgReads = totalRating / count;
//   return avgReads.toFixed(2);
// }

// const x = getAverageGoodreadsRating();
// console.log(x);

// 6

// function getBooksByGenre(genre) {
//   return data.filter((book) => book.genres.includes(genre));
// }

// const fantasyBooks = getBooksByGenre("fantasy");
// console.log(fantasyBooks);

// function getBookTitlesAndAuthors() {
//   return data.map((book) => ({
//     title: book.title,
//     author: book.author,
//   }));
// }

// const x = getBookTitlesAndAuthors();
// console.log(x);

// SORT

// function sortBooksByPages() {
//   const sortedData = data.slice().sort((a, b) => a.pages - b.pages);
//   return sortedData;
// }

// const x = sortBooksByPages();
// console.log(x);

// TERNARY

// function checkMovieAdaptations() {
//   return data.map((book) => (book.hasMovieAdaptation ? "ADAPTED" : "NOT ADAPTED"));
// }

// const x = checkMovieAdaptations();
// console.log(x);

// IMMUTABLE

function addBook(newBook) {
  const books = [...data, newBook];
  return books;
}

const currentBooks = addBook({
  title: "Halaoglu",
  author: "Halil",
  pages: 20,
  id: 10,
});

// console.log(currentBooks);

// function updatedBook(id, updatedInfo) {
//   return currentBooks.map((book) => (book.id === id ? { ...book, ...updatedInfo } : book));
// }

// const updatedData = updatedBook(10, {
//   title: "Halaoglusss",
//   author: "Halilsss",
//   pages: 200,
// });
// console.log(updatedData);

function delayedHello() {
  return new Promise((resolve) => {
    setTimeout(resolve("Hello World"), 2000);
  });
}

delayedHello().then((message) => console.log(message));
