var library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    libraryID: 1254,
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    libraryID: 4264,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];

var sortable = [];
for (var id in library) {
  sortable.push(library[id]["libraryID"]);
}

sortable.sort((a, b) => b - a);

for (const j in library) {
  for (var k in library) {
    if (sortable[j] == library[k].libraryID) {
      console.log(library[k]);
    }
  }
}
