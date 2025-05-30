

import { Member } from './member.js';


function PremiumMember(name) {
  Member.call(this, name); 
  this.specialCollectionAccess = true;
}


PremiumMember.prototype = Object.create(Member.prototype);
PremiumMember.prototype.constructor = PremiumMember;


PremiumMember.prototype.borrowBook = function (book) {
  if (this.borrowedBooks.length >= 5) {
    console.log(`${this.name} has already borrowed 5 books.`);
    return;
  }

  if (!book.isAvailable) {
    console.log(`Sorry, ${book.title} is already borrowed.`);
    return;
  }


  if (book.isSpecialCollection && !this.specialCollectionAccess) {
    console.log(`${this.name} does not have access to special collections.`);
    return;
  }


  Member.prototype.borrowBook.call(this, book);
};

export { PremiumMember };
