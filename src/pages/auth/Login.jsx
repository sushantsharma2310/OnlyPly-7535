import { QuestLogin } from '@questlabs/react-sdk';
import { useNavigate } from 'react-router-dom';
import questConfig from '../../config/questConfig';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = ({ userId, token, newUser }) => {
    localStorage.setItem('userId', userId);
    localStorage.setItem('token', token);
    
    if (newUser) {
      navigate('/onboarding');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="flex-1 bg-gradient-to-br from-blue-500 to-blue-700 p-12 hidden lg:flex flex-col justify-center">
        <h1 className="text-4xl font-bold text-white mb-4">Welcome Back!</h1>
        <p className="text-blue-100">Sign in to continue your journey</p>
      </div>
      
      <div className="flex-1 flex items-center justify-center p-12">
        <div className="w-full max-w-md">
          <QuestLogin 
            onSubmit={handleLogin}
            email={true}
            google={false}
            accent={questConfig.PRIMARY_COLOR}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;