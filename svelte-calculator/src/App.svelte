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
		<div class="display">{displayValue}</div>
		<div class="buttons">
			<button on:click={handleButtonCLick}>1</button>
			<button on:click={handleButtonCLick}>2</button>
			<button on:click={handleButtonCLick}>3</button>
			<button on:click={handleButtonCLick}>+</button>
			<button on:click={handleButtonCLick}>4</button>
			<button on:click={handleButtonCLick}>5</button>
			<button on:click={handleButtonCLick}>6</button>
			<button on:click={handleButtonCLick}>-</button>
			<button on:click={handleButtonCLick}>7</button>
			<button on:click={handleButtonCLick}>8</button>
			<button on:click={handleButtonCLick}>9</button>
			<button on:click={handleButtonCLick}>*</button>
			<button on:click={handleButtonCLick}>0</button>
			<button on:click={handleButtonCLick}>.</button>
			<button on:click={clearDisplay}>C</button>
			<button on:click={handleButtonCLick}>/</button>
			<button on:click={calculateResult}>=</button>
		</div>
	</div>
</div>

<style>
	.container {
		margin: 0 auto;
		background: linear-gradient(#e66465, #9198e5);
	}

</style>
