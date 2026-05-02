'use client'

import { useState } from 'react'

export type PresetType = 'professional' | 'casual' | 'witty'

// Transformation functions
const transformProfessional = (input: string): string => {
  return input
    // Capitalize "I"
    .replace(/\bi\b/g, 'I')
    // Expand contractions
    .replace(/can't/g, 'cannot')
    .replace(/won't/g, 'will not')
    .replace(/don't/g, 'do not')
    .replace(/isn't/g, 'is not')
    .replace(/aren't/g, 'are not')
    .replace(/wasn't/g, 'was not')
    .replace(/weren't/g, 'were not')
    .replace(/hasn't/g, 'has not')
    .replace(/haven't/g, 'have not')
    .replace(/hadn't/g, 'had not')
    .replace(/wouldn't/g, 'would not')
    .replace(/shouldn't/g, 'should not')
    .replace(/couldn't/g, 'could not')
    .replace(/mustn't/g, 'must not')
    .replace(/needn't/g, 'need not')
    .replace(/daren't/g, 'dare not')
    .replace(/mayn't/g, 'may not')
    .replace(/mightn't/g, 'might not')
    .replace(/oughtn't/g, 'ought not')
    .replace(/shan't/g, 'shall not')
    .replace(/that's/g, 'that is')
    .replace(/there's/g, 'there is')
    .replace(/here's/g, 'here is')
    .replace(/what's/g, 'what is')
    .replace(/where's/g, 'where is')
    .replace(/who's/g, 'who is')
    .replace(/how's/g, 'how is')
    .replace(/it's/g, 'it is')
    .replace(/let's/g, 'let us')
    .replace(/that'll/g, 'that will')
    .replace(/you'll/g, 'you will')
    .replace(/he'll/g, 'he will')
    .replace(/she'll/g, 'she will')
    .replace(/we'll/g, 'we will')
    .replace(/they'll/g, 'they will')
    .replace(/I'll/g, 'I will')
    .replace(/you're/g, 'you are')
    .replace(/we're/g, 'we are')
    .replace(/they're/g, 'they are')
    .replace(/I'm/g, 'I am')
    .replace(/he's/g, 'he is')
    .replace(/she's/g, 'she is')
    // Replace informal expressions
    .replace(/\bkinda\b/g, 'kind of')
    .replace(/\bsorta\b/g, 'sort of')
    .replace(/\bgonna\b/g, 'going to')
    .replace(/\bwanna\b/g, 'want to')
    .replace(/\bhey\b/gi, 'Hello')
    .replace(/\bthanks\b/gi, 'Thank you')
    // Capitalize first letter of sentences
    .replace(/(^|[.!?]\s+)([a-z])/g, (match, p1, p2) => p1 + p2.toUpperCase())
    // Ensure proper sentence ending
    .replace(/([a-zA-Z])$/, '$1.')
}

const transformCasual = (input: string): string => {
  return input
    // Convert to lowercase except for "I"
    .replace(/([A-Z])/g, (match, p1) => p1 === 'I' ? p1 : p1.toLowerCase())
    // Add contractions
    .replace(/\bcannot\b/g, "can't")
    .replace(/\bwill not\b/g, "won't")
    .replace(/\bdo not\b/g, "don't")
    .replace(/\bis not\b/g, "isn't")
    .replace(/\bare not\b/g, "aren't")
    .replace(/\bwas not\b/g, "wasn't")
    .replace(/\bwere not\b/g, "weren't")
    .replace(/\bhas not\b/g, "hasn't")
    .replace(/\bhave not\b/g, "haven't")
    .replace(/\bhad not\b/g, "hadn't")
    .replace(/\bwould not\b/g, "wouldn't")
    .replace(/\bshould not\b/g, "shouldn't")
    .replace(/\bcould not\b/g, "couldn't")
    .replace(/\bmust not\b/g, "mustn't")
    .replace(/\bthat is\b/g, "that's")
    .replace(/\bthere is\b/g, "there's")
    .replace(/\bhere is\b/g, "here's")
    .replace(/\bwhat is\b/g, "what's")
    .replace(/\bwhere is\b/g, "where's")
    .replace(/\bwho is\b/g, "who's")
    .replace(/\bhow is\b/g, "how's")
    .replace(/\bit is\b/g, "it's")
    .replace(/\blet us\b/g, "let's")
    .replace(/\bthat will\b/g, "that'll")
    .replace(/\byou will\b/g, "you'll")
    .replace(/\bhe will\b/g, "he'll")
    .replace(/\bshe will\b/g, "she'll")
    .replace(/\bwe will\b/g, "we'll")
    .replace(/\bthey will\b/g, "they'll")
    .replace(/\bI will\b/g, "I'll")
    .replace(/\byou are\b/g, "you're")
    .replace(/\bwe are\b/g, "we're")
    .replace(/\bthey are\b/g, "they're")
    .replace(/\bI am\b/g, "I'm")
    .replace(/\bhe is\b/g, "he's")
    .replace(/\bshe is\b/g, "she's")
    // Add casual expressions
    .replace(/\bHello\b/g, 'hey')
    .replace(/\bThank you\b/g, 'thanks')
    .replace(/\bkind of\b/g, 'kinda')
    .replace(/\bsort of\b/g, 'sorta')
    .replace(/\bgoing to\b/g, 'gonna')
    .replace(/\bwant to\b/g, 'wanna')
    // Relaxed punctuation
    .replace(/\.$/, '')
    .replace(/!+$/g, '!')
    // Ensure first letter is lowercase unless it's "I"
    .replace(/^([A-Z])/, (match, p1) => p1 === 'I' ? p1 : p1.toLowerCase())
}

const transformWitty = (input: string): string => {
  return input
    // Add witty expressions and wordplay
    .replace(/\bvery\s+(\w+)/g, 'super $1')
    .replace(/\breally\s+(\w+)/g, 'totally $1')
    .replace(/\bgreat\b/gi, 'awesome')
    .replace(/\bgood\b/gi, 'solid')
    .replace(/\bbad\b/gi, 'rough')
    .replace(/\bdifficult\b/gi, 'tricky')
    .replace(/\beasy\b/gi, 'a breeze')
    .replace(/\bfast\b/gi, 'lightning quick')
    .replace(/\bslow\b/gi, 'taking its sweet time')
    .replace(/\bbig\b/gi, 'massive')
    .replace(/\bsmall\b/gi, 'tiny')
    .replace(/\bHello\b/gi, 'Hey there')
    .replace(/\bhi\b/gi, 'Hey there')
    .replace(/\bThank you\b/gi, 'Much appreciated')
    .replace(/\bthanks\b/gi, 'Much appreciated')
    .replace(/\byes\b/gi, 'absolutely')
    .replace(/\bno\b/gi, 'nope')
    .replace(/\bokay\b/gi, 'sounds good')
    .replace(/\bok\b/gi, 'sounds good')
    // Add emphasis and energy
    .replace(/(!+)$/g, ' 🎯')
    .replace(/(\.+)$/g, ' ✨')
    // Ensure it ends with some flair if it doesn't already
    .replace(/([a-zA-Z])$/g, '$1 💫')
}

export function use{{PROJECT_NAME}}() {
  const [inputText, setInputText] = useState('')
  const [selectedPreset, setSelectedPreset] = useState<PresetType>('professional')
  const [outputText, setOutputText] = useState('')
  const [isCopied, setIsCopied] = useState(false)

  const characterCount = inputText.length

  const handleGenerate = () => {
    if (!inputText.trim()) return

    let transformed = ''
    switch (selectedPreset) {
      case 'professional':
        transformed = transformProfessional(inputText)
        break
      case 'casual':
        transformed = transformCasual(inputText)
        break
      case 'witty':
        transformed = transformWitty(inputText)
        break
      default:
        transformed = inputText
    }

    setOutputText(transformed)
  }

  const handleCopy = async () => {
    if (!outputText) return

    try {
      await navigator.clipboard.writeText(outputText)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text:', err)
      // Fallback for browsers without clipboard API
      const textArea = document.createElement('textarea')
      textArea.value = outputText
      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()
      try {
        document.execCommand('copy')
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 2000)
      } catch (fallbackErr) {
        console.error('Fallback copy failed:', fallbackErr)
      }
      document.body.removeChild(textArea)
    }
  }

  return {
    inputText,
    selectedPreset,
    outputText,
    isCopied,
    characterCount,
    setInputText,
    setSelectedPreset,
    handleGenerate,
    handleCopy
  }
}
