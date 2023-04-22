// The function below was provided by the user named
// 'overlord1234' on stack overflow. It is based on
// Levenshtein distance.
// https://stackoverflow.com/questions/10473745/compare-strings-javascript-return-of-likely
// https://en.wikipedia.org/wiki/Levenshtein_distance
function similarity(s1, s2) {
  let longer = s1;
  let shorter = s2;
  if (s1.length < s2.length) {
    longer = s2;
    shorter = s1;
  }
  let longerLength = longer.length;
  if (longerLength == 0) {
    return 1.0;
  }
  return (
    (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength)
  );
}

function editDistance(s1, s2) {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();

  let costs = new Array();
  for (let i = 0; i <= s1.length; i++) {
    let lastValue = i;
    for (let j = 0; j <= s2.length; j++) {
      if (i == 0) costs[j] = j;
      else {
        if (j > 0) {
          let newValue = costs[j - 1];
          if (s1.charAt(i - 1) != s2.charAt(j - 1))
            newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
    }
    if (i > 0) costs[s2.length] = lastValue;
  }
  return costs[s2.length];
}

//  Levenshtein distance algorithm

//  In information theory, linguistics, and computer science,
//  the Levenshtein distance is a string metric for measuring the
//  difference between two sequences. Informally, the Levenshtein
//  distance between two words is the minimum number of single-character
//  edits (insertions, deletions or substitutions) required to change one
//  word into the other. It is named after the Soviet mathematician
//  Vladimir Levenshtein, who considered this distance in 1965.
//  Levenshtein distance may also be referred to as edit distance, although
//  that term may also denote a larger family of distance metrics known
//  collectively as edit distance. It is closely related to pairwise
//  string alignments.

// let recFindEditDistance = function(P, T, i, j) {
//     if (i === undefined || j === undefined) return recFindEditDistance(P, T, P.length - 1, T.length - 1);
//     if (i === 0 && j === 0) return 0;
//     if (i === 0) return j;
//     if (j === 0) return i;

//     let sub = recFindEditDistance(P, T, i-1, j-1) + (P[i]===T[j] ? 0 : 1);
//     let del = recFindEditDistance(P, T, i, j-1) + 1;
//     let add = recFindEditDistance(P, T, i-1, j) + 1;

//     return Math.min(sub, add, del);
// };

//  Rieger distance algorithm

// let riegerDistanceAlgo = function(str1, str2) {
//     if(str1 === str2){
//         return 'you good';
//     }
//     else{
//         return 'naw man';
//     }
// };
