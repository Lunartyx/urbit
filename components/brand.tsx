export function Brand() {
  return (
    <span className="brand" translate="no">
      <svg viewBox="0 0 36 36" fill="none" aria-hidden="true" className="brand-symbol">
        <path d="M6 5v15a12 12 0 0 0 24 0V5h-8v15a4 4 0 0 1-8 0V5Z" fill="currentColor" />
      </svg>
      <span className="brand-word">
        urbit<span className="brand-dot">.</span>
      </span>
      <span className="brand-descriptor">
        Urbanetz
        <br />
        IT Consulting
      </span>
    </span>
  )
}
