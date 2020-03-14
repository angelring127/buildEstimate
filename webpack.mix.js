const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */



mix.react('resources/js/app.js', 'public/js')
  .sass('resources/sass/app.scss', 'public/css')
  .sourceMaps();

mix.browserSync('localhost:8000');
//Add your own php artisan serve's url and port
//For me url is localhost or 127.0.0.1 and port is 8000

// mix.styles([
//   'node_modules/admin-lte/plugins/fontawesome-free/css/all.min.css',
//   'node_modules/admin-lte/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css',
//   'node_modules/admin-lte/plugins/icheck-bootstrap/icheck-bootstrap.min.css',
//   'node_modules/admin-lte/plugins/jqvmap/jqvmap.min.css',
//   'node_modules/admin-lte/dist/css/adminlte.min.css',
//   'node_modules/admin-lte/plugins/overlayScrollbars/css/OverlayScrollbars.min.css',
//   'node_modules/admin-lte/plugins/daterangepicker/daterangepicker.css',
//   'node_modules/admin-lte/plugins/daterangepicker/daterangepicker.css',
//   'node_modules/admin-lte/plugins/summernote/summernote-bs4.css',
// ], 'public/css/admin-lte.css');

// mix.js([
//   /* jQuery */
//   'node_modules/admin-lte/plugins/jquery/jquery.min.js',
//   /* jQuery UI 1.11.4 */
//   'node_modules/admin-lte/plugins/jquery-ui/jquery-ui.min.js',
// ], 'public/js/jquery_all.js');

// mix.js([
//   'node_modules/admin-lte/plugins/jquery/jquery.min.js',
//   /* jQuery UI 1.11.4 */
//   'node_modules/admin-lte/plugins/jquery-ui/jquery-ui.min.js',
//   /* Resolve conflict in jQuery UI tooltip with Bootstrap tooltip */
//   /* Bootstrap 4 */
//   'node_modules/admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js',
//   /* ChartJS */
//   'node_modules/admin-lte/plugins/chart.js/Chart.min.js',

//   /* Sparkline */
//   'node_modules/admin-lte/plugins/sparklines/sparkline.js',
//   /* JQVMap */

//   'node_modules/admin-lte/plugins/jqvmap/jquery.vmap.min.js',
//   /* jQuery Knob Chart */

//   'node_modules/admin-lte/plugins/jquery-knob/jquery.knob.min.js',
//   /* daterangepicker */

//   'node_modules/admin-lte/plugins/moment/moment.min.js',
//   'node_modules/admin-lte/plugins/daterangepicker/daterangepicker.js',
//   /* Tempusdominus Bootstrap 4 */

//   'node_modules/admin-lte/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js',
//   /* Summernote */

//   'node_modules/admin-lte/plugins/summernote/summernote-bs4.min.js',
//   /* overlayScrollbars */

//   'node_modules/admin-lte/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js',
//   /* AdminLTE App */

//   'node_modules/admin-lte/dist/js/adminlte.js',
//   /* AdminLTE dashboard demo (This is only for demo purposes) */

//   'node_modules/admin-lte/dist/js/pages/dashboard.js',
//   /* AdminLTE for demo purposes */

//   'node_modules/admin-lte/dist/js/demo.js',
// ], 'public/js/admin-lte.js');
