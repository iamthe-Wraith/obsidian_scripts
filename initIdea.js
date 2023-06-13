const initIdea = async function(tp) {
  const prefix = 'IDEA_';
  let index = 1;

  while(await tp.file.exists(`${tp.file.folder(true)}/${prefix}${index}.md`)) {
    index += 1;
  }

  await tp.file.rename(`${prefix}${index} - ${tp.file.name}`);
  return '';
}

module.exports = initIdea;
