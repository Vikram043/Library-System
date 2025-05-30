import { Book } from './book.js';
import { Member } from './member.js';
import { PremiumMember } from './premiumMember.js';


const book1 = new Book('Sapiens', 'Yuval Noah Harari');
const book2 = new Book('Deep Work', 'Cal Newport');
const book3 = new Book('1984', 'George Orwell');
const book4 = new Book('The Secret', 'Rhonda Byrne');
const book5 = new Book('The Da Vinci Code', 'Dan Brown');
const specialBook = new Book('Quantum Mechanics', 'Feynman', true, true);


const alice = new Member('Alice');
const bob = new PremiumMember('Bob');


const aliceBorrow = alice.borrowBook.bind(alice);
const bobBorrow = bob.borrowBook.bind(bob);

aliceBorrow(book1); 
aliceBorrow(book2); 
aliceBorrow(book3); 
aliceBorrow(book4); 

console.log('\n---\n');

bobBorrow(book4);
bobBorrow(book5);  
bobBorrow(book1);   
bobBorrow(specialBook); 
