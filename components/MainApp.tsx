'use client'

import { use{{PROJECT_NAME}} } from '@/hooks/use{{PROJECT_NAME}}'

export default function MainApp() {
  const {
    inputText,
    selectedPreset,
    outputText,
    isCopied,
    characterCount,
    setInputText,
    setSelectedPreset,
    handleGenerate,
    handleCopy
  } = use{{PROJECT_NAME}}()

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sticky header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-sm">
        <div className="centered-card">
          <div className="flex h-16 items-center justify-between">
            <h1 className="text-xl font-semibold text-slate-900">{{PROJECT_NAME}}</h1>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-slate-600 hover:text-slate-900 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main content area */}
      <main className="py-8">
        <div className="centered-card">
          <div className="space-y-6">
            {/* Input textarea */}
            <div className="space-y-2">
              <label htmlFor="input-text" className="sr-only">
                Text to {{PROJECT_NAME}}
              </label>
              <textarea
                id="input-text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Paste your email, message, or post here..."
                className="w-full min-h-[140px] px-4 py-3 border border-slate-200 rounded-lg resize-y focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 placeholder-slate-500"
              />
              <p className="text-xs text-slate-400">{characterCount} characters</p>
            </div>

            {/* Preset selector */}
            <fieldset>
              <legend className="sr-only">Choose writing style</legend>
              <div className="flex gap-2" role="group" aria-label="Writing style options">
                <button
                  type="button"
                  onClick={() => setSelectedPreset('professional')}
                  className={`flex-1 px-6 py-3 text-sm font-medium border rounded-lg transition-colors min-h-[44px] ${
                    selectedPreset === 'professional'
                      ? 'border-blue-600 bg-blue-600 text-white hover:bg-blue-700'
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                  aria-pressed={selectedPreset === 'professional'}
                >
                  Professional
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedPreset('casual')}
                  className={`flex-1 px-6 py-3 text-sm font-medium border rounded-lg transition-colors min-h-[44px] ${
                    selectedPreset === 'casual'
                      ? 'border-blue-600 bg-blue-600 text-white hover:bg-blue-700'
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                  aria-pressed={selectedPreset === 'casual'}
                >
                  Casual
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedPreset('witty')}
                  className={`flex-1 px-6 py-3 text-sm font-medium border rounded-lg transition-colors min-h-[44px] ${
                    selectedPreset === 'witty'
                      ? 'border-blue-600 bg-blue-600 text-white hover:bg-blue-700'
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                  aria-pressed={selectedPreset === 'witty'}
                >
                  Witty
                </button>
              </div>
            </fieldset>

            {/* Generate button */}
            <button
              type="button"
              onClick={handleGenerate}
              disabled={!inputText.trim()}
              className={`w-full px-6 py-3 rounded-lg font-medium transition-colors ${
                inputText.trim()
                  ? 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                  : 'bg-slate-300 text-slate-500 cursor-not-allowed'
              }`}
            >
              Generate
            </button>

            {/* Output area */}
            {outputText && (
              <div className="space-y-2">
                <div className="relative px-4 py-3 bg-white border border-slate-200 rounded-lg min-h-[100px]">
                  <div className="pr-10">
                    <p className="text-slate-900 whitespace-pre-wrap">{outputText}</p>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="absolute top-3 right-3 p-1 text-slate-400 hover:text-slate-600 transition-colors"
                    aria-label="Copy to clipboard"
                  >
                    {isCopied ? (
                      <svg
                        className="w-5 h-5 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      
      {/* Built with Cleo HQ badge */}
      <a
        href="https://cleohq.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '16px',
          right: '16px',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          padding: '5px 10px',
          background: 'rgba(8,12,16,0.85)',
          border: '1px solid rgba(255,179,64,0.25)',
          borderRadius: '20px',
          textDecoration: 'none',
          fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif',
          fontSize: '11px',
          color: 'rgba(255,179,64,0.9)',
          backdropFilter: 'blur(8px)'
        }}
      >
        ⬡ Built with Cleo HQ
      </a>
    </div>
  )
}
