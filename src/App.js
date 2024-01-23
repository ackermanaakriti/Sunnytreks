

import './App.scss';
import Navbar from './Global/Navbar/Navbar';
import Heropage from './HomeSections/Heropage/Heropage';
import Home from './Pages/Home';
import Homepages from './ThemeSetting/Homepages';
import ThemeProvider from './ThemeSetting/ThemeContext';
import ThemeList from './ThemeSetting/ThemeList';

function App() {
  return (
    <div className="App">
<ThemeProvider>
  
  <Homepages/>
</ThemeProvider>
    </div>
  );
}

export default App;
