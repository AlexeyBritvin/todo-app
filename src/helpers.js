export function getRandom (min=0, max=10000) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

export function checkIfExpired(todos) {
  const now = new Date().valueOf();

  todos.forEach(todo => {
    const todoDate = new Date(todo.date).valueOf();
    if (now > todoDate) {
      todo.expired = true;
    } else {
      todo.expired = false;
    }
  })
}
