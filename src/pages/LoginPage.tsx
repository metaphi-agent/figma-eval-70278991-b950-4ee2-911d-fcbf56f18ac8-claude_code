import { useState, FormEvent } from 'react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Checkbox } from '../components/ui/Checkbox';
import { Logo } from '../components/ui/Logo';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (value: string): string => {
    if (!value) return 'Email or phone number is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[\d\s-()]+$/;
    if (!emailRegex.test(value) && !phoneRegex.test(value)) {
      return 'Please enter a valid email or phone number';
    }
    return '';
  };

  const validatePassword = (value: string): string => {
    if (!value) return 'Password is required';
    if (value.length < 6) return 'Password must be at least 6 characters';
    return '';
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    if (emailError || passwordError) {
      setErrors({
        email: emailError,
        password: passwordError,
      });
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Login successful!');
    }, 1500);
  };

  const handleGoogleSignIn = () => {
    alert('Google sign-in clicked');
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left side - Background image (desktop only) */}
      <div className="hidden lg:flex lg:w-[68.33%] relative overflow-hidden">
        <img
          src="./assets/images/login-background.png"
          alt="Scenic lighthouse view"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-12 left-12 text-white text-sm">
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
      <div className="w-full lg:w-[31.67%] bg-white flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md space-y-6 lg:space-y-8">
          {/* Logo */}
          <Logo />

          {/* Heading */}
          <h1 className="text-[32px] lg:text-[36px] font-medium text-[var(--color-neutral-900)] leading-tight">
            Nice to see you again
          </h1>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <Input
              label="Login"
              type="text"
              placeholder="Email or phone number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={errors.email}
              autoComplete="username"
            />

            {/* Password Input */}
            <Input
              label="Password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={errors.password}
              showPasswordToggle
              autoComplete="current-password"
            />

            {/* Remember me & Forgot password */}
            <div className="flex items-center justify-between">
              <Checkbox
                label="Remember me"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <a
                href="#forgot-password"
                className="text-[14px] text-[var(--color-primary-blue)] hover:underline"
              >
                Forgot password?
              </a>
            </div>

            {/* Sign in button */}
            <Button type="submit" fullWidth isLoading={isSubmitting}>
              Sign in
            </Button>

            {/* Google sign in */}
            <Button
              type="button"
              variant="secondary"
              fullWidth
              onClick={handleGoogleSignIn}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.1713 8.36791H17.5001V8.33325H10.0001V11.6666H14.7096C14.023 13.6069 12.1763 14.9999 10.0001 14.9999C7.23882 14.9999 5.00049 12.7616 5.00049 9.99992C5.00049 7.23867 7.23882 4.99992 10.0001 4.99992C11.2746 4.99992 12.4296 5.48075 13.3146 6.26617L15.6738 3.90742C14.1855 2.52242 12.1955 1.66659 10.0001 1.66659C5.39799 1.66659 1.66716 5.39742 1.66716 9.99992C1.66716 14.6024 5.39799 18.3333 10.0001 18.3333C14.6026 18.3333 18.3334 14.6024 18.3334 9.99992C18.3334 9.44117 18.2763 8.89575 18.1713 8.36791Z" fill="#FFC107"/>
                <path d="M2.6275 6.12117L5.36583 8.129C6.10666 6.29484 7.90083 4.99984 10 4.99984C11.2745 4.99984 12.4295 5.48067 13.3145 6.26609L15.6737 3.90734C14.1854 2.52234 12.1954 1.6665 10 1.6665C7.15917 1.6665 4.6975 3.32484 3.3525 5.74109" fill="#FF3D00"/>
                <path d="M9.99955 18.3333C12.1529 18.3333 14.1087 17.5095 15.5879 16.1762L13.0062 13.9887C12.1429 14.6416 11.0862 15.0008 9.99955 15C7.83288 15 5.99205 13.6179 5.29872 11.6891L2.58205 13.783C3.91038 16.2391 6.39038 18.3333 9.99955 18.3333Z" fill="#4CAF50"/>
                <path d="M18.1713 8.36825H17.5V8.33325H10V11.6666H14.7096C14.3809 12.5902 13.7889 13.3972 13.0046 13.9886L13.0063 13.9874L15.588 16.1749C15.4021 16.3441 18.3333 14.1666 18.3333 9.99992C18.3333 9.44117 18.2763 8.89575 18.1713 8.36825Z" fill="#1976D2"/>
              </svg>
              Or sign in with Google
            </Button>
          </form>

          {/* Sign up link */}
          <div className="text-center text-[14px] text-[var(--color-neutral-800)]">
            Don't have an account?{' '}
            <a href="#signup" className="text-[var(--color-primary-blue)] hover:underline font-medium">
              Sign up now
            </a>
          </div>

          {/* Footer - Only visible on mobile */}
          <div className="lg:hidden pt-8 space-y-4">
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ff6b9d] via-[#c06ce6] to-[#ffa500] flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white"/>
                </svg>
              </div>
              <span className="text-[16px] font-semibold text-[var(--color-neutral-900)]">UI Unicorn</span>
            </div>
            <div className="flex items-center justify-center gap-8 text-[12px] text-[var(--color-neutral-600)]">
              <a href="https://twitter.com/uiunicorn" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-primary-blue)]">
                @uiunicorn
              </a>
              <span>© Perfect Login 2021</span>
            </div>
          </div>

          {/* Footer - Only visible on desktop */}
          <div className="hidden lg:flex items-center justify-between text-[12px] text-[var(--color-neutral-600)] pt-8">
            <a href="https://twitter.com/uiunicorn" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-primary-blue)]">
              @uiunicorn
            </a>
            <span>© Perfect Login 2021</span>
          </div>
        </div>
      </div>
    </div>
  );
}
