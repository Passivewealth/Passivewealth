import React from 'react';
import { ArrowRight } from 'lucide-react';

interface RiskProfileProps {
  score: number;
  answers: Record<number, number>;
  onContinue: () => void;
}

const getRiskProfile = (score: number) => {
  if (score <= 25) return { type: 'Conservative', color: 'blue' };
  if (score <= 50) return { type: 'Moderate', color: 'green' };
  if (score <= 75) return { type: 'Growth', color: 'yellow' };
  return { type: 'Aggressive', color: 'red' };
};

export default function RiskProfile({ score, onContinue }: RiskProfileProps) {
  const profile = getRiskProfile(score);

  return (
    <div className="bg-white rounded-xl shadow-sm p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Your Risk Profile</h1>
        <p className="text-gray-600">Based on your responses, we've analyzed your risk tolerance</p>
      </div>

      <div className="mb-12">
        <div className="relative pt-8">
          <div className="flex justify-between mb-2">
            <span className="text-sm text-gray-500">Conservative</span>
            <span className="text-sm text-gray-500">Aggressive</span>
          </div>
          <div className="h-2 bg-gradient-to-r from-blue-500 via-green-500 via-yellow-500 to-red-500 rounded-full">
            <div 
              className="absolute w-4 h-4 bg-white border-2 border-blue-600 rounded-full -mt-1 transform -translate-y-1/2"
              style={{ left: `${score}%` }}
            ></div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {profile.type} Investor
          </h2>
          <p className="text-gray-600">
            Risk Score: {score}/100
          </p>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <h3 className="font-semibold text-gray-900 mb-4">Profile Characteristics:</h3>
        <ul className="space-y-2 text-gray-600">
          {profile.type === 'Conservative' && (
            <>
              <li>• Prioritizes capital preservation</li>
              <li>• Prefers stable, low-risk investments</li>
              <li>• Focuses on regular income generation</li>
            </>
          )}
          {profile.type === 'Moderate' && (
            <>
              <li>• Balances growth with stability</li>
              <li>• Comfortable with moderate market fluctuations</li>
              <li>• Seeks steady long-term returns</li>
            </>
          )}
          {profile.type === 'Growth' && (
            <>
              <li>• Focuses on capital appreciation</li>
              <li>• Accepts higher volatility for better returns</li>
              <li>• Has a long-term investment horizon</li>
            </>
          )}
          {profile.type === 'Aggressive' && (
            <>
              <li>• Maximizes growth potential</li>
              <li>• Comfortable with high market volatility</li>
              <li>• Seeks substantial long-term returns</li>
            </>
          )}
        </ul>
      </div>

      <button
        onClick={onContinue}
        className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700"
      >
        View Recommended Portfolio
        <ArrowRight className="ml-2 h-5 w-5" />
      </button>
    </div>
  );
}