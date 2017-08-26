var fs= require('fs');

fs.readFile('./people1.json','utf-8',function(err,peeps1){
  if(err){
    throw error;
  }
  var parsed1 = JSON.parse(peeps1);

  fs.readFile('./people2.json','utf-8',function(err,peeps2){
    if(err){
      throw error;
    }
    var parsed2 = JSON.parse(peeps2);
    var firstObj = parsed1.concat(parsed2);
    console.log(firstObj.sort());

    //uncomment this out after you get the merge and sort
    fs.writeFile('./sorted_people.txt',firstObj,function(err){
      if(err){
      console.log(`there was a problem writing: ${err}`)
      throw err;
      }
      console.log('content successfully written');
    })
  })
})



//
