function ladderLength(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;
    const queue = [[beginWord, 1]];
    while (queue.length) {
        const [word, distance] = queue.shift();
        for (let i=0; i<word.length; i++) {
            const charArray = word.split('');
            for (let char=97; char<=122; char++) {
                charArray[i] = String.fromCharCode(char);
                const newWord = charArray.join('');
                if (newWord === endWord) return distance+1;
                if (wordSet.has(newWord)) {
                    queue.push([newWord, distance+1]);
                    wordSet.delete(newWord)
                }
            }
        }
    }
    return 0;
};