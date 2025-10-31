import { motion } from 'framer-motion'
import './ContentInput.css'

interface ContentInputProps {
  value: string
  onChange: (value: string) => void
}

const ContentInput = ({ value, onChange }: ContentInputProps) => {
  const maxLength = 280
  const remaining = maxLength - value.length
  const percentage = (value.length / maxLength) * 100

  return (
    <div className="content-input">
      <label className="label">
        <span className="label-text">What's on your mind?</span>
        <span className="char-count" data-warning={remaining < 50}>
          {remaining} characters remaining
        </span>
      </label>
      
      <motion.div
        whileFocus={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
      >
        <textarea
          className="textarea"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Share something inspiring, educational, or entertaining..."
          maxLength={maxLength}
          rows={6}
        />
      </motion.div>
      
      <div className="progress-bar">
        <motion.div 
          className="progress-fill"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  )
}

export default ContentInput