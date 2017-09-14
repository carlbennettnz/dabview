import { h, Component } from 'preact';
import style from './style'

export default class Button extends Component {
  render({ name, x, y }) {
    const posStyle = `top: ${y}px; left: ${x}px;`
    return <button class={style.button} style={posStyle}>{name}</button>
  }
}
