/**
 * Main.js
 * メインページ
 */
import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import Sidebar from './Sidebar';
import Content from './Content';
// Tempusdominus Bbootstrap 4
import 'admin-lte/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css';
import 'admin-lte/plugins/jqvmap/jqvmap.min.css';
import 'admin-lte/plugins/daterangepicker/daterangepicker.css'
// summernote
import 'admin-lte/plugins/summernote/summernote-bs4.css';
// jQuery UI 1.11.4
import 'admin-lte/plugins/jquery-ui/jquery-ui.min.js';
// Bootstrap 4
import 'admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js';
// ChartJS
import 'admin-lte/plugins/chart.js/Chart.min.js';
// Sparkline
import 'admin-lte/plugins/sparklines/sparkline.js';
// JQVMap
import 'admin-lte/plugins/jqvmap/jquery.vmap.min.js';
import 'admin-lte/plugins/jqvmap/maps/jquery.vmap.usa.js';
// jQuery Knob Chart
import 'admin-lte/plugins/jquery-knob/jquery.knob.min.js';
// // daterangepicker
// import 'admin-lte/plugins/moment/moment.min.js';
import 'admin-lte/plugins/daterangepicker/daterangepicker.js';
// // Tempusdominus Bootstrap 4
import 'admin-lte/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js';
// Summernote
import 'admin-lte/plugins/summernote/summernote-bs4.min.js';
// overlayScrollbars
import 'admin-lte/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js';
// AdminLTE App
import 'admin-lte/dist/js/adminlte.js';
const Main = () => {

  return (
    <div className="wrapper">
      {/* NavigationBar */}
      <NavigationBar />
      {/* /.NavigationBar */}
      {/* Main Sidebar Container */}
      <Sidebar />
      {/* /.Main Sidebar Container */}

      {/* Content Wrapper. Contains page content */}
      <Content />
    </div>
  );
}

export default Main;

