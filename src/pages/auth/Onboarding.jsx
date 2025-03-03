import { OnBoarding } from '@questlabs/react-sdk';
import { useNavigate } from 'react-router-dom';
import questConfig from '../../config/questConfig';

const Onboarding = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');
  const token = localStorage.getItem('token');
  const [answers, setAnswers] = useState({});

  const getAnswers = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex">
      <div className="flex-1 bg-gradient-to-br from-blue-500 to-blue-700 p-12 hidden lg:flex flex-col justify-center">
        <h1 className="text-4xl font-bold text-white mb-4">Let's Get Started!</h1>
        <p className="text-blue-100">We're setting things up for you.</p>
      </div>
      
      <div className="flex-1 flex items-center justify-center p-12">
        <div className="w-full max-w-2xl">
          <OnBoarding
            userId={userId}
            token={token}
            questId={questConfig.QUEST_ONBOARDING_QUESTID}
            answer={answers}
            setAnswer={setAnswers}
            getAnswers={getAnswers}
            accent={questConfig.PRIMARY_COLOR}
            singleChoose="modal1"
            multiChoice="modal2"
          >
            <OnBoarding.Header />
            <OnBoarding.Content />
            <OnBoarding.Footer />
          </OnBoarding>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;