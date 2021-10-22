let mix = require('laravel-mix');

// Now we want our resources > JS & CSS/SCSS compiled into public > JS & CSS...
mix.js('resources/js/app.js','/js/app.js').sass('resources/scss/app.scss','/css/app.css')
.setPublicPath('public');
// .version();