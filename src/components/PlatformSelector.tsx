import { motion } from 'framer-motion'
import { Platform } from '../types'
import './PlatformSelector.css'

interface PlatformSelectorProps {
  selected: Platform[]
  onChange: (platforms: Platform[]) => void
}

const platforms = [
  { id: 'twitter' as Platform, name: 'Twitter', icon: '𝕏', color: '#1da1f2' },
  { id: 'linkedin' as Platform, name: 'LinkedIn', icon: '💼', color: '#0a66c2' },
  { id: 'reddit' as Platform, name: 'Reddit', icon: '🤖', color: '#ff4500' },
]

const PlatformSelector = ({ selected, onChange }: PlatformSelectorProps) => {
  const togglePlatform = (platform: Platform) => {
    if (selected.includes(platform)) {
      onChange(selected.filter(p => p !== platform))
    } else {
      onChange([...selected, platform])
    }
  }

  return (
    <div className="platform-selector">
      <label className="label">
        <span className="label-text">Choose platforms</span>
        {selected.length > 0 && (
          <span className="selected-count">{selected.length} selected</span>
        )}
      </label>
      
      <div className="platforms-grid">
        {platforms.map((platform) => {
          const isSelected = selected.includes(platform.id)
          
          return (
            <motion.button
              key={platform.id}
              className={`platform-card ${isSelected ? 'selected' : ''}`}
              onClick={() => togglePlatform(platform.id)}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              style={{
                '--platform-color': platform.color
              } as React.CSSProperties}
            >
              <motion.div
                className="platform-check"
                initial={false}
                animate={{
                  scale: isSelected ? 1 : 0,
                  opacity: isSelected ? 1 : 0
                }}
              >
                ✓
              </motion.div>
              
              <div className="platform-icon">{platform.icon}</div>
              <div className="platform-name">{platform.name}</div>
              
              {isSelected && (
                <motion.div
                  className="platform-glow"
                  layoutId={`glow-${platform.id}`}
                />
              )}
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}

export default PlatformSelector