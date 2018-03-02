module.exports = function (body) {
    return `<!doctype html>
<html>
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>Tech challenge from Bexio: a simple guest book</title>

    <style>
    </style>
  </head>

  <body>
    <div class="container">
      ${body}
    </div>
  </body>
</html>
`
}
