Delly
=====

Simple method delegation helper. Method delegation can be used as an alternative to inheritance in some cases. 

## Install

```
npm install delly
```

## Example

```js
var delegate = require('delly')

function Dialog(){}

Dialog.prototype = {
  show: function(){
    console.log('Showing dialog')
  },
  close: function(){
    console.log('Closing dialog')
  }
}

// A lot of people would have FancyDialog
// inherit from Dialog here, but instead we'll
// use delegation
function FancyDialog(){
  this.dialog = new Dialog
}

FancyDialog.prototype = {
  addBackdrop: function(){
    console.log('Adding backdrop')
  },
  // here we'll explicitly delegate each method
  // we want to delegate to `this.dialog`
  show: delegate('dialog', 'show'),
  close: delegate('dialog', 'close')
}

var fancy = new FancyDialog
fancy.show()  // prints "Showing dialog"
fancy.close() // prints "Closing dialog"
```

`show: delegate('dialog', 'show')` is basically a short-hand for

```js
show: function(){
  return this.dialog.show.apply(this.dialog, arguments)
}
```