import { LeftSideBar } from './components/LeftSideBar';
import { LayaoutCenter } from './components/LayaoutCenter';
import './styles.scss';

export const MainLyaout = () => (
  <div className="page-layaout">
    <div className="main-layaout">
      <LeftSideBar />
      <LayaoutCenter />
    </div>
    <footer>
      <div className="footer-img">
        <img src="https://wowcircle.net/themes/wowcircle/images/bg/footer.png" alt="footer" />
      </div>
      <div className="footer-content">1</div>
    </footer>
  </div>
);
