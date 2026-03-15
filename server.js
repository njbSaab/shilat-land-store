const bs = require('browser-sync').create();

bs.init({
  server: {
    baseDir: './',
    index: 'index.html',
  },
  port: 3000,
  open: true,        // автоматически открыть браузер
  notify: false,     // убрать всплывашку browser-sync
  watch: true,       // следить за файлами
  files: ['*.html', '*.css', '*.js', '!server.js'],
});
