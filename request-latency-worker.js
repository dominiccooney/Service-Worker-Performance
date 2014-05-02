this.onfetch = function(event) {
  var response = new Response({
    statusCode: 200,
    statusText: 'OK',
    method: 'GET'
  });
  event.respondWith(response);
};
