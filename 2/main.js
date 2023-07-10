const newArr = (words) => {
    const arr1 = words[0].split(' ');
    return arr1.map((word) => word.toUpperCase()).join(' ');
  };
  
  console.log(newArr([
    'there was in arabia rostevan, a king by the grace of god, happy, ' +
    'exalted, generous, modest, lord of many hosts and knights, just and ' +
    'gracious, powerful, far-seeing, himself a peerless warrior, moreover fluent ' +
    'in speech: '  //ქართული არა, მაგრამ ინგლისური ვეფხისტყაოსანი გამოგვადგება <3
  ]));
  
