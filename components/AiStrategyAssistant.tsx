
import React, 'react';
import { useState } from 'react';
import { type StrategyStep } from '../types';
import { generateMarketingStrategy } from '../services/geminiService';
import { LightbulbIcon, CheckCircleIcon } from './IconComponents';

const AiStrategyAssistant: React.FC = () => {
  const [goal, setGoal] = useState('');
  const [strategySteps, setStrategySteps] = useState<StrategyStep[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!goal.trim()) {
      setError("Please enter your business goal.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setStrategySteps([]);

    try {
      const steps = await generateMarketingStrategy(goal);
      setStrategySteps(steps);
    } catch (err: any) {
      setError(err.message || "An unknown error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="strategy-ai" className="py-20 md:py-28 bg-dark-bg/95 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/10 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <div className="inline-block bg-brand-primary/10 text-brand-primary p-4 rounded-full mb-6">
                    <LightbulbIcon />
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">AI-Powered Strategy Assistant</h2>
                <p className="text-lg text-dark-subtle">
                    Describe your business goal, and our AI will generate a high-level marketing strategy for you in seconds.
                </p>
            </div>

            <div className="max-w-3xl mx-auto">
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-8">
                    <input
                        type="text"
                        value={goal}
                        onChange={(e) => setGoal(e.target.value)}
                        placeholder="e.g., Increase online sales for my shoe store"
                        className="flex-grow bg-dark-card border border-slate-700 rounded-lg px-4 py-3 text-dark-text placeholder-dark-subtle focus:ring-2 focus:ring-brand-primary focus:outline-none transition-shadow"
                        disabled={isLoading}
                    />
                    <button type="submit" className="bg-brand-primary hover:bg-brand-secondary text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed" disabled={isLoading}>
                        {isLoading ? 'Generating...' : 'Create Strategy'}
                    </button>
                </form>

                {isLoading && (
                     <div className="flex justify-center items-center gap-4 text-dark-subtle">
                        <svg className="animate-spin h-6 w-6 text-brand-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Crafting your custom marketing plan...</span>
                    </div>
                )}
                
                {error && (
                    <div className="bg-red-900/50 border border-red-700 text-red-300 p-4 rounded-lg text-center">
                        {error}
                    </div>
                )}

                {strategySteps.length > 0 && (
                    <div className="space-y-6 animate-fade-in-up">
                        <h3 className="text-2xl font-bold text-center text-white">Your 3-Step Strategy Outline:</h3>
                        {strategySteps.map((step, index) => (
                            <div key={index} className="bg-dark-card p-6 rounded-xl border border-slate-800/50 flex items-start gap-4">
                               <div className="flex-shrink-0 h-8 w-8 rounded-full bg-brand-primary/20 text-brand-primary flex items-center justify-center mt-1">
                                    <CheckCircleIcon />
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-white mb-2">{step.title}</h4>
                                    <p className="text-dark-subtle leading-relaxed">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    </section>
  );
};

export default AiStrategyAssistant;
