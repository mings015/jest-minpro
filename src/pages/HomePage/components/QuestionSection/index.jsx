import Accordion from "../../../../components/ui/accordion";
import { ASK_DUMMY } from "@/helper/constants/dummy";

const QuestionSection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 py-20 bg-bg ">
      <h1 className="text-3xl text-center font-heading">
        Frequently asked questions 🚀
      </h1>
      <div className="flex flex-col gap-3 py-5">
        {ASK_DUMMY.map((question, index) => (
          <div key={index}>
            <Accordion className={"text-start"} question={question.question} answer={question.answer} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionSection;
