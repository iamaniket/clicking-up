import { useNavigate } from 'react-router-dom';

export function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div
      data-testid="login-page"
      className="flex min-h-dvh items-center justify-center bg-surface px-4"
    >
      <div className="w-full max-w-[440px]">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary">
            <span className="material-symbols-outlined text-3xl text-on-primary">
              layers
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-on-surface">
            TaskFlow
          </h1>
          <p className="mt-1 text-xs font-bold uppercase tracking-[0.3em] text-on-surface-variant">
            Architectural Productivity
          </p>
        </div>

        <div className="rounded-[2rem] bg-surface-container-lowest p-8 shadow-lg shadow-outline-variant/10 md:p-10">
          <div className="mb-6 grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 rounded-xl bg-surface-container-highest px-4 py-3 text-sm font-semibold text-on-surface transition hover:bg-surface-container-high">
              Google
            </button>
            <button className="flex items-center justify-center gap-2 rounded-xl bg-surface-container-highest px-4 py-3 text-sm font-semibold text-on-surface transition hover:bg-surface-container-high">
              GitHub
            </button>
          </div>

          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-outline-variant/30" />
            <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
              Or continue with
            </span>
            <div className="h-px flex-1 bg-outline-variant/30" />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                Email Address
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute top-1/2 left-4 -translate-y-1/2 text-outline">
                  mail
                </span>
                <input
                  type="email"
                  placeholder="name@company.com"
                  className="w-full rounded-xl bg-surface-container-highest py-3.5 pr-4 pl-12 text-on-surface placeholder:text-outline-variant focus:ring-2 focus:ring-primary-container focus:outline-none"
                />
              </div>
            </div>

            <div className="mb-6">
              <div className="mb-2 flex items-center justify-between">
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                  Password
                </label>
                <button
                  type="button"
                  className="text-xs font-bold text-primary"
                >
                  Forgot?
                </button>
              </div>
              <div className="relative">
                <span className="material-symbols-outlined absolute top-1/2 left-4 -translate-y-1/2 text-outline">
                  lock
                </span>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-xl bg-surface-container-highest py-3.5 pr-4 pl-12 text-on-surface placeholder:text-outline-variant focus:ring-2 focus:ring-primary-container focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-dim py-4 text-base font-bold text-on-primary shadow-lg shadow-primary/20 transition-transform hover:scale-[1.01] active:scale-[0.99]"
            >
              Sign In
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </form>
        </div>

        <p className="mt-8 text-center text-sm text-on-surface-variant">
          Don't have an account?{' '}
          <button className="font-bold text-primary">Create an account</button>
        </p>

        <div className="mt-8 flex justify-center gap-8">
          <button className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
            Privacy Policy
          </button>
          <button className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
            Terms of Service
          </button>
          <button className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
            Support
          </button>
        </div>
      </div>
    </div>
  );
}
