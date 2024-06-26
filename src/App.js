
import './App.css';
import Accordian from './components/accordian';
import ModalTest from './components/custom-modal-popup/modal-test';
import TabTest from './components/custom-tabs/tab-test';
import ImageSlider from './components/image-slider';
import LightDarkMode from './components/light-dark-mode';
import LoadMoreData from './components/load-more-data';
import QRCodeGenerator from './components/qr-code-generator';
import RandomColor from './components/random-color';
import ScrollIndicator from './components/scroll-indicator';
import StarRating from './components/start-rating';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data';
import GithubProfileFinder from './components/github-profile-finder';

function App() {
  return (
    <div className="App">
      {/* <Accordian /> */}

      {/* <RandomColor /> */}

      {/* <StarRating noOfStars={10}/> */}

      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={'2'} limit={'10'}/> */}

      {/* <LoadMoreData /> */}

      {/* <TreeView menus={menus}/> */}

      {/* <QRCodeGenerator /> */}

      {/* <LightDarkMode /> */}

      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/> */}

      {/* <TabTest /> */}

      {/* <ModalTest /> */}

      <GithubProfileFinder />


    </div>
  );
}

export default App;
