{
  type TBook = {
    title: string;
    author: string;
    publicationYear: number;
  };

  //   Basic Use of keyof
  type TBookKeys = keyof TBook;

  function getBookPoperty<T, K extends keyof T>(book: T, key: K) {
    return book[key];
  }

  const book: TBook = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
  };

  const title = getBookPoperty(book, "title");
  console.log(title);
}
