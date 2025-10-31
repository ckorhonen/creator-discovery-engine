export type Platform = 'twitter' | 'linkedin' | 'reddit'

export type ScheduleOption = 'now' | 'optimal' | 'custom'

export interface PlatformConfig {
  id: Platform
  name: string
  icon: string
  color: string
  hashtags: string[]
  optimalTime: string
}