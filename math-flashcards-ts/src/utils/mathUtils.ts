export interface MathProblem {
    num1: number;
    num2: number;
    operation: string;
    answer: number;
  }
  
  const generateRandomNumber = (): number => Math.floor(Math.random() * 10) + 1;
  const operations: string[] = ['+', '-', '*'];
  
  const getAnswer = (num1: number, num2: number, operation: string): number => {
    switch (operation) {
      case '+':
        return num1 + num2;
      case '-':
        if (num1 < num2) {
          return num2 - num1;
        } else {
          return num1 - num2;
        }
      case '*':
        return num1 * num2;
      default:
        throw new Error("Invalid operation");
    }
}

  export const generateMathProblem = (symbol: string): MathProblem => {
    const num1 = generateRandomNumber();
    const num2 = generateRandomNumber();
    const operation = operations[Math.floor(Math.random() * operations.length)];
    
    let answer = getAnswer(num1, num2, operation);
  
    return { num1, num2, operation, answer };
  };
  
  export const generateProblemSet = (count: number, symbol: string): MathProblem[] => {
    const problems: MathProblem[] = [];
    for (let i = 0; i < count; i++) {
      problems.push(generateMathProblem(symbol));
    }
    return problems;
  };