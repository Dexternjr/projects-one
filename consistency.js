class ConsistencyAdvice {
  constructor() {
    this.message = "Focus on progress, not perfection. Consistency is about showing up and putting in the effort, not about flawless execution every single time. Life throws curveballs, and there will be days when you can't give your all. Don't let those days derail your progress. Acknowledge them, adjust as needed, and get back on track. A single missed workout won't erase weeks of dedication at the gym.";
  }

  getBenefits() {
    return {
      sustainability: "By focusing on progress, you celebrate small wins and maintain a positive momentum.",
      compoundingEffects: "Even small, consistent efforts add up over time. Imagine reading 10 pages a day for a year. That's over 3,600 pages!",
      buildingHabits: "When you focus on progress, you're building habits, not just achieving goals. Habits become ingrained in your routine, making consistency almost effortless over time."
    };
  }

  getBonusTip() {
    return "Make consistency easier by setting SMART goals (Specific, Measurable, Achievable, Relevant, and Time-bound). This helps you track progress and celebrate milestones, keeping you motivated on your consistent journey.";
  }
}

// Usage Example
const consistencyAdvice = new ConsistencyAdvice();
console.log(consistencyAdvice.message);  // Outputs the main message

const benefits = consistencyAdvice.getBenefits();
console.log(benefits.sustainability);  // Explains the sustainability benefit

const bonusTip = consistencyAdvice.getBonusTip();
console.log(bonusTip);  // Provides the bonus tip



