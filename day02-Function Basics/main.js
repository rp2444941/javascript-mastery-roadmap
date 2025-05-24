// JavaScript code for the functions and event listeners
        // Function definitions
        function greetUser(name) {
            document.getElementById("greetResult").innerText = `Hello, ${name}!`;
        }
        
        function isEven(n) {
            return n % 2 === 0;
        }
        
        function maxOf3(a, b, c) {
            return Math.max(a, b, c);
        }
        
        function printTriangle(n) {
            const triangleOutput = document.getElementById("triangleOutput");
            triangleOutput.innerHTML = "";
            for (let i = 1; i <= n; i++) {
                triangleOutput.innerHTML += '*'.repeat(i) + '<br>';
            }
        }
        
        function sumArray(arr) {
            return arr.reduce((sum, num) => sum + num, 0);
        }
        
        // Event listeners
        document.getElementById("greetButton").addEventListener("click", function() {
            const name = document.getElementById("nameInput").value;
            greetUser(name);
        });
        
        document.getElementById("checkEvenButton").addEventListener("click", function() {
            const number = Number(document.getElementById("numberInput").value);
            const result = isEven(number) ? "Even" : "Odd";
            document.getElementById("evenResult").innerText = `The number is: ${result}`;
        });
        
        document.getElementById("maxButton").addEventListener("click", function() {
            const a = Number(document.getElementById("numA").value);
            const b = Number(document.getElementById("numB").value);
            const c = Number(document.getElementById("numC").value);
            const max = maxOf3(a, b, c);
            document.getElementById("maxResult").innerText = `Max: ${max}`;
        });
        
        document.getElementById("triangleButton").addEventListener("click", function() {
            const height = Number(document.getElementById("triangleHeight").value);
            printTriangle(height);
        });
        
        document.getElementById("sumButton").addEventListener("click", function() {
            const arrInput = document.getElementById("arrayInput").value;
            const arr = arrInput.split(',').map(Number);
            const sum = sumArray(arr);
            document.getElementById("sumResult").innerText = `Sum: ${sum}`;
        });
   