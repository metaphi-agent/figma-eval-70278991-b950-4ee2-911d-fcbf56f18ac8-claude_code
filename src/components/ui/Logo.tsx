export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ff6b9d] via-[#c06ce6] to-[#ffa500] flex items-center justify-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white"/>
        </svg>
      </div>
      <span className="text-[18px] font-semibold text-[var(--color-neutral-900)]">UI Unicorn</span>
    </div>
  );
}
