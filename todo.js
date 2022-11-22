const todoList = () => {
  let all = [];
  const add_Total = (todoItem) => {
    all.push(todoItem);
  };
  const CompletedWork = (index) => {
    all[index].completed = true;
  };

  const overdues = () => {
    return all.filter(
      (item) => item.dueDate < new Date().toLocaleDateString("en-CA")
    );
  };

  const dueToday = () => {
    return all.filter(
      (item) => item.dueDate === new Date().toLocaleDateString("en-CA")
    );
  };

  const dueLater = () => {
    return all.filter(
      (item) => item.dueDate > new Date().toLocaleDateString("en-CA")
    );
  };
  return { all, add_Total, CompletedWork, overdues, dueToday, dueLater };
};

module.exports = todoList;
