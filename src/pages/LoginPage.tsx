import { useState, FormEvent } from 'react';
import { Input, Button, Toggle } from '../components/ui';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validate = () => {
    const newErrors: { email?: string; password?: string } = {};

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email) && !/^\d{10,}$/.test(email.replace(/\D/g, ''))) {
      newErrors.email = 'Enter a valid email or phone number';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log('Login submitted:', { email, password, rememberMe });
    setIsLoading(false);
  };

  const handleGoogleSignIn = () => {
    console.log('Google sign in clicked');
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left side - Hero image (desktop only) */}
      <div className="hidden lg:block lg:flex-1 relative">
        <img
          src="./assets/images/hero-lighthouse.png"
          alt="Scenic lighthouse on a rocky coast with a sailboat"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute bottom-6 left-6 text-white text-xs tracking-[-0.4px]">
          Photo by{' '}
          <a
            href="https://unsplash.com/@irrabagon"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
          >
            Alexandr Popadin
          </a>
        </div>
      </div>

      {/* Right side - Login form */}
      <div className="flex-1 lg:flex-none lg:w-[456px] flex flex-col justify-between min-h-screen bg-white">
        <div className="flex-1 flex flex-col px-4 py-6 lg:px-12 lg:py-12">
          {/* Logo */}
          <div className="flex items-center gap-2 lg:gap-3">
            <img
              src="./assets/ui-unicorn-avatar.png"
              alt="UI Unicorn"
              className="w-10 h-10 lg:w-12 lg:h-12"
            />
            <span className="text-black-900 font-medium text-base lg:text-lg">
              UI Unicorn
            </span>
          </div>

          {/* Form section */}
          <div className="flex-1 flex flex-col justify-center max-w-[360px] w-full mx-auto lg:mx-0 lg:max-w-none">
            <h1 className="font-poppins font-semibold text-xl lg:text-xl text-black-900 leading-7 mb-6 lg:mb-6">
              Nice to see you again
            </h1>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Login input */}
              <Input
                type="email"
                placeholder="Email or phone number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={errors.email}
                aria-label="Email or phone number"
              />

              {/* Password input */}
              <Input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={errors.password}
                showPasswordToggle
                aria-label="Password"
              />

              {/* Remember me & Forgot password */}
              <div className="flex items-center justify-between">
                <Toggle
                  label="Remember me"
                  checked={rememberMe}
                  onCheckedChange={setRememberMe}
                />
                <a
                  href="#"
                  className="text-xs text-system-blue tracking-[0.3px] hover:underline"
                >
                  Forgot password?
                </a>
              </div>

              {/* Sign in button */}
              <Button
                type="submit"
                variant="primary"
                className="w-full"
                isLoading={isLoading}
              >
                Sign in
              </Button>

              {/* Divider */}
              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-black-100" />
                </div>
              </div>

              {/* Google sign in */}
              <Button
                type="button"
                variant="google"
                className="w-full"
                onClick={handleGoogleSignIn}
                leftIcon={
                  <img
                    src="./assets/icons/google-icon.svg"
                    alt=""
                    className="w-5 h-5"
                  />
                }
              >
                Or sign in with Google
              </Button>

              {/* Sign up link */}
              <p className="text-center text-sm text-black-700 mt-6">
                Dont have an account?{' '}
                <a href="#" className="text-system-blue hover:underline font-medium">
                  Sign up now
                </a>
              </p>
            </form>
          </div>

          {/* Bottom logo on mobile */}
          <div className="flex justify-center mt-8 lg:hidden">
            <div className="flex items-center gap-2">
              <img
                src="./assets/ui-unicorn-avatar.png"
                alt="UI Unicorn"
                className="w-10 h-10"
              />
              <span className="text-black-900 font-medium text-base">UI Unicorn</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="px-4 py-4 lg:px-12 lg:py-6 flex items-center justify-between">
          <a
            href="https://www.figma.com/@uiunicorn"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-system-blue hover:underline"
          >
            <img
              src="./assets/icons/figma-icon.svg"
              alt=""
              className="w-6 h-6"
            />
            @uiunicorn
          </a>
          <span className="text-xs text-black-600 tracking-[-0.4px]">
            &copy; Perfect Login 2021
          </span>
        </footer>
      </div>
    </div>
  );
}
