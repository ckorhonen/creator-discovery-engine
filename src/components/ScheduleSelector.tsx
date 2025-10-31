import { motion } from 'framer-motion'
import { ScheduleOption } from '../types'
import { format } from 'date-fns'
import './ScheduleSelector.css'

interface ScheduleSelectorProps {
  option: ScheduleOption
  customTime: Date | null
  onOptionChange: (option: ScheduleOption) => void
  onCustomTimeChange: (time: Date | null) => void
}

const scheduleOptions = [
  { id: 'now' as ScheduleOption, label: 'Post Now', icon: '⚡', description: 'Instant publishing' },
  { id: 'optimal' as ScheduleOption, label: 'Smart Schedule', icon: '🎯', description: 'AI picks best time' },
  { id: 'custom' as ScheduleOption, label: 'Custom Time', icon: '📅', description: 'You choose when' },
]

const ScheduleSelector = ({ option, customTime, onOptionChange, onCustomTimeChange }: ScheduleSelectorProps) => {
  const handleCustomTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(e.target.value)
    onCustomTimeChange(date)
  }

  return (
    <div className="schedule-selector">
      <label className="label">
        <span className="label-text">When to post?</span>
      </label>
      
      <div className="schedule-options">
        {scheduleOptions.map((scheduleOpt) => {
          const isSelected = option === scheduleOpt.id
          
          return (
            <motion.button
              key={scheduleOpt.id}
              className={`schedule-option ${isSelected ? 'selected' : ''}`}
              onClick={() => onOptionChange(scheduleOpt.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="schedule-icon">{scheduleOpt.icon}</div>
              <div className="schedule-content">
                <div className="schedule-label">{scheduleOpt.label}</div>
                <div className="schedule-description">{scheduleOpt.description}</div>
              </div>
              
              {isSelected && (
                <motion.div
                  className="schedule-radio"
                  layoutId="schedule-radio"
                >
                  <div className="schedule-radio-dot" />
                </motion.div>
              )}
            </motion.button>
          )
        })}
      </div>
      
      {option === 'custom' && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="custom-time-input"
        >
          <input
            type="datetime-local"
            className="datetime-input"
            onChange={handleCustomTimeChange}
            min={format(new Date(), "yyyy-MM-dd'T'HH:mm")}
          />
        </motion.div>
      )}
      
      {option === 'optimal' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="optimal-info"
        >
          <div className="info-badge">
            <span className="info-icon">✨</span>
            <span>Posting at peak engagement times: 10 AM, 2 PM, 7 PM</span>
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default ScheduleSelector