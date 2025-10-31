import { motion } from 'framer-motion'
import { Platform } from '../types'
import './SuccessModal.css'

interface SuccessModalProps {
  platforms: Platform[]
  onClose: () => void
}

const platformIcons: Record<Platform, string> = {
  twitter: '𝕏',
  linkedin: '💼',
  reddit: '🤖',
}

const SuccessModal = ({ platforms, onClose }: SuccessModalProps) => {
  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-content"
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        transition={{ type: 'spring', damping: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        <motion.div
          className="success-icon"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        >
          🎉
        </motion.div>
        
        <h2 className="success-title">Posted Successfully!</h2>
        <p className="success-message">
          Your content has been published to {platforms.length} platform{platforms.length !== 1 ? 's' : ''}
        </p>
        
        <div className="success-platforms">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform}
              className="success-platform"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <span className="platform-icon-small">{platformIcons[platform]}</span>
              <span className="platform-name-small">{platform}</span>
              <span className="check-icon">✓</span>
            </motion.div>
          ))}
        </div>
        
        <motion.button
          className="close-button"
          onClick={onClose}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Create Another Post
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

export default SuccessModal