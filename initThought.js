const initThought = async function(tp) {
  let name = tp.date.now('YYYY-MM-DD');
  let index = 2;

  if (await tp.file.exists(`${tp.file.folder(true)}/${name}.md`)) {
    while(await tp.file.exists(`${tp.file.folder(true)}/${name} (${index}).md`)) {
      index += 1;
    }

    name = `${name} (${index})`;
  }

  await tp.file.rename(name);
  return '';
}

module.exports = initThought;
