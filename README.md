# ✨ Creator Discovery Engine

> **Creator Content Cross-Poster** - Share your content across Twitter, LinkedIn, and Reddit with smart scheduling and optimized hashtags

## 🎯 What It Does

A beautifully designed React/TypeScript app that helps creators automatically share their content across multiple platforms with:

- ⚡ **Smart Scheduling** - Post now, at optimal times, or schedule custom times
- 🎯 **Multi-Platform Support** - Twitter, LinkedIn, and Reddit in one click
- ✨ **Hashtag Optimization** - AI-powered hashtag suggestions for each platform
- 🎨 **Magical UX** - 80% design focus with smooth animations and gradients
- 🚀 **Cloudflare Workers** - Serverless deployment for instant global reach

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Deploy to Cloudflare Workers
npm run deploy
```

## 🛠️ Tech Stack

- **React 18** - Modern UI framework
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Framer Motion** - Smooth animations
- **Cloudflare Workers** - Serverless deployment

## 🎨 Design Philosophy

**80% UX/Design, 20% Code**

- Gradient backgrounds with floating orbs
- Smooth micro-interactions
- Responsive and mobile-first
- Dark theme with accent colors
- Minimal cognitive load

## 📦 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx       # Navigation header
│   ├── ContentInput.tsx # Text input with character counter
│   ├── PlatformSelector.tsx # Platform selection cards
│   ├── ScheduleSelector.tsx # Timing options
│   ├── PostButton.tsx   # Main CTA button
│   └── SuccessModal.tsx # Success confirmation
├── types.ts            # TypeScript definitions
├── App.tsx             # Main application
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## 🎯 Features

### Content Input
- Real-time character counter
- Twitter-optimized (280 chars)
- Visual progress bar
- Smart placeholder text

### Platform Selection
- Visual platform cards
- Multi-select with animations
- Platform-specific colors
- Selected state indicators

### Smart Scheduling
- **Post Now** - Instant publishing
- **Smart Schedule** - AI picks optimal times (10 AM, 2 PM, 7 PM)
- **Custom Time** - User-defined scheduling

### Success Feedback
- Animated success modal
- Platform confirmation
- Smooth transitions
- Auto-reset for next post

## 🚀 Deployment

### Cloudflare Workers Setup

1. Install Wrangler CLI:
```bash
npm install -g wrangler
```

2. Login to Cloudflare:
```bash
wrangler login
```

3. Deploy:
```bash
npm run build
npm run deploy
```

### Environment Variables

Add your API keys to `wrangler.toml`:

```toml
[vars]
TWITTER_API_KEY = "your-twitter-key"
LINKEDIN_API_KEY = "your-linkedin-key"
REDDIT_API_KEY = "your-reddit-key"
```

## 🎨 Customization

Colors and themes can be customized in `src/index.css`:

```css
:root {
  --bg-primary: #0a0a0f;
  --bg-secondary: #13131c;
  --accent: #6366f1;
  --twitter: #1da1f2;
  --linkedin: #0a66c2;
  --reddit: #ff4500;
}
```

## 🤝 Contributing

Contributions are welcome! This is a simple, focused app - let's keep it that way.

## 📄 License

MIT License - feel free to use this for your own projects!

## 💡 Future Ideas

- [ ] Analytics dashboard
- [ ] Content templates
- [ ] Image upload support
- [ ] Thread creation
- [ ] Performance metrics
- [ ] A/B testing for timing

---

**Built with ❤️ by creators, for creators**

*Keep it simple. Make it magical.* ✨