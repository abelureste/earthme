import PinCard from "./PinCard"
import AddPin from "./AddPin"

export default function PinHolder({ pins }) {

  return (
    <div className="text-white">

      <div className="fixed bottom-31 left-1/2 -translate-x-1/2 z-10">
        <div className="space-y-2 overflow-y-scroll ml-4 max-h-70">
          {pins.map(pin =>
            <PinCard
              key={pin.id}
              pin={pin}
            />
          )}
          <AddPin />
        </div>
      </div>

    </div>
  )
}