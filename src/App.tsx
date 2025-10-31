import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import ContentInput from './components/ContentInput'
import PlatformSelector from './components/PlatformSelector'
import ScheduleSelector from './components/ScheduleSelector'
import PostButton from './components/PostButton'
import SuccessModal from './components/SuccessModal'
import { Platform, ScheduleOption } from './types'
import './App.css'

function App() {
  const [content, setContent] = useState('')
  const [selectedPlatforms, setSelectedPlatforms] = useState<Platform[]>([])
  const [scheduleOption, setScheduleOption] = useState<ScheduleOption>('now')
  const [customTime, setCustomTime] = useState<Date | null>(null)
  const [showSuccess, setShowSuccess] = useState(false)
  const [isPosting, setIsPosting] = useState(false)

  const handlePost = async () => {
    setIsPosting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsPosting(false)
    setShowSuccess(true)
    
    // Reset after success
    setTimeout(() => {
      setContent('')
      setSelectedPlatforms([])
      setScheduleOption('now')
      setCustomTime(null)
    }, 3000)
  }

  const canPost = content.trim().length > 0 && selectedPlatforms.length > 0

  return (
    <div className="app">
      <div className="background-gradient" />
      <div className="background-orbs">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>
      
      <Header />
      
      <main className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="content-wrapper"
        >
          <div className="hero-section">
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Share Your Voice
              <span className="gradient-text"> Everywhere</span>
            </motion.h1>
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              One click to reach your audience across Twitter, LinkedIn, and Reddit
            </motion.p>
          </div>

          <motion.div 
            className="main-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            <ContentInput 
              value={content} 
              onChange={setContent}
            />
            
            <PlatformSelector
              selected={selectedPlatforms}
              onChange={setSelectedPlatforms}
            />
            
            <ScheduleSelector
              option={scheduleOption}
              customTime={customTime}
              onOptionChange={setScheduleOption}
              onCustomTimeChange={setCustomTime}
            />
            
            <PostButton
              onClick={handlePost}
              disabled={!canPost}
              isPosting={isPosting}
              platformCount={selectedPlatforms.length}
            />
          </motion.div>

          <motion.div 
            className="features"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="feature">
              <span className="feature-icon">⚡</span>
              <span className="feature-text">Smart hashtag optimization</span>
            </div>
            <div className="feature">
              <span className="feature-icon">🎯</span>
              <span className="feature-text">Peak engagement timing</span>
            </div>
            <div className="feature">
              <span className="feature-icon">✨</span>
              <span className="feature-text">Platform-specific formatting</span>
            </div>
          </motion.div>
        </motion.div>
      </main>

      <AnimatePresence>
        {showSuccess && (
          <SuccessModal 
            platforms={selectedPlatforms}
            onClose={() => setShowSuccess(false)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default App