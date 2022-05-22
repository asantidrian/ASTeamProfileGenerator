

const generateHTML = htmlContent => {
  return `

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
  <script src="https://kit.fontawesome.com/c502137733.js"></script>
  <title>Team Profile Generator</title>
</head>

<body>
  <div class="card-container">
      <div class="card-header row justify-content-center" style="background-color:red">
          <h1 class="p-3 font-weight-bold text-light"> My Team</h1>
      </div>
      <div class="card-body row justify-content-center">
        <div class="card-deck d-flex">
            ${htmlContent}
        </div>
      </div>
    </div>
</body> 
</html> `;

}

module.exports = generateHTML