import React from 'react';
import { motion } from 'framer-motion';
import { IllustrationProps } from '../../../types';

const Terminal: React.FC<IllustrationProps> = ({ isHovered }) => {
  return (
    <div className="w-full h-full flex flex-col gap-4 font-mono text-xs overflow-hidden select-none">
      {/* Terminal Window */}
      <motion.div 
        className="w-full bg-white border border-black relative"
        initial={false}
        animate={isHovered ? { y: -2 } : { y: 0 }}
      >
        {/* Title Bar */}
        <div className="h-4 bg-black w-full" />
        
        <div className="p-3">
          <div className="mb-2 text-black font-bold text-[10px]">> pip install chromadb</div>
          
          {/* Progress Bar Container */}
          <div className="h-3 w-full border border-black rounded-full overflow-hidden relative">
             <motion.div 
               className="h-full bg-black relative"
               initial={{ width: "30%" }}
               animate={{ width: isHovered ? "85%" : "30%" }}
               transition={{ duration: 1.5, ease: "easeInOut" }}
             >
                {/* Dither pattern overlay for texture */}
                <div 
                  className="absolute inset-0 opacity-50" 
                  style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '3px 3px' }}
                />
             </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Code Snippet */}
      <div className="text-gray-500 space-y-1 relative">
         <motion.div animate={{ opacity: isHovered ? 1 : 0.7 }}>
            <span className="text-black">import</span> chromadb
         </motion.div>
         <motion.div animate={{ opacity: isHovered ? 1 : 0.7 }} transition={{ delay: 0.1 }}>
            client = chromadb.Client()
         </motion.div>
         <motion.div animate={{ opacity: isHovered ? 1 : 0.7 }} transition={{ delay: 0.2 }}>
            c = client.create_collection(<span className="text-gray-400">"te...</span>
         </motion.div>
         <div className="text-gray-300 mt-2"># add embeddings and documents</div>
         <motion.div className="text-black" animate={{ x: isHovered ? 2 : 0 }}>c.add(...)</motion.div>
         <div className="text-gray-300 mt-2"># get back similar ones</div>
         <motion.div className="text-black" animate={{ x: isHovered ? 2 : 0 }}>c.query(...)</motion.div>
      </div>
    </div>
  );
};

export default Terminal;