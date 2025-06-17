function solution(myString, pat) {
  const endIdx = myString.lastIndexOf(pat);
  return myString.slice(0, endIdx + pat.length);
}