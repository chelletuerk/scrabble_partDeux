import React from 'react'

const scoreWord = (text, multiplier) => {

  if (text === null || '') {
    return 0
  }

    const letterScores = {
      A: 1, B: 3, C: 3, D: 2,
      E: 1, F: 4, G: 2, H: 4,
      I: 1, J: 8, K: 5, L: 1,
      M: 3, N: 1, O: 1, P: 3,
      Q: 10, R: 1, S: 1, T: 1,
      U: 1, V: 4, W: 4, X: 8,
      Y: 4, Z: 10
    }




    // const rawScore = text.trim().toUpperCase().split('')
    // .map((word) => letterScores[word])
    // .filter((notWord) => notWord !== undefined)
    // .reduce((a, b) => a + b)
    //
    // return rawScore * multiplier

      const rawScore = text.trim().toUpperCase().split('')
      let scoreArray = rawScore.map((word) =>  {
        return letterScores[word]
      })
      let refinedArray = scoreArray.reduce((a, b) => {
         return a + b
       }, 0)
      return multiplier ? refinedArray * multiplier : refinedArray
    }



  module.exports = scoreWord
