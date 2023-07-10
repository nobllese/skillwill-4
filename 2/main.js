const newArr = (sentence) => {
  return sentence.map((s) => {
    return s
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }).join(' ');
};

console.log(newArr([
  'there was in arabia rostevan, a king by the grace of god, happy, ' +
  'exalted, generous, modest, lord of many hosts and knights, just and ' +
  'gracious, powerful, far-seeing, himself a peerless warrior, moreover fluent ' +
  'in speech.'
]));
