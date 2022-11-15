
function sanitizeInput(input: string): string {
    // Replace $ with \$ to prevent MongoDB from interpreting it as a variable
    input = input.replace(/\$/g, "\\$");
    return input;
}

export { sanitizeInput };