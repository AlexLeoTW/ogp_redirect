const argv = require('yargs')
  .usage('Attach The Open Graph protocol metadata, then redirect' + '\n  ' +
    'Usage: $0 [--port <port>]')
  .option('domain', {
      description: 'domain or ip',
      demandOption: true
  })
  .option('port', {
      description: 'which port to listen on',
      default: 3000,
      alias: 'p'
  })
  .help()
  .argv

module.exports = argv
