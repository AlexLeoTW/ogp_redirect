const argv = require('yargs')
  .usage('Attach The Open Graph protocol metadata, then redirect' + '\n  ' +
    'Usage: $0 [--port <port>]')
  .option('domain', {
      description: 'domain or ip',
      default: 'localhost',
  })
  .option('port', {
      description: 'which port to listen on',
      default: 3000,
      alias: 'p'
  })
  .option('image', {
      description: 'which image to use(og:image)',
      default: 'logo.png',
      alias: 'i',
  })
  .option('redirect', {
      description: 'urls to direct to',
      default: 'https://github.com/AlexLeoTW/ogp_redirect',
      alias: 'r',
  })
  .help()
  .argv

module.exports = argv
