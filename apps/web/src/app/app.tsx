import { useEffect } from 'react';
import { useThemeStore } from '../stores/themeStore';
import { AppRouter } from '../router';

export function App() {
  const theme = useThemeStore((s) => s.theme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return <AppRouter />;
}

export default App;
