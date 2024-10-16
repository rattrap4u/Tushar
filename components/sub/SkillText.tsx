'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
// import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center md:mt-12 mb-5'>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-5xl font-bold text-white max-w-[600px] w-auto h-auto"
        >  
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-cyan-500 hover:from-red-600 hover:to-indigo-700">
              My Core Competencies
            </span>
        </motion.div>
    </div>
  )
}

export default SkillText;