book = 
  title: "Distributed Programming with Ruby"
  author: "Mark Bates"
  chapter_1:
    name: "Distributed Ruby (DRb)"
    pageCount: 33
  chapter_2:
    name: "Rinda"
    pageCount: 40
    
{author, chapter_1: {name, pageCount}} = book

console.log "Author: #{author}"
console.log "Chapter 1: #{name}"
console.log "Page Count: #{pageCount}"