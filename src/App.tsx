import reaction from './assets/images/icon-reaction.svg'
import memory from './assets/images/icon-memory.svg'
import verbal from './assets/images/icon-verbal.svg'
import visual from './assets/images/icon-visual.svg'

export default function App() {
  return (
    <div className="sm:flex sm:w-screen h-screen place-items-center justify-center sm:px-5">
      {/* primeira parte */}
      <div className="sm:w-[50vh] sm:p-10 p-5 flex flex-col text-center text-[--pale-blue] bg-gradient-to-b from-[--light-slate-blue] to-[--light-royal-blue] sm:rounded-3xl rounded-b-3xl">
        <span>Your Result</span>

        <div className="flex flex-col sm:w-40 w-28 sm:h-40 h-28 rounded-full bg-gradient-to-t to-[--violet-blue] from-[--persian-blue] items-center justify-center mx-auto sm:my-10 my-5">
          <h1 className="text-4xl font-bold">76</h1>
          <span className="sm:text-base text-sm">of 100</span>
        </div>

        <h1 className="sm:mb-5 mb-2 sm:text-2xl text-xl font-semibold">Great</h1>
        <p className="text-center sm:text-base text-sm">You scored higher than 65% of the people who have taken these tests.</p>
      </div>
      
      {/* segunda parte */}
      <div className="flex flex-col sm:w-[50vh] px-5 sm:text-base text-sm font-semibold">
        <h2 className="text-[--dark-gray-blue] sm:text-2xl text-base font-semibold sm:mt-0 mt-5">Summary</h2>

        <div className="sm:space-y-5 space-y-3 sm:my-10 my-5">
          <div className="flex bg-[--light-red-tr] justify-between p-3 rounded">
            <div className="flex">
              <img src={ reaction } alt="" />
              <p className="text-[--light-red]">Reaction</p>
            </div>

            <div className="flex">
              <p>80 <span className="text-[--grey]">/ 100</span></p>
            </div>
          </div>

          <div className="flex bg-[--orangey-yellow-tr] justify-between p-3 rounded">
            <div className="flex">
              <img src={ memory } alt="" />
              <p className="text-[--orangey-yellow]">Memory</p>
            </div>

            <div className="flex">
              <p>92 <span className="text-[--grey]">/ 100</span></p>
            </div>
          </div>

          <div className="flex bg-[--green-teal-tr] justify-between p-3 rounded">
            <div className="flex">
              <img src={ verbal } alt="" />
              <p className="text-[--green-teal]">Verbal</p>
            </div>

            <div className="flex">
              <p>61 <span className="text-[--grey]">/ 100</span></p>
            </div>
          </div>

          <div className="flex bg-[--cobalt-blue-tr] justify-between p-3 rounded">
            <div className="flex">
              <img src={ visual } alt="" />
              <p className="text-[--cobalt-blue]">Visual</p>
            </div>

            <div className="flex">
              <p>72 <span className="text-[--grey]">/ 100</span></p>
            </div>
          </div>
        </div>

        <button className="hover:bg-[--dark-gray-blue-hover] duration-300 bg-[--dark-gray-blue] text-[--pale-blue] py-3 sm:mb-0 mb-3 rounded-full">Continue</button>
      </div>
    </div>
  )
}