
type AIResponseProps = {
  message: string;
  time?: string;}


export  function AIResponse({ message, time}: AIResponseProps) {


    
  return (
    <div className="flex items-start gap-3 max-w-3xl">
      {/* Avatar */}
      <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-indigo-500 to-purple-500 text-white shadow">
        ✨
      </div>

      {/* Message Bubble */}
      <div className="flex flex-col">
        <div className="rounded-2xl bg-gray-100 px-4 py-3 text-gray-800">
          <p className="leading-relaxed">{message}</p>
        </div>
        {time && (
          <span className="mt-1 text-xs text-gray-400">{time}</span>
        )}
      </div>
    </div>
  );
}
