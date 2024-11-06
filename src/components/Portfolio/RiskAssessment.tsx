import React, { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface RiskAssessmentProps {
  onComplete: (score: number, answers: Record<number, number>) => void;
}

const questions = [
  {
    id: 1,
    text: "What is your primary investment goal?",
    options: [
      { value: 1, text: "Preserve my wealth and generate stable returns" },
      { value: 2, text: "Generate moderate returns while preserving capital" },
      { value: 3, text: "Grow my wealth over the long term" },
      { value: 4, text: "Maximize returns, willing to take high risks" }
    ]
  },
  {
    id: 2,
    text: "How long do you plan to stay invested?",
    options: [
      { value: 1, text: "Less than 1 year" },
      { value: 2, text: "1-3 years" },
      { value: 3, text: "3-5 years" },
      { value: 4, text: "More than 5 years" }
    ]
  },
  {
    id: 3,
    text: "How would you react if your investment dropped by 20%?",
    options: [
      { value: 1, text: "Sell immediately to prevent further losses" },
      { value: 2, text: "Sell a portion to reduce risk" },
      { value: 3, text: "Hold and wait for recovery" },
      { value: 4, text: "Buy more at lower prices" }
    ]
  },
  {
    id: 4,
    text: "What percentage of your monthly income can you invest?",
    options: [
      { value: 1, text: "Less than 10%" },
      { value: 2, text: "10-20%" },
      { value: 3, text: "20-30%" },
      { value: 4, text: "More than 30%" }
    ]
  },
  {
    id: 5,
    text: "How much investment experience do you have?",
    options: [
      { value: 1, text: "No experience" },
      { value: 2, text: "Some experience with mutual funds" },
      { value: 3, text: "Experienced with various investment products" },
      { value: 4, text: "Very experienced, including direct equity" }
    ]
  },
  {
    id: 6,
    text: "What is your current life stage?",
    options: [
      { value: 1, text: "Retired or nearing retirement" },
      { value: 2, text: "Mid-career with dependents" },
      { value: 3, text: "Early career" },
      { value: 4, text: "Just started working" }
    ]
  },
  {
    id: 7,
    text: "What is your primary source of income?",
    options: [
      { value: 1, text: "Pension/Fixed Income" },
      { value: 2, text: "Salary with limited growth" },
      { value: 3, text: "Salary with good growth potential" },
      { value: 4, text: "Business/Self-employed" }
    ]
  }
];

export default function RiskAssessment({ onComplete }: RiskAssessmentProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const handleAnswer = (value: number) => {
    setAnswers(prev => ({
      ...prev,
      [questions[currentQuestion].id]: value
    }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      const totalScore = Object.values(answers).reduce((acc, val) => acc + val, 0);
      const normalizedScore = Math.round((totalScore / (questions.length * 4)) * 100);
      onComplete(normalizedScore, answers);
    }
  };

  const handlePrevious = () => {
    setCurrentQuestion(prev => prev - 1);
  };

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="bg-white rounded-xl shadow-sm p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Risk Profile Assessment</h1>
        <p className="text-gray-600">Answer these questions to create your personalized investment portfolio</p>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
        <div
          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          {question.text}
        </h2>

        <div className="space-y-4">
          {question.options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleAnswer(option.value)}
              className="w-full text-left p-4 rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-colors"
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between">
        {currentQuestion > 0 ? (
          <button
            onClick={handlePrevious}
            className="inline-flex items-center text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Previous Question
          </button>
        ) : (
          <div></div>
        )}
        <div className="text-gray-500">
          Question {currentQuestion + 1} of {questions.length}
        </div>
      </div>
    </div>
  );
}