import uuid from "react-uuid";

export async function GET(request: Request) {
  const response = await fetch("http://localhost:5000/todoItems");
  const todoItems = await response.json();

  if (!todoItems) {
    return new Response("Information is not found", {
      status: 404,
    });
  }

  return Response.json({
    todoItems,
  });
}

export async function POST(request: Request) {
  const { title } = await request.json();
  const id = uuid();

  const response = await fetch("http://localhost:5000/todoItems", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ id, title, isDone: false }),
  });

  const todo = await response.json();

  return Response.json({
    todo,
  });
}

export async function PATCH(request: Request) {
  const { id, title, isDone } = await request.json();

  const response = await fetch(`http://localhost:5000/todoItems/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ id, title, isDone }),
  });

  const todo = await response.json();

  return Response.json({
    todo,
  });
}

export async function DELETE(request: Request) {
  const { id } = await request.json();

  const response = await fetch(`http://localhost:5000/todoItems/${id}`, {
    method: "DELETE",
  });

  const todo = await response.json();

  return Response.json({
    todo,
  });
}
