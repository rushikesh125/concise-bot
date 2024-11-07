import { MagicCard } from "./MagicCard";
const FeaturesSection = () => {
  return (
    <div className="mt-5 md:mt-10 p-2 md:flex ">
      <MagicCard
        gradientSize={250}
        gradientColor="#00fc54"
        gradientOpacity={0.6}
      >
        <i className="bi bi-robot text-4xl"></i>
        <h2 className="text-xl font-semibold"> Intelligent Summarization</h2>
        <p>
          Condense lengthy documents, articles, and PDFs with ease. Concise Bot
          captures key insights, ensuring you get the essentials without the
          extra.
        </p>
      </MagicCard>
      <MagicCard
        gradientSize={250}
        gradientColor="#00fc54"
        gradientOpacity={0.6}
      >
        <i className="bi bi-bezier2 text-4xl"></i>
        <h2 className="text-xl font-semibold">Guided Learning Assistance</h2>
        <p>
          Looking for clarity on a topic? Concise Bot provides tailored
          guidance, empowering you to understand complex concepts at your pace.
        </p>
      </MagicCard>
      <MagicCard
        gradientSize={250}
        gradientColor="#00fc54"
        gradientOpacity={0.6}
      >
        {" "}
        <i className="bi bi-boxes text-4xl"></i>
        <h2 className="text-xl font-semibold">Natural Language Processing</h2>
        <p>
          Interact naturally with Concise Bot, powered by sophisticated NLP for
          accurate, human-like responses
        </p>
      </MagicCard>
      <MagicCard
        gradientSize={250}
        gradientColor="#00fc54"
        gradientOpacity={0.6}
      >
        <i className="bi bi-filetype-pdf text-4xl"></i>
        <h2 className="text-xl font-semibold">PDF Analysis & Summarization</h2>
        <p>
          Upload your PDFs, and Concise Bot dives deep, summarizing and
          extracting valuable insights for faster, easier understanding.
        </p>
      </MagicCard>
    </div>
  );
};

export default FeaturesSection;
