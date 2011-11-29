(function() {
  var author, book, name, pageCount, _ref;

  book = {
    title: "Distributed Programming with Ruby",
    author: "Mark Bates",
    chapter_1: {
      name: "Distributed Ruby (DRb)",
      pageCount: 33
    },
    chapter_2: {
      name: "Rinda",
      pageCount: 40
    }
  };

  author = book.author, (_ref = book.chapter_1, name = _ref.name, pageCount = _ref.pageCount);

  console.log("Author: " + author);

  console.log("Chapter 1: " + name);

  console.log("Page Count: " + pageCount);

}).call(this);
