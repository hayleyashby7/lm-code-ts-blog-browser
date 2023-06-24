export const inputValidator = (
	input: string,
	regEx: RegExp | undefined
): boolean => {
	if (input === "") return false;

	if (regEx) return regEx.test(input);

	return true;
};
