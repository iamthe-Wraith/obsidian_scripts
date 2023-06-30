const init = async function(tp, app) {
  if (tp.file.title === 'idea') {
    tp.file.create_new(
      tp.file.find_tfile('idea-template'),
      'new_idea',
      true,
      app.vault.getAbstractFileByPath('ideas')
    )

    await app.vault.adapter.fs.rm(await tp.file.path());
  }

  if (tp.file.title === 'meeting') {
    tp.file.create_new(
      tp.file.find_tfile('meeting-template'),
      'new_meeting',
      true,
      app.vault.getAbstractFileByPath('meetings')
    )

    await app.vault.adapter.fs.rm(await tp.file.path());
  }

  if (tp.file.title === 'slip') {
    tp.file.create_new(
      tp.file.find_tfile('slip-item'),
      'new_slip',
      true,
      app.vault.getAbstractFileByPath('slips')
    )

    await app.vault.adapter.fs.rm(await tp.file.path());
  }

  if (tp.file.title === 'thought') {
    tp.file.create_new(
      tp.file.find_tfile('thought-template'),
      'new_thought',
      true,
      app.vault.getAbstractFileByPath('thoughts')
    )

    await app.vault.adapter.fs.rm(await tp.file.path());
  }

  if (tp.file.title === 'todo') {
    tp.file.create_new(
      tp.file.find_tfile('todo-template'),
      'new_idea',
      true,
      tp.file.folder(),
    )

    await app.vault.adapter.fs.rm(await tp.file.path());
  }

  return '';
}

module.exports = init;
