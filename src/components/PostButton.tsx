import { motion } from 'framer-motion'
import './PostButton.css'

interface PostButtonProps {
  onClick: () => void
  disabled: boolean
  isPosting: boolean
  platformCount: number
}

const PostButton = ({ onClick, disabled, isPosting, platformCount }: PostButtonProps) => {
  return (
    <motion.button
      className="post-button"
      onClick={onClick}
      disabled={disabled || isPosting}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
    >
      {isPosting ? (
        <>
          <motion.div
            className="spinner"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          >
            ⚡
          </motion.div>
          <span>Publishing your content...</span>
        </>
      ) : (
        <>
          <span className="button-icon">✨</span>
          <span>
            {disabled 
              ? 'Fill in content and select platforms'
              : `Post to ${platformCount} platform${platformCount !== 1 ? 's' : ''}`
            }
          </span>
          {!disabled && <span className="button-arrow">→</span>}
        </>
      )}
    </motion.button>
  )
}

export default PostButton