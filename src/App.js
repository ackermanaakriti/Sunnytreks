

import './App.scss';
import Navbar from './Global/Navbar/Navbar';
import Heropage from './HomeSections/Heropage/Heropage';
import Home from './Pages/Home';
import Router from './Theme1/Router/Router';
import Homepages from './ThemeSetting/Homepages';
import ThemeProvider from './ThemeSetting/ThemeContext';
import ThemeList from './ThemeSetting/ThemeList';

function App() {
  return (
    <div className="App">
<ThemeProvider>
  <Router/>
 
</ThemeProvider>
    </div>
  );
}

export default App;
