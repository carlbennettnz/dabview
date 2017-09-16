import { h, Component } from 'preact';
import style from './style';

export default class WindowToolbar extends Component {
  render({ items }) {
    const lis = items.map(item => <li class={style.menuItem} key={item.label}>{item.label}</li>)
    return <ul class={style.menu}>{lis}</ul>
  }
}
