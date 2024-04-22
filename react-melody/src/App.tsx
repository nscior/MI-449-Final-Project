// @ts-check
import "./iPhone.css"
import nowPlaying from "./nowPlaying.svg"
import SupabaseAPI from "./Comments.jsx"
import ResultsAPI from "./Search.jsx"

function Playing() {
  return (
    <img className="w-200 mx-auto py-8" src={nowPlaying} alt="now playing" />
  )
}

function Finding() {
  return (
    ResultsAPI()
  )
}

function Talking() {
  return (
    SupabaseAPI()
  )
}

export default function App() {
  return (
    <main className="min-h-screen p-10 bg-melody-purple text-white">
      <div className="text-8xl font-bold tracking-widest drop-shadow text-center pb-20 object-contain">
        Melody
        <p className="text-xl pt-10">The Platform in Tune</p>
      </div>

      <div className="grid grid-rows-1 grid-cols-3 justify-center text-center gap-5">
        <div className="container flex flex-col justify-center">
          <div className="iPhone">
            <div className="Window">
              <div className="Camera">
              </div>
              {Playing()}
            </div>
          </div>
          <div className="m-auto text-center pt-10 w-80">
            Play your favorite music from your favorite artists and albums right in our app. You can like songs and share them straight from the playing window.
          </div>
        </div>

        <div className="container flex flex-col justify-center">
          <div className="iPhone">
            <div className="Window">
              <div className="Camera">
              </div>
              {/*Content inside screen*/}
              {Finding()}
            </div>
          </div>
          <div className="m-auto text-center pt-10 w-80">
            Find your favorite songs, artists, and albums with the largest database of musicians. Users can upload their own tracks to Melody through our app or on our site.
          </div>
        </div>

        <div className="container flex flex-col justify-center">
          <div className="iPhone">
            <div className="Window">
              <div className="Camera">
              </div>
              {/*Content inside screen*/}
              {Talking()}
            </div>
          </div>
          <div className="m-auto text-center pt-10 w-80">
            Talk with your favorite artists and comment on your favorite songs. Talk about anything in the community full of producers, artists, and fans!
          </div>
        </div>
      </div>
      
    </main>
  );
}
