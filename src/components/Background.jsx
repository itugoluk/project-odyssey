import './Background.css'

export default function Background() {
  return (
    <div className="bg-wrapper" aria-hidden="true">
      <div className="bg-paper" />
      <div className="bg-grain" />
      <div className="bg-halo bg-halo-1" />
      <div className="bg-halo bg-halo-2" />
      <svg className="bg-lines" viewBox="0 0 1200 800" preserveAspectRatio="none">
        <defs>
          <linearGradient id="ln-fade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#121110" stopOpacity="0" />
            <stop offset="50%" stopColor="#121110" stopOpacity="0.07" />
            <stop offset="100%" stopColor="#121110" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
