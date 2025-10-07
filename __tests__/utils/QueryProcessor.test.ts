import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return name', () => {
        const query = "What is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "wtkane"
          ));
    });

    test('should return andrew id', () => {
        const query = "What is your Andrew ID?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("Wtkane");
    });

    // Math operation tests
    test('should find largest number', () => {
        const query = "Which of the following numbers is the largest: 18, 51, 66?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("66");
    });

    test('should find largest number with different numbers', () => {
        const query = "Which of the following numbers is the largest: 15, 4, 68?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("68");
    });

    test('should handle addition', () => {
        const query = "What is 52 plus 32?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("84");
    });

    test('should handle addition with different numbers', () => {
        const query = "What is 3 plus 54?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("57");
    });

    test('should handle larger addition', () => {
        const query = "What is 84 plus 38?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("122");
    });

    test('should handle another large addition', () => {
        const query = "What is 62 plus 74?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("136");
    });

    test('should handle mixed addition', () => {
        const query = "What is 4 plus 66?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("70");
    });

    test('should handle subtraction', () => {
        const query = "What is 10 minus 4?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("6");
    });

    test('should handle multiplication', () => {
        const query = "What is 7 multiplied by 8?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("56");
    });

    test('should handle division', () => {
        const query = "What is 15 divided by 3?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("5");
    });

    test('should handle division by zero', () => {
        const query = "What is 10 divided by 0?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("Cannot divide by zero");
    });

    test('should handle exponentiation', () => {
        const query = "What is 2 to the power of 3?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("8");
    });

    test('should handle square root', () => {
        const query = "What is the square root of 16?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("4");
    });

    test('should handle square root of negative number', () => {
        const query = "What is the square root of -4?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("Cannot calculate square root of negative number");
    });

    test('should find prime numbers', () => {
        const query = "Which of the following numbers are primes: 2, 3, 4, 5, 6, 7, 8, 9, 10?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("2, 3, 5, 7");
    });
});
