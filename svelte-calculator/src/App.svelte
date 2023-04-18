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

<body>
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
</body>


<style>
	body {
		
		margin: 0;
		padding: 0;
		
	}

	.container {
		padding: 20px;
		display: flex;
		justify-content: center;
		background: lightblue;
	}

	.calculator {
	  margin: 100px 0 ;
	  background: linear-gradient(#e66465, #9198e5);
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  justify-content: center;
	  width: 400px;
	  height: 600px;
	  font-size: 2rem;
	  border: 1px solid gray;
	}
	
	.display {
	  background-color: #eee;
	  padding: 0.5rem;
	  margin-bottom: 1rem;
	  text-align: right;
	  width: 60%;
	  box-sizing: border-box;
	  border-radius: 0.25rem;
	}
	
	.buttons {
	  display: grid;
	  grid-template-columns: repeat(4, 1fr);
	  grid-gap: 1rem;
	}
	
	button {
	  background-color: #333;
	  color: #fff;
	  border: none;
	  border-radius: 0.25rem;
	  padding: 1rem;
	  font-size: 1.5rem;
	  cursor: pointer;
	  transition: background-color 0.3s ease;
	}
	
	button:hover {
	  background-color: #555;
	}
	
	button:active {
	  transform: translateY(2px);
	}
</style>
