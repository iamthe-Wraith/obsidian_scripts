const populateTags = function(tp) {
  console.log('>>>>> populateTags: ', tp.file.title);
  let tags = '';

  if(tp.file.title === 'to-do') tags = 'to-do';
  if(tp.file.title === 'meeting') tags = 'meeting';
  if(tp.file.title === 'slip') tags = 'slip';
  
  return `tags: ${tags}`;
}

module.exports = populateTags;
