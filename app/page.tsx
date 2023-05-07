import Image from 'next/image'
import {
  ArrowIcon
} from '../components/icons'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <section>
      <h1 className="font-bold text-3xl font-serif">Bryce Kane</h1>
      <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
       about 
      </p>
      <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
        <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400">

        </div>
      </div>
      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
       blog 
      </p>
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
        <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/CandyKan3"
          >
            <ArrowIcon />
            <p className="h-7">Github</p>
          </a>
        </li>
      </ul>
    </section>
    </main>
    
  )
}
