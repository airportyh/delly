module.exports = function(delegateProp, method){
  return function(){
    var delegate = this[delegateProp]
    return delegate[method].apply(delegate, arguments)
  }
}