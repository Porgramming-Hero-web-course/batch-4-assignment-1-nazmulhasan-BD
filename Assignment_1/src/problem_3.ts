{
    // Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

    const countWordOccurrences = (sentence: string, word: string): number => {
        const newSentence: string[] = sentence.toLowerCase().split(" ");
        const newWord = word.toLowerCase();

        let countTime: number = 0;
        for (const eachWord of newSentence) {
            if (newWord === eachWord) {
                countTime++;
            } else {
                countTime = countTime;
            }
        }
        return countTime;
    }
    // console.log(countWordOccurrences("I love typescript typeScript TYpeScript", "TypeScript"));
    countWordOccurrences("I love typescript typeScript TYpeScript", "TypeScript");
}