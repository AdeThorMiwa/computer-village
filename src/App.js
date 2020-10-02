import React, { useEffect, useState, lazy, Suspense } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import ReduxToastr from 'react-redux-toastr';
import Header from './components/Headers/Header/Header';
import Footer from './components/Footers/Footer/Footer';
import NotFound from './pages/NotFound';
import Main from './components/Main/Main';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './assets/css/bootstrap.min.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import { AppContainer } from './style';
import { ScrollToTop, PageLoader } from './components/Helpers/Helpers';
import NewsLetterModal from './components/NewsLetter/NewsLetterModal';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

const Landing = lazy(() => import('./pages/Landing'));
const Product = lazy(() => import('./pages/Product'));
const Products = lazy(() => import('./pages/Products'));
const Categories = lazy(() => import('./pages/Categories'));
const Auth = lazy(() => import('./pages/Auth'));
const Store = lazy(() => import('./pages/Store'));
const Search = lazy(() => import('./pages/Search'));
const FAQ = lazy(() => import('./pages/FAQ'));

const App = () => {
  window.oncontextmenu = function(e) {
    // e.preventDefault();
  }

  const [newsLetterOpened, setNewsLetter] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("__markt-dont-show-news-letter")) setTimeout(() => setNewsLetter(true), 3000);
  }, [setNewsLetter])

  return (
    <AppContainer>
      <ReduxToastr
      timeOut={4000}
      newestOnTop={false}
      preventDuplicates
      position="top-right"
      getState={(state) => state.toastr}
      transitionIn="bounceIn"
      transitionOut="bounceOut"
      progressBar={true}
      closeOnToastrClick={true} />

      <Header/>
      <NewsLetterModal show={newsLetterOpened} setShow={setNewsLetter}/>
      <Main marginTop="222px">
        <ErrorBoundary>
        <Suspense fallback={<div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><PageLoader /></div>}>
            <Switch>
              <Route exact path="/" component={Landing}/>
              <Route exact path="/product/:productId" component={Product} />
              <Route exact path="/category" component={Categories}/> 
              <Route exact path="/category/:category" component={Categories}/>
              <Route exact path="/category/:category/:brand" component={Products} />
              <Route exact path="/auth/:page" component={Auth} />
              <Route exact path="/auth" component={Auth} />
              <Route exact path="/stores/:storeId" component={Store} />
              <Route exact path="/search/:query" component={Search} />
              <Route exact path="/search/:query/:page" component={Search} />
              <Route exact path="/faq" component={FAQ} />
              <Route component={NotFound}/>
            </Switch>
          </Suspense>
        </ErrorBoundary>
      </Main>
      <ScrollToTop />
      <Footer/>
    </AppContainer>
  );
}

export default App;
