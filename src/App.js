import Toggle from './components/toggle';
import BrandIcon from './components/BrandIcon';

function App() {
  return (
    <div className="container flex justify-between my-3">
      <BrandIcon />
      <div>
        <Toggle />
      </div>
    </div>
  );
}

export default App;
