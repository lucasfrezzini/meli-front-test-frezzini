import './styles.scss'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import NavBar from './components/NavBar/NavBar';
import Empty from './pages/Empty/Empty';
import NotFound from "./pages/NotFound/NotFound";
import Results from "./pages/Results/Results";
import Detail from './pages/Detail/Detail';

function App() {
  return (
		<>
		<BrowserRouter>
		<NavBar />
		<main className="Main">
		<Routes>
			<Route path="/" element={<Empty />} />
			<Route path="*" element={<NotFound />} />
			<Route path="results/:search" element={<Results />} />
			<Route path="items/:id" element={<Detail />} />
		</Routes>
		</main>
		</BrowserRouter>
		</>
  );
}

export default App;
