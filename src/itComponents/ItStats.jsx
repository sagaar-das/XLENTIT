

function ItStats() {
  return (
    <section className="bg-black px-6 sm:px-6 py-10">

      <div className="max-w-7xl mx-auto">

        <div className="bg-[#1a1a1a]  text-white 
          rounded-[30px] md:rounded-[40px] 
          px-6 sm:px-10 py-8
          
          grid grid-cols-2 md:flex
          gap-6 md:gap-0
          items-center justify-between">

          {/* ITEM */}
            <div>
                

              <h2 className="text-3xl font-bold">1500+</h2>
              <p className="text-sm text-gray-300">
                Students Placed
              </p>
            </div>

          <div className="hidden md:block w-px h-12 bg-white/30"></div>

          <div>
            <h2 className="text-3xl font-bold">95%</h2>
            <p className="text-sm text-gray-300">
              Interview Success Rate
            </p>
          </div>

          <div className="hidden md:block w-px h-12 bg-white/30"></div>

          <div>
            <h2 className="text-3xl font-bold">150+</h2>
            <p className="text-sm text-gray-300">
              Partner Companies
            </p>
          </div>

          <div className="hidden md:block w-px h-12 bg-white/30"></div>

          <div>
            <h2 className="text-3xl font-bold">4.9/5</h2>
            <p className="text-sm text-gray-300">
              Student Satisfaction
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}

export default ItStats