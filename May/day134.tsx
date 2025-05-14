<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Bill Splitter</title>
  <style>
    body {
      font-family: sans-serif;
      margin: 30px;
      max-width: 500px;
    }
    label, input, textarea {
      display: block;
      margin-bottom: 10px;
      width: 100%;
    }
    .error {
      color: red;
      font-size: 0.9em;
    }
    .result {
      margin-top: 20px;
      white-space: pre-line;
      background: #f0f0f0;
      padding: 15px;
      border-radius: 8px;
    }
  </style>
</head>
<body>
  <h1>Split the Bill</h1>
  <label>
    Total Amount ($):
    <input type="number" id="total" step="0.01" />
    <span id="total-error" class="error"></span>
  </label>

  <label>
    Names (separated by commas):
    <textarea id="names"></textarea>
    <span id="names-error" class="error"></span>
  </label>

  <button id="calculate">Calculate</button>

  <div id="result" class="result"></div>

  <script type="module">
    const totalInput = document.getElementById('total') as HTMLInputElement;
    const namesInput = document.getElementById('names') as HTMLTextAreaElement;
    const totalError = document.getElementById('total-error')!;
    const namesError = document.getElementById('names-error')!;
    const resultDiv = document.getElementById('result')!;
    const button = document.getElementById('calculate')!;

    function validateTotal(): boolean {
      const value = parseFloat(totalInput.value);
      if (isNaN(value) || value <= 0) {
        totalError.textContent = 'Enter a valid amount above 0.';
        return false;
      }
      totalError.textContent = '';
      return true;
    }

    function validateNames(): string[] {
      const raw = namesInput.value.split(',');
      const names = raw.map(name => name.trim()).filter((name, i, arr) =>
        name && arr.indexOf(name) === i
      );

      if (names.length === 0) {
        namesError.textContent = 'Enter at least one valid name.';
      } else {
        namesError.textContent = '';
      }

      return names;
    }

    totalInput.addEventListener('input', validateTotal);
    namesInput.addEventListener('input', validateNames);

    button.addEventListener('click', () => {
      if (!validateTotal()) return;

      const total = parseFloat(totalInput.value);
      const names = validateNames();
      if (names.length === 0) return;

      const baseAmount = Math.floor((total / names.length) * 100) / 100;
      const totalBase = baseAmount * names.length;
      let remaining = Math.round((total - totalBase) * 100); // in cents

      let output = `Total: $${total.toFixed(2)}\nPeople: ${names.length}\n\n`;

      names.forEach((name, i) => {
        let amount = baseAmount;
        if (remaining > 0) {
          amount += 0.01;
          remaining--;
        }
        output += `${i + 1}. ${name}: $${amount.toFixed(2)}\n`;
      });

      resultDiv.textContent = output;
    });
  </script>
</body>
</html>