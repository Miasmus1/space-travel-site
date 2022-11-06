import DesignSystem from './DesignSystem';
import GlobalStyle from './globalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="container grid cta bg-dark">
        <div className="box">a</div>
        <div className="box sr-only">b</div>
        <div className="box">c</div>
        <div className="box">d</div>
      </div>
      <DesignSystem></DesignSystem>
    </>
  );
}

export default App;
