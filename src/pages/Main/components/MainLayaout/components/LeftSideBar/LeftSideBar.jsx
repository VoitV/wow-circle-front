import { SideBarArticle } from './components/SideBarArticle/SideBarAticle';
import { SideBarNav } from './components/SideBarNav/SideBarNav';
import { SideBarResource } from './components/SideBarResource/SideBarResource';
import './styles.scss';

export const LeftSideBar = () => (
  <div className="left-sidebar">
    <SideBarNav />
    <div className="sidebar-additional">
      <SideBarResource />
      <SideBarArticle />
    </div>
  </div>
);
