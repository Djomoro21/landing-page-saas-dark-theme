import { Feature } from '@/components/Feature';

const features = [
  {
    title: "Integration Ecosystem",
    description:
      "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
  },
  {
    title: "Goal Setting and Tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
  {
    title: "Secure Data Encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
];

export const Features = () => {
  return (
  <section className="bg-black text-white py-[72px]">
    <div className="container">
      <div className="max-w-[840px] mx-auto">
        <h1 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter"> Everything you need</h1>
        <p className="text-center mt-5 text-xl text-white/70">
          Enjoy customizable lists,team work tools and smart tracking all in one place.
          Set tasks get reminders and see your progress simply and quickly
        </p>
        <div className="mt-16 flex flex-col sm:flex-row sm:flex-1 gap-6">
          {features.map(({title, description})=>(
            <Feature title={title} description={description} key={title}/>
          ))}
        </div>

      </div>
    </div>
  </section>
  );
};
