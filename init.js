/**
 * docs: https://silentvoid13.github.io/Templater/introduction.html
 */

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const removeFile = async (tp, app, path) => {
  await app.vault.adapter.fs.rm(path);

  while(await tp.file.exists(path)) {
    await sleep(50);
  }
}

const createNewFile = async (tp, app, template, name, path) => {
  await removeFile(tp, app, await tp.file.path());

  setTimeout(() => {
    tp.file.create_new(
      tp.file.find_tfile(template),
      name,
      true,
      app.vault.getAbstractFileByPath(path)
    );
  }, 1000);
}

const init = async function(tp, app) {
  let [prefix, name] = tp.file.title.split('-');
  prefix = (prefix || '').toLowerCase().trim();
  name = (name || '').trim();

  if (prefix === 'computer') {
    await createNewFile(tp, app, 'in-template', name, 'next-actions/at-computer');
  } else if (prefix === 'errand') {
    await createNewFile(tp, app, 'in-template', name, 'next-actions/errands');
  } else if (prefix === 'house') {
    await createNewFile(tp, app, 'in-template', name, 'next-actions/at-house');
  } else if (prefix === 'phone') {
    await createNewFile(tp, app, 'in-template', name, 'next-actions/phone-calls');
  } else if (prefix === 'project') {
    await createNewFile(tp, app, 'in-template', name, 'next-actions/projects');
  } else if (prefix === 'wait' || prefix === 'waiting') {
    await createNewFile(tp, app, 'in-template', name, 'waiting-for');
  } else if (prefix === 'work') {
    await createNewFile(tp, app, 'in-template', name, 'next-actions/at-work');
  } else {
    await createNewFile(tp, app, 'in-template', tp.file.title, '/');
  }

  return ''
}

module.exports = init;
