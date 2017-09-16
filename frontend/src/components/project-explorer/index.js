import Window from '../window';

export default class ProjectExplorer extends Window {
  constructor(props) {
    super(props);

    this.title = 'NIARC 2017.lvproj* - Project Explorer'

    const node = (name, children) => ({ name, children })
    this.projectTree = [
      node('Project: NIARC 2017.lvproj', [
        node('My Computer', [
          node('vi'),
          node('Build Specifications')
        ]),
        node('RT myRIO Target (172.16.0.1)', [
          node('vi'),
          node('Build Specifications')
        ])
      ])
    ]
  }

  renderWindowContent() {
    const renderNode = ({ name, children }) => {
      return (
        <li>
          <span>{name}</span>
          {children ? <ul>{children.map(renderNode)}</ul> : null}
        </li>
      )
    }

    return this.projectTree.map(renderNode)
  }
}