let books = ["The Republic", "The Art of War", "Meditations"];

export async function GET() {
  return Response.json({ books }, { status: 200 });
}

export async function POST(request) {
  const { book } = await request.json(); // Read new book from request
  books.push(book); // Add to the list
  return Response.json({ message: `${book} added!`, books }, { status: 201 });
}

export async function PUT(request) {
  const { index, newBook } = await request.json(); // Read index and new book
  if (index >= 0 && index < books.length) {
    books[index] = newBook; // Update book at index
    return Response.json({ message: `Book updated to ${newBook}!`, books });
  }
  return Response.json({ error: "Invalid index" }, { status: 400 });
}

export async function DELETE(request) {
  const { index } = await request.json(); // Read index
  if (index >= 0 && index < books.length) {
    const removedBook = books.splice(index, 1); // Remove book
    return Response.json({ message: `${removedBook} deleted!`, books });
  }
  return Response.json({ error: "Invalid index" }, { status: 400 });
}


