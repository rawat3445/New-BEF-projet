import Header from '../Header';
import Footer from '../Footer';
import toast, { Toaster } from 'react-hot-toast';
import LoginForm from './LoginForm';

const Login = () => {
  return (
    <>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#363636',
            color: '#fff',
            borderRadius: '8px',
          },
          success: {
            style: {
              background: '#4facfe',
              color: '#fff',
            },
          },
          error: {
            style: {
              background: '#ff4d4f',
              color: '#fff',
            },
          },
        }}
      />
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-[#eef2f3] to-[#8e9eab] flex items-center justify-center py-10">
        <LoginForm />
      </div>
      <Footer />
    </>
  );
};

export default Login;