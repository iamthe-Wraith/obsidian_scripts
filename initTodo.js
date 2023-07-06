const initTodo = async function(tp) {
  const prefix = 'TODO_';
  let index = 1;

  while(await tp.file.exists(`${tp.file.folder(true)}/${prefix}${index}.md`)) {
    index += 1;
  }

  await tp.file.rename(`${prefix}${index}`);
  return '';
}

module.exports = initTodo;
