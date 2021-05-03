<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link href="" rel="stylesheet"/>
    <link rel="stylesheet" href="{{ asset('assets/vendors/mdi/css/materialdesignicons.min.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/vendors/css/vendor.bundle.base.css') }}">
    <!-- endinject -->
    <!-- Plugin css for this page -->
    <!-- End plugin css for this page -->
    <!-- inject:css -->
    <!-- endinject -->
    <!-- Layout styles -->
    <link rel="stylesheet" href="{{ asset('assets/css/style.css') }}">
    <!-- End layout styles -->
    <link rel="shortcut icon" href="{{ asset('assets/images/favicon.ico') }}" />
</head>
<body>
    @routes
    @inertia

    <!-- container-scroller -->
    <!-- plugins:js -->
    {{-- <script src="assets/vendors/js/vendor.bundle.base.js"></script> --}}
    <!-- endinject -->
    <!-- Plugin js for this page -->
        <script src="{{ mix('js/app.js') }}" defer></script>
        <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
      <script src="{{ asset('assets/vendors/chart.js/Chart.min.js') }}"></script>
      <!-- End plugin js for this page -->
      <!-- inject:js -->
      <script src="{{ asset('assets/js/off-canvas.js') }}"></script>
      <script src="{{ asset('assets/js/misc.js') }}"></script>
      <script src="{{ asset('assets/js/misc.js') }}"></script>
      <!-- endinject -->
      <!-- Custom js for this page -->
      <script src="{{ asset('assets/js/dashboard.js') }}"></script>
      <script src="{{ asset('assets/js/todolist.js') }}"></script>
      <!-- End custom js for this page -->

</body>
</html>
