export default function AnimationCard({ animation }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md border flex flex-col items-center gap-4">
      <div 
        className="w-16 h-16 rounded-lg" 
        style={{ 
          backgroundColor: "pink",
          border: "4px solid pink",
          animation: "pulseRing 0.5s ease-out infinite"
        }}
      />
      <style>{`
        @keyframes pulseRing {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }
      `}</style>
      <h3>{animation.name}</h3>
    </div>
  );
}
