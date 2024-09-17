import React from 'react';
import TopBar from './TopBar';

const WorkoutPage: React.FC = () => {
  return (
    <div className="page-content">
      <TopBar title="Log Workout" />
      <div className="content-area">
        {/* Add content for logging a workout */}
        <h2>Log a New Workout</h2>
      </div>
    </div>
  );
};

export default WorkoutPage;
