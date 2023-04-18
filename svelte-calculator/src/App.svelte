<script>
	let displayValue = "";
	let currentValue = false;

	function handleButtonCLick(event) {
		const buttonValue = event.target.textContent;
		displayValue += buttonValue;
		currentValue;

		if (currentValue === true) {
			displayValue = '';
			displayValue += buttonValue;
			currentValue = false;
		}
	}

	function clearDisplay() {
		displayValue = '';
	}

	function calculateResult() {
		displayValue = eval(displayValue);
		currentValue = true;
	}

</script>

<div class="container">
	<div class="calculator">
	</div>
</div>
