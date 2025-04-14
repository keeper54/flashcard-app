export interface MathProblem {
    problem: string;
    answer: number;
  }
  
  const generateRandomNumber = (): number => Math.floor(Math.random() * 10) + 1;
  const operations: string[] = ['+', '-', '*'];
  
  export const generateMathProblem = (symbol: string): MathProblem => {
    const num1 = generateRandomNumber();
    const num2 = generateRandomNumber();
    const operation = operations[Math.floor(Math.random() * operations.length)];
    let problem: string;
    let answer: number;
  
    switch (symbol) {
      case '+':
        problem = `${num1} + ${num2}`;
        answer = num1 + num2;
        break;
      case '-':
        if (num1 < num2) {
          problem = `${num2} - ${num1}`;
          answer = num2 - num1;
        } else {
          problem = `${num1} - ${num2}`;
          answer = num1 - num2;
        }
        break;
      case '*':
        problem = `${num1} * ${num2}`;
        answer = num1 * num2;
        break;
      default:
        throw new Error("Invalid operation");
    }
  
    return { problem, answer };
  };
  
  export const generateProblemSet = (count: number, symbol: string): MathProblem[] => {
    const problems: MathProblem[] = [];
    for (let i = 0; i < count; i++) {
      problems.push(generateMathProblem(symbol));
    }
    return problems;
  };