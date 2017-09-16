import { h, Component } from 'preact';
import style from './style';
import WindowToolbar from '../window-toolbar'

export default class Window extends Component {
  constructor({ x=10, y=10, w=600, h=600 }) {
    super(...arguments)
    this.pos = { x, y, w, h }
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

    const posStyle = `left: ${this.pos.x}px; top: ${this.pos.y}px; width: ${this.pos.w}px; height: ${this.pos.h}px;`;

    return (
      <div class={style.floatingWindow} style={posStyle}>
        <header class={style.titlebar}>
          <img src="/assets/icons/window-title-bar.png" />
          <h1>{this.title}</h1>

          <div class={style.controls}>
            <button>
              <svg width="10" height="1">
                <line x1="0" y1="0.5" x2="10" y2="0.5" stroke="black" />
              </svg>
            </button>
            <button>
              <svg width="10" height="10">
                <rect x="0.5" y="0.5" width="9" height="9" stroke="black" fill="transparent" />
              </svg>
            </button>
            <button class={style.exit}>
              <svg width="10" height="10">
                <line x1="0" y1="0" x2="10" y2="10" stroke="black" />
                <line x1="0" y1="10" x2="10" y2="0" stroke="black" />
              </svg>
            </button>
          </div>
        </header>
        <WindowToolbar items={menuItems} />
        <div class={style.windowContent}>{this.renderWindowContent()}</div>
      </div>
    )
  }
}

// <TitleBar title={this.title}>
// <Toolbar options={this.options}>
