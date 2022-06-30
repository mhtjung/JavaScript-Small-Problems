function wordCount(string) {
  let arr = string.split(" ");
  let results = {}
  for (let i = 0; i < arr.length; i++) {
    if (results[arr[i]]) {
      results[arr[i]] += 1
    } else {
      results[arr[i]] = 1
    }
  }
  return results
}

console.log(wordCount('box car cat bag box'));