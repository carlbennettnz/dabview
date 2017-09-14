import { h, Component } from 'preact';
import style from './style';
import WindowToolbar from '../window-toolbar'

export default class Window extends Component {
  constructor() {
    super(...arguments)
    this.pos = { x: 0, y: 0 }
  }

  render() {
    const menuItems = [
      { label: 'File' },
      { label: 'Edit' },
      { label: 'View' },
      { label: 'Project' },
      { label: 'Operate' },
      { label: 'Tools' },
      { label: 'Window' },
      { label: 'Help' }
    ]

    const posStyle = `left: ${this.pos.x}px; top: ${this.pos.y}px;`;

    return (
      <div class={style.floatingWindow} style={posStyle}>
        <header class={style.titlebar}>{this.title}</header>
        <WindowToolbar items={menuItems} />
        <div class={style.windowContent}>{this.renderWindowContent()}</div>
      </div>
    )
  }
}

// <TitleBar title={this.title}>
// <Toolbar options={this.options}>
