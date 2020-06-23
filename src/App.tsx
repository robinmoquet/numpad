import React from 'react';
import Navbar from './components/Navbar';
import ContainerQuestion from './components/ContainerQuestion';
import Sidebar from './components/Sidebar';
import AnimationIntersectionObserver from './components/AnimationIntersectionObserver';
import { connect } from 'react-redux';

function App(state: any) {
  return (
    <div className="App min-h-screen">
        <AnimationIntersectionObserver>
          <Navbar />
          <div className="content flex p-5 mt-10 reveal">
            {(state.onGame ? (
              <>
                <ContainerQuestion />
                <Sidebar />
              </>
            ) : null)}
          </div>
        </AnimationIntersectionObserver>
    </div>
  );
}

// @ts-ignore
export default connect(state => ({onGame: state.onGame}))(App);
