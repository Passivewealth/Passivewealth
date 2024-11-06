import React, { useState } from 'react';
import RiskAssessment from './RiskAssessment';
import RiskProfile from './RiskProfile';
import CustomPortfolio from './CustomPortfolio';

type PortfolioStep = 'assessment' | 'profile' | 'portfolio';

export default function Portfolio() {
  const [currentStep, setCurrentStep] = useState<PortfolioStep>('assessment');
  const [riskScore, setRiskScore] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const handleAssessmentComplete = (score: number, userAnswers: Record<number, number>) => {
    setRiskScore(score);
    setAnswers(userAnswers);
    setCurrentStep('profile');
  };

  const handleViewPortfolio = () => {
    setCurrentStep('portfolio');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 'assessment':
        return <RiskAssessment onComplete={handleAssessmentComplete} />;
      case 'profile':
        return <RiskProfile score={riskScore} answers={answers} onContinue={handleViewPortfolio} />;
      case 'portfolio':
        return <CustomPortfolio riskScore={riskScore} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderStep()}
      </div>
    </div>
  );
}