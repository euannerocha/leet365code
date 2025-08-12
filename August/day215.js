<!DOCTYPE html>
<html>
  <head>
    <title>Roet App</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="roet.js"></script>
    <script>
      const App = createElement('div', { id: 'root' },
        createElement('h1', null, 'Hello Roet'),
        createElement('p', null, 'No build steps!')
      );

      render(App, document.getElementById('app'));
    </script>
  </body>
</html>