Delly
=====

Simple method delegation helper. Method delegation is an alternative to inheritance. 

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
```