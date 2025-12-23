import React from 'react';
import Card from './Card';
import { DitherPattern } from './DitherPattern';
import Terminal from './illustrations/Terminal';
import LayeredPlanes from './illustrations/LayeredPlanes';
import LanguageCards from './illustrations/LanguageCards';
import PriceTag from './illustrations/PriceTag';
import PuzzlePieces from './illustrations/PuzzlePieces';

const FeatureCards: React.FC = () => {
  return (
    <section className="w-full min-h-screen bg-[#F9F9F9] py-20 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
      <div className="max-w-7xl w-full">
        <DitherPattern />
        
        {/* 
          Grid Layout Strategy:
          Desktop (lg): 3 columns.
          Row 1: 3 cards.
          Row 2: Card 4 (span 1) and Card 5 (span 2) to fill the row perfectly.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <Card 
            title="SIMPLE AND POWERFUL"
            description={
              <>
                <p className="mb-4">From notebook to production, prototype, iterate, and deploy your application with Chroma.</p>
                <p>Getting started is as easy as pip install...</p>
              </>
            }
            illustration={Terminal}
            delay={0}
            className="min-h-[500px]"
          />

          {/* Card 2 */}
          <Card 
            title="FULL FEATURED"
            description={
              <>
                <p className="mb-4">Everything you need for retrieval:</p>
                <ul className="list-none space-y-1">
                  <li>Vector search</li>
                  <li>Full-text search</li>
                  <li>Metadata search</li>
                  <li>SOC II Type I</li>
                </ul>
              </>
            }
            illustration={LayeredPlanes}
            delay={0.1}
            className="min-h-[500px]"
          />

          {/* Card 3 */}
          <Card 
            title="SPEAKS YOUR LANGUAGE"
            description="Clients for JS, Python, Ruby, PHP, Java and more."
            illustration={LanguageCards}
            delay={0.2}
            className="min-h-[500px]"
          />

          {/* Card 4 - Free */}
          <Card 
            title="FREE"
            description="Open source under Apache 2.0"
            illustration={PriceTag}
            delay={0.3}
            className="min-h-[400px]"
          />

          {/* Card 5 - Integrated - Spans 2 cols on Large screens */}
          <Card 
            title="INTEGRATED"
            description="Embedding models from HuggingFace, OpenAI, Google, and more, built in. Integrated with Langchain, LlamaIndex, with more tools and frameworks coming soon."
            illustration={PuzzlePieces}
            delay={0.4}
            className="min-h-[400px] lg:col-span-2"
          />

        </div>
      </div>
    </section>
  );
};

export default FeatureCards;