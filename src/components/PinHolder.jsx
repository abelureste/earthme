import PinCard from "./PinCard"
import AddPin from "./AddPin"

export default function PinHolder() {
  return (
    <div className="text-white">

      <div className="fixed bottom-39 left-1/2 -translate-x-1/2 z-10">
        <div className="space-y-2">
          <PinCard />
          <PinCard />
          <PinCard />
          <AddPin />
        </div>
      </div>

    </div>
  )
}