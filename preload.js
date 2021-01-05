const { shell } = require('electron')

window.exports = {
  'generate_username': {
    mode: 'none',
    args: {
      enter: (action, updateUsername) => {
        utools.ubrowser.hide().goto("https://www.lastpass.com/username-generator").evaluate(() => {
          return (document.getElementById("GENERATED-PASSWORD").value)
        }).run().then(function(rst) {
          globalThis.window.document.getElementById("GENERATED-USERNAME").value = rst[0]
        }).catch(function() {
          console.log()
        });
      }
    }
  }
}