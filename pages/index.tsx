import Head from 'next/head'
// import { allPosts } from 'contentlayer/generated'
import Projects from "../ui/Projects"
import Image from 'next/image';
import { useColorSeed } from '@/ui/useColorSeed';
import Layout from '@/ui/Layout';
import About from '@/ui/About';
import Skills from '@/ui/Skills';
import Words from '@/ui/Words';
import Contact from '@/ui/Contact';

export default function Home() {
  const seed=useColorSeed()
  return (
   <Layout>
    <div className='space-y-14 lg:space-y-24'>
      <div id="about">
      <About seed={seed}/>
      </div>
      <div id='skills'>
      <Skills/>
      </div>
      <div id='projects'>
      <Projects seed={seed} />
      </div>
      <div id='words'>
       <Words/>
      </div>
      <div id='contact'>
        <Contact/>
      </div>
    </div>
   </Layout>
  )
}
