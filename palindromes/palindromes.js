function palindromes(rawSentence) {
    let isAPalindrome = true;

    let rawishSentence = rawSentence
                            .replaceAll(".", "")
                            .replaceAll(",", "")
                            .replaceAll("!", "")
                            .replaceAll(" ", "");
    let sentence = rawishSentence.toLowerCase();

    for (let i = 0; i < sentence.length; i++) {
        let firstishCharacter = sentence.charAt(i);
        let lastishCharacter = sentence.charAt(sentence.length - i - 1);

        isAPalindrome = (firstishCharacter === lastishCharacter);

        let isNotAPalindrome = (firstishCharacter !== lastishCharacter);
        if (isNotAPalindrome) {
            break;
        }
    }
    return isAPalindrome;
}

module.exports = palindromes
