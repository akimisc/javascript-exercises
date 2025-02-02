let alphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
];

alphabet.alphabetLetter = 'A';

function trimOffset (offset) {
    if (offset > 26) {
        return offset % 26;
    } else if (offset < -26) {
        return (offset % 26) - 26;
    }
    return offset;
}

function getUnicodeOf (alphabetLetter) {
    return alphabetLetter.charCodeAt(0);
}



function getNewUnicodeOf (unicodeOfOldMessageCharacter, offset) {
    if (leaveMeBe(unicodeOfOldMessageCharacter)) {
        return unicodeOfOldMessageCharacter;
    }

    return unicodeOfOldMessageCharacter + offset;
}

function leaveMeBe (unicodeOfOldMessageCharacter) {

    return (unicodeOfOldMessageCharacter > 0 && unicodeOfOldMessageCharacter < 65)
        || (unicodeOfOldMessageCharacter > 90 && unicodeOfOldMessageCharacter < 97)
        || (unicodeOfOldMessageCharacter > 122 && unicodeOfOldMessageCharacter < 256);

}

function wrapUnicode (newUnicodeOfOldMessageCharacter, offset, unicodeOfOldMessageCharacter) {
    // smaller than uppercase A?
    if (newUnicodeOfOldMessageCharacter < 65) {
        return newUnicodeOfOldMessageCharacter + 26;
    }
    // bigger than lowercase z?
    if (newUnicodeOfOldMessageCharacter > 122) {
        return newUnicodeOfOldMessageCharacter - 26;
    }
    // character between uppercase Z & lowercase a?
    if (newUnicodeOfOldMessageCharacter > 90 && newUnicodeOfOldMessageCharacter < 97) {
        if ((newUnicodeOfOldMessageCharacter - offset) > 90) {
            return newUnicodeOfOldMessageCharacter + 26;
        }
        return newUnicodeOfOldMessageCharacter - 26;
    }
    // start in uppercase section but end up outside uppercase section?
    if (unicodeOfOldMessageCharacter > 72 && unicodeOfOldMessageCharacter < 90) {
        if ((unicodeOfOldMessageCharacter + offset) > 90) {
            return newUnicodeOfOldMessageCharacter - 26;
        }
    }
    // start in lowercase section but end up outside lowercase section?
    if (unicodeOfOldMessageCharacter > 97 && unicodeOfOldMessageCharacter < 115) {
        if ((unicodeOfOldMessageCharacter + offset) < 97) {
            return newUnicodeOfOldMessageCharacter + 26;
        }
    }

    return newUnicodeOfOldMessageCharacter;
}

function caesar(oldMessage, rawOffset) {
    let newMessage = '';
    let offset = trimOffset(rawOffset);
    for (let oldMessagePosition = 0; oldMessagePosition < oldMessage.length; oldMessagePosition++) {
        let oldMessageCharacter = oldMessage[oldMessagePosition];
        let unicodeOfOldMessageCharacter = getUnicodeOf(oldMessageCharacter);
        let newUnicodeOfOldMessageCharacter = getNewUnicodeOf(unicodeOfOldMessageCharacter, offset);
        let wrappedUnicodeOfOldMessageCharacter = leaveMeBe(unicodeOfOldMessageCharacter)
            ? newUnicodeOfOldMessageCharacter
            : wrapUnicode(newUnicodeOfOldMessageCharacter, offset, unicodeOfOldMessageCharacter);
        let newMessageCharacter = String.fromCharCode(wrappedUnicodeOfOldMessageCharacter);

        newMessage = newMessage + newMessageCharacter;
    }

    return newMessage;
}

module.exports = caesar



