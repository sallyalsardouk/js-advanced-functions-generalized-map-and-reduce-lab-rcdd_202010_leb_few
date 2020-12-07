// Add your functions here
function map(src, callback){
  let r=[];
  for(let i=0;i<src.length;i++){
    let e=src[i];
    r.push(callback(e));
  }
  return r;
}

function reduce(src, cb, starting){
  let r= (!!starting) ? starting : src[0];
  let i= (!!starting) ? 0 : 1;
  for(;i<src.length;i++){
    r=cb(src[i],r);
  }
  return r;
}
