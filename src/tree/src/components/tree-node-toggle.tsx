import { FunctionalComponent, SetupContext } from 'vue'

interface TreeNodeToggleProps {
  expanded: boolean
  onClick: () => void
}

export const TreeNodeToggle: FunctionalComponent<TreeNodeToggleProps> = (
  props,
  { emit }
) => (
  <svg
    style={{
      width: '25px',
      height: '16px',
      display: 'inline-block',
      transform: props.expanded ? 'rotate(90deg)' : ''
    }}
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    onClick={() => emit('onClick')}
  >
    <path fill="currentColor" d="M384 192v640l384-320.064z"></path>
  </svg>
)

TreeNodeToggle.displayName = 'tree-node-toggle'
