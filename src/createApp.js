import themeProvider from './styles/themeProvider';
import Demo from './components/Demo';

export default function createApp() {
  return themeProvider()(Demo);
}
