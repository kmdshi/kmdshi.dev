export default function BigCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="
      rounded-2xl border border-white/10 bg-white/5 backdrop-blur 
      p-6 shadow-xl 
    w-auto mx-auto
    ">
      {children}
    </div>
  )
}