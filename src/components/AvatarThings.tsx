function AvatarThings({ thing }: { thing: string }) {
  return (
    <div className="absolute top-1/2 left-full ml-3 -translate-y-1/2">
      <div className="bg-white/10 text-white text-sm px-3 py-1 rounded-md shadow-lg border border-white/20">
        {thing}
      </div>

      <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-white/10 border-l border-t border-white/20 rotate-45"></div>
    </div>
  );
}

export default AvatarThings;