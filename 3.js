function countVowels(string){
  const vowels = ["a","i","u","e","o"]
  string = string.toLowerCase().split('')
  const newString = string.filter( str => {
      for(const vowel of vowels){
        if(vowel === str){
          return true
        }
      }
  })
  return newString.length
}

countVowels("programmer")
countVowels("hmm..")
