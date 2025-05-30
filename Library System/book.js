function Book(title, author, isAvailable = true, isSpecialCollection = false) {
  this.title = title;
  this.author = author;
  this.isAvailable = isAvailable;
  this.isSpecialCollection = isSpecialCollection;
}

export { Book };