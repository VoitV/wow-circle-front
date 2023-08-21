import { ResourceBtn } from './components/ResourceBtn';
import './styles.scss';

const text = [
  {
    btnText: 'База даних 2.4.3',
  },
  {
    btnText: 'База даних 3.3.5а',
  },
  {
    btnText: 'База даних 4.3.4',
  },
  {
    btnText: 'Адони для WoW',
  },
];

export const SideBarResource = () => (
  <div className="side-bar-resource">
    {text.map((el) => (
      <ResourceBtn text={el.btnText} />
    ))}
  </div>
);
