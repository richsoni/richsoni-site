const React = require("react")
const Radium          = require("radium")
const assign = require("object-assign")
let defaultStyle = {
  width: '100%',
  minHeight: '50vh',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  border: '3px groove #232323',
  borderLeft: 0,
  borderRight: 0,
}

class Half extends React.Component{
  render(){
    const {
      classNames,
      children,
      style,
    } = this.props
    return <section className={classNames.section} style={assign({}, defaultStyle, style)}>
      {children}
    </section>
  }
}

Half.propTypes = {
  style: React.PropTypes.object,
  classNames: React.PropTypes.object,
}
Half.defaultProps = {
  style: {},
  classNames: {},
}

module.exports = Radium(Half)
