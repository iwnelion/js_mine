const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimal=animals.findIndex(isElephant=>{
  return isElephant==='elephant';
})
const startsWithS=animals.findIndex(doesIt=>{
  return doesIt[0]==='s';
})
